import { ClientContextKeys } from '../context/keys/ClientContextKeys';
import { OpportunityContextKeys } from '../context/keys/OpportunityContextKeys';
import { ProspectContextKeys } from '../context/keys/ProspectContextKeys';
import { UserContextKeys } from '../context/keys/UserContextKeys';
import { utils } from '../utils';
import { AccountContextKeys } from '../context/keys/AccountContextKeys';
import { Application } from '../manifest/Application';
import { Scopes } from '../manifest/api/Scopes';
import { Store } from '../manifest/app/Store';

/**
 * Validates given manifest if it contains all of the required fields with correct values.
 *
 * @param {Manifest} application
 * @returns {string[]} list of validation issues (if any)
 */
export const validate = (application: Application): string[] => {
  const issues: string[] = [];
  if (application.api) {
    if (!application.api.scopes) {
      issues.push('Undefined api scopes');
    } else if (!Array.isArray(application.api.scopes)) {
      issues.push(
        'Api scopes value is not an array. Value: ' + application.api.scopes
      );
    } else {
      application.api.scopes.forEach((scope) => {
        if (!Object.values(Scopes).includes(scope as Scopes)) {
          issues.push('Invalid api scope value. Value: ' + scope);
        }
      });
    }
    if (!utils.urlValidation(application.api.token)) {
      issues.push(
        'Manifest Api section needs to have a valid token endpoint url. Value: ' +
          application.api.token
      );
    }

    if (!application.api.applicationId) {
      issues.push('Manifest Api section needs to have applicationId value.');
    }

    if (!utils.urlValidation(application.api.redirectUri)) {
      issues.push(
        'Manifest Api section needs to have a valid redirect url. Value: ' +
          application.api.redirectUri
      );
    }

    if (!utils.urlValidation(application.api.connect)) {
      issues.push(
        'Manifest Api section needs to have a valid connect endpoint url. Value: ' +
          application.api.connect
      );
    }
  }

  if (!application.app.author) {
    issues.push('Author section is missing');
  } else {
    if (!utils.urlValidation(application.app.author.websiteUrl)) {
      issues.push(
        'Author website url is invalid url. Value: ' +
          application.app.author.websiteUrl
      );
    }
    if (!utils.urlValidation(application.app.author.privacyUrl)) {
      issues.push(
        'Author privacy url is invalid url. Value: ' +
          application.app.author.privacyUrl
      );
    }
    if (!utils.urlValidation(application.app.author.termsOfUseUrl)) {
      issues.push(
        'Author terms of use url is invalid url. Value: ' +
          application.app.author.termsOfUseUrl
      );
    }
  }

  if (!application.app.categories) {
    issues.push('Categories section is missing');
  } else {
    if (!Array.isArray(application.app.categories)) {
      issues.push(
        'Categories is not an array. Value: ' + application.app.categories
      );
    } else {
      if (application.app.categories.length === 0) {
        issues.push(
          'There are no categories selected for addon. Value: ' +
            application.app.categories
        );
      }
    }
  }

  if (application.app.medias) {
    if (!Array.isArray(application.app.medias)) {
      issues.push(
        'Medias section value is not a valid array. Value: ' +
          application.app.medias
      );
    } else {
      const indexes: number[] = [];

      application.app.medias.forEach((media) => {
        if (!media.uri) {
          issues.push('Uri value is missing');
        } else {
          const validUrl = utils.urlValidation(media.uri);
          if (!validUrl) {
            issues.push('Uri value is not a valid url. Value: ' + media.uri);
          }
        }

        if (!media.title) {
          issues.push('Title value is missing');
        }
        if (!media.type) {
          issues.push('Type value is missing');
        } else {
          if (media.type !== 'image' && media.type !== 'video') {
            issues.push('Type value is invalid. Value: ' + media.type);
          }
        }

        if (media.index === undefined) {
          issues.push('Index value is missing');
        } else {
          if (isNaN(parseInt(media.index.toString()))) {
            issues.push('Index value is not a number. Value: ' + media.index);
          }

          const existingIndex = indexes.findIndex((i) => i === media.index);
          if (existingIndex > -1) {
            issues.push('Index value: ' + media.index + ' is not unique');
          }

          indexes.push(media.index);
        }
      });
    }
  }

  if (!application.context) {
    issues.push('Context section is missing');
  } else {
    if (!Array.isArray(application.context)) {
      issues.push(
        'Context section is not an array. Value: ' + application.context
      );
    } else {
      application.context.forEach((context) => {
        if (
          !Object.values(UserContextKeys).includes(
            context as UserContextKeys
          ) &&
          !Object.values(ClientContextKeys).includes(
            context as ClientContextKeys
          ) &&
          !Object.values(OpportunityContextKeys).includes(
            context as OpportunityContextKeys
          ) &&
          !Object.values(ProspectContextKeys).includes(
            context as ProspectContextKeys
          ) &&
          !Object.values(AccountContextKeys).includes(
            context as AccountContextKeys
          )
        ) {
          issues.push(
            'Context key is not one of the valid values. Key: ' + context
          );
        }
      });
    }
  }

  if (!application.app.description) {
    issues.push('Description section is missing.');
  } else {
    if (!application.app.description.en) {
      issues.push('Description section is missing English entry.');
    }
  }

  if (!application.app.identifier) {
    issues.push('Manifest identifier definition is missing.');
  }

  if (!application.app.title) {
    issues.push('Title section is missing.');
  } else {
    if (!application.app.title.en) {
      issues.push('Title section is missing English entry.');
    }
  }

  if (
    !application.app.store ||
    !Object.values(Store).includes(application.app.store as Store)
  ) {
    issues.push('Store value is invalid. Value:' + application.app.store);
  }

  if (!application.app.version) {
    issues.push('Manifest Version definition is missing.');
  }

  application.extensions.forEach((ext) => {
    ext.validate(application).forEach((extIssue) => issues.push(extIssue));
  });

  return issues;
};
