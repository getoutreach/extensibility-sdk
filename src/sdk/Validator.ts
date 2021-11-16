import { utils } from '../utils';
import { Application } from '../manifest/Application';
import { Scopes } from '../manifest/api/Scopes';
import { StoreType } from '../manifest/store/StoreType';

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

  if (!application.store.author) {
    issues.push('Author section is missing');
  } else {
    if (!utils.emailValidation(application.store.author.email)) {
      issues.push(
        'Author e-mail is invalid e-mail. Value: ' +
          application.store.author.email
      );
    }
    if (!utils.urlValidation(application.store.author.websiteUrl)) {
      issues.push(
        'Author website url is invalid url. Value: ' +
          application.store.author.websiteUrl
      );
    }
    if (!utils.urlValidation(application.store.author.privacyUrl)) {
      issues.push(
        'Author privacy url is invalid url. Value: ' +
          application.store.author.privacyUrl
      );
    }
    if (!utils.urlValidation(application.store.author.termsOfUseUrl)) {
      issues.push(
        'Author terms of use url is invalid url. Value: ' +
          application.store.author.termsOfUseUrl
      );
    }
  }

  if (!application.store.categories) {
    issues.push('Categories section is missing');
  } else {
    if (!Array.isArray(application.store.categories)) {
      issues.push(
        'Categories is not an array. Value: ' + application.store.categories
      );
    } else {
      if (application.store.categories.length === 0) {
        issues.push(
          'There are no categories selected for addon. Value: ' +
            application.store.categories
        );
      }
    }
  }

  if (application.store.medias) {
    if (!Array.isArray(application.store.medias)) {
      issues.push(
        'Medias section value is not a valid array. Value: ' +
          application.store.medias
      );
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
      issues.push(
        'Application icon url is invalid url. Value: ' + application.store.iconUrl
      );
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

  if (
    !application.store.type ||
    !Object.values(StoreType).includes(application.store.type as StoreType)
  ) {
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
