export interface Recipient {
  email: string;
  name?: string;
  id?: string;
}

export const areRecipients = (value: any): value is Recipient[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  return !value.some((v) => !isRecipient(v));
};

export const isRecipient = (value: any): value is Recipient => {
  return !!value?.email;
};