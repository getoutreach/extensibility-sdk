import { utils } from '../utils';
import { Application } from '../manifest/Application';
import { Scopes } from '../manifest/api/Scopes';
import { StoreType } from '../manifest/store/StoreType';
import { WebHookEvents } from '../manifest/api/WebHookEvents';

/**
 * Validates given manifest if it contains all of the required fields with correct values.
 *
 * @param {Application} application
 * @returns {string[]} list of validation issues (if any)
 */
export const validate = (application: Application): string[] => {
  const issues: string[] = [];
  if (application.api) {
    if (!application.api.scopes) {
      issues.push('Undefined api scopes');
    } else if (!Array.isArray(application.api.scopes)) {
      issues.push('Api scopes value is not an array. Value: ' + application.api.scopes);
    } else {
      application.api.scopes.forEach((scope) => {
        if (!Object.values(Scopes).includes(scope as Scopes)) {
          issues.push('Invalid api scope value. Value: ' + scope);
        }
      });
    }

    if (!application.api.client) {
      issues.push('Manifest Api section needs to have client value.');
    } else if (!application.api.client.id) {
      issues.push('Manifest Api section needs to have client.id value.');
    }

    if (!application.api.redirectUris) {
      issues.push('Undefined redirectUris');
    } else if (!Array.isArray(application.api.redirectUris)) {
      issues.push('redirectUris value is not an array. Value: ' + application.api.redirectUris);
    } else {
      application.api.redirectUris.forEach((redirectUri) => {
        if (!utils.urlValidation(redirectUri)) {
          issues.push('Manifest Api section needs to have valid redirect urls. Value: ' + redirectUri);
        }
      });
    }
  }

  if (application.webhook) {
    if (!application.webhook.events) {
      issues.push('Undefined web hook events');
    } else if (!Array.isArray(application.webhook.events)) {
      issues.push('Events value is not an array. Value: ' + application.webhook.events);
    } else {
      application.webhook.events.forEach((event) => {
        if (!Object.values(WebHookEvents).includes(event as WebHookEvents)) {
          issues.push('Invalid web hook event value. Value: ' + event);
        }
      });
    }

    if (!application.webhook.url) {
      issues.push('Undefined web hook url.');
    } else {
      if (!utils.urlValidation(application.webhook.url)) {
        issues.push('Manifest Webhook section needs to have valid url. Value: ' + application.webhook.url);
      }
    }
  }

  if (!application.store.author) {
    issues.push('Author section is missing');
  } else {
    if (!utils.emailValidation(application.store.author.email)) {
      issues.push('Author e-mail is invalid e-mail. Value: ' + application.store.author.email);
    }
    if (!utils.urlValidation(application.store.author.websiteUrl)) {
      issues.push('Author website url is invalid url. Value: ' + application.store.author.websiteUrl);
    }
    if (!utils.urlValidation(application.store.author.privacyUrl)) {
      issues.push('Author privacy url is invalid url. Value: ' + application.store.author.privacyUrl);
    }
    if (!utils.urlValidation(application.store.author.termsOfUseUrl)) {
      issues.push('Author terms of use url is invalid url. Value: ' + application.store.author.termsOfUseUrl);
    }
  }

  if (!application.store.categories) {
    issues.push('Categories section is missing');
  } else {
    if (!Array.isArray(application.store.categories)) {
      issues.push('Categories is not an array. Value: ' + application.store.categories);
    } else {
      if (application.store.categories.length === 0) {
        issues.push('There are no categories selected for addon. Value: ' + application.store.categories);
      }
    }
  }

  if (application.store.medias) {
    if (!Array.isArray(application.store.medias)) {
      issues.push('Medias section value is not a valid array. Value: ' + application.store.medias);
    } else {
      application.store.medias.forEach((media) => {
        if (!media.url) {
          issues.push('Url value is missing');
        } else {
          const validUrl = utils.urlValidation(media.url);
          if (!validUrl) {
            issues.push('Url value is not a valid url. Value: ' + media.url);
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
      });
    }
  }

  if (!application.store.description) {
    issues.push('Description section is missing.');
  } else {
    if (!application.store.description.en) {
      issues.push('Description section is missing English entry.');
    }
  }

  if (!application.store.headline) {
    issues.push('Headline section is missing.');
  } else {
    if (!application.store.headline.en) {
      issues.push('Headline section is missing English entry.');
    }
  }

  if (!application.store.iconUrl) {
    issues.push('Application icon is missing.');
  } else {
    if (!utils.urlValidation(application.store.iconUrl)) {
      issues.push('Application icon url is invalid url. Value: ' + application.store.iconUrl);
    }
  }

  if (!application.store.identifier) {
    issues.push('Manifest identifier definition is missing.');
  }

  if (!application.store.title) {
    issues.push('Title section is missing.');
  } else {
    if (!application.store.title.en) {
      issues.push('Title section is missing English entry.');
    }
  }

  if (!application.store.type || !Object.values(StoreType).includes(application.store.type as StoreType)) {
    issues.push('Store value is invalid. Value:' + application.store.type);
  }

  if (!application.store.version) {
    issues.push('Manifest Version definition is missing.');
  }

  application.extensions.forEach((ext) => {
    ext.validate().forEach((extIssue) => issues.push(extIssue));
  });

  return issues;
};
