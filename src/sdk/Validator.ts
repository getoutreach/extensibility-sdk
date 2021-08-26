import { utils } from '../utils';
import { Application } from '../manifest/Application';
import { Scopes } from '../manifest/api/Scopes';
import { Store } from '../manifest/app/Store';

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

  if (!application.app.author) {
    issues.push('Author section is missing');
  } else {
    if (!utils.emailValidation(application.app.author.email)) {
      issues.push(
        'Author e-mail is invalid e-mail. Value: ' +
          application.app.author.email
      );
    }
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

  if (!application.app.headline) {
    issues.push('Headline section is missing.');
  } else {
    if (!application.app.headline.en) {
      issues.push('Headline section is missing English entry.');
    }
  }

  if (!application.app.icon) {
    issues.push('Application icon is missing.');
  } else {
    if (!utils.urlValidation(application.app.icon)) {
      issues.push(
        'Application icon url is invalid url. Value: ' + application.app.icon
      );
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
    ext.validate().forEach((extIssue) => issues.push(extIssue));
  });

  return issues;
};
