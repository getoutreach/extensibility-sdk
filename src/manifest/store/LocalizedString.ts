import { Locale } from '../../sdk/Locale';

export type LocalizedString = {
  // eslint-disable-next-line no-unused-vars
  [key in Locale]: string;
};
