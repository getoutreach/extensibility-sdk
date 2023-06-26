import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import {
  Body,
  Controller,
  Get,
  Injectable,
  Module,
  Post,
  Query,
} from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { firstValueFrom } from 'rxjs';

// This is an example NodeJS application illustrating a possible way of
// handling S2S API integration with Outreach. It is written in TypeScript
// language using NestJS framework. We recommend to start looking into it from
// the AppController class. It is an entry point for webhook or External configuration setup URL
// calls by Outreach.

@Injectable()
class TokenService {
  private orgInstallationMap: Map<string, string> = new Map();

  constructor(
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {}

  private getAppBasedToken(): Promise<string> {
    const iat = Date.now() / 1000;

    const payload = {
      iat,
      exp: iat + 3600,
      iss: process.env.OUTREACH_APP_ID,
    };

    return this.jwtService.signAsync(payload, {
      algorithm: 'RS256',
      privateKey: process.env.OUTREACH_PRIVATE_KEY,
    });
  }

  public async getOrgBasedToken(orgId: string): Promise<string> {
    const installationId = this.orgInstallationMap.get(orgId) ?? '';
    return this.getInstallationBasedToken(installationId);
  }

  public async getInstallationBasedToken(
    installationId: string,
  ): Promise<string> {
    const appBasedToken = await this.getAppBasedToken();

    const url = `https://accounts.outreach.io/api/installs/${installationId}/actions/accessToken`;
    const options = { headers: { Authorization: `Bearer ${appBasedToken}` } };

    const { data } = await firstValueFrom(
      this.httpService.post(url, undefined, options),
    );

    this.orgInstallationMap.set(
      data.data.relationships.org.data.id,
      installationId,
    );

    return data.data.meta.accessToken;
  }

  public async getSetupBasedToken(installSetupToken: string): Promise<string> {
    const appBasedToken = await this.getAppBasedToken();

    const { data } = await firstValueFrom(
      this.httpService.post(
        `https://accounts.outreach.io/api/installs/${installSetupToken}/actions/setupToken`,
        undefined,
        { headers: { Authorization: `Bearer ${appBasedToken}` } },
      ),
    );

    return this.getInstallationBasedToken(data.data.id);
  }
}

@Controller()
class AppController {
  constructor(
    private tokenService: TokenService,
    private httpService: HttpService,
  ) {}

  /**
   * Put this endpoint URL into Webhook configuration of your app, and it will be
   * called by Outreach after app installation.
   * @param webhookData request payload
   */
  @Post('webhook')
  webhook(@Body() webhookData: any): Promise<string> {
    const installationId = webhookData.data.id;

    return this.tokenService.getInstallationBasedToken(installationId);
  }

  /**
   * Put this endpoint URL into External configuration setup URL of your app and
   * user will get redirected here after app installation.
   * @param installSetupToken a special token for getting information about installation. Added as a query parameter to
   * External configuration setup URL by Outreach
   */
  @Get('setup')
  setup(
    @Query('installSetupToken') installSetupToken: string,
  ): Promise<string> {
    return this.tokenService.getSetupBasedToken(installSetupToken);
  }

  /**
   * An example endpoint showing how to submit new custom event to a prospect's
   * activity feed using information received from a webhook or
   * External configuration setup URL call.
   * @param eventId custom event id
   * @param prospectId prospect id
   * @param orgId organization id
   */
  @Get('submitEvent')
  async submitEvent(
    @Query('eventId') eventId: string,
    @Query('prospectId') prospectId: string,
    @Query('orgId') orgId: string,
  ): Promise<any> {
    const requestData = {
      data: {
        type: 'event',
        attributes: {
          name: eventId,
          externalUrl: 'https://my-app.test/messages/123',
          body: 'This is an additional event payload that will be displayed in the prospect event feed.'
        },
        relationships: {
          prospect: {
            data: {
              type: 'prospect',
              id: prospectId,
            },
          },
        },
      },
    };

    const token = await this.tokenService.getOrgBasedToken(orgId);

    const { data } = await firstValueFrom(
      this.httpService.post(
        'https://api.outreach.io/api/v2/events',
        requestData,
        { headers: { Authorization: `Bearer ${token}` } },
      ),
    );

    return data;
  }
}

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [TokenService, JwtService],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    bodyParser.json({
      type: (req: any) =>
        req.get('Content-Type') === 'application/vnd.api+json',
      strict: false,
    }),
  );

  await app.listen(3000);
}

bootstrap();
