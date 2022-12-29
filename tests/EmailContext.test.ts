import { ContextParam } from '../src/context/host/ContextParam';
import { EmailContext } from '../src/context/host/EmailContext';
import { Recipient } from '../src/context/interfaces/Recipient';
import { EmailContextKeys } from '../src/context/keys/EmailContextKeys';

describe('EmailContext', () => {
  describe('when initializing from context params', () => {
    it('will initialize To param', () => {
      const emailContext = new EmailContext();

      const paramValue = JSON.stringify(getTestRecipients());

      const param: ContextParam = {
        key: EmailContextKeys.TO,
        value: paramValue,
      };

      emailContext.initFrom(param);

      expect(emailContext.to?.length).toBe(2);
      expect(emailContext.cc).toBeUndefined();
      expect(emailContext.bcc).toBeUndefined();

      expect(emailContext.to?.[0].email).toBe('prospect@mail.com');
      expect(emailContext.to?.[0].name).toBe('John Smith');
      expect(emailContext.to?.[0].prospectId).toBe(123);

      expect(emailContext.to?.[1].email).toBe('not-prospect@mail.com');
      expect(emailContext.to?.[1].name).toBe('Mike Smith');
      expect(emailContext.to?.[1].prospectId).toBeNull();
    });

    it('will initialize CC param', () => {
      const emailContext = new EmailContext();

      const paramValue = JSON.stringify(getTestRecipients());

      const param: ContextParam = {
        key: EmailContextKeys.CC,
        value: paramValue,
      };

      emailContext.initFrom(param);

      expect(emailContext.cc?.length).toBe(2);
      expect(emailContext.to).toBeUndefined();
      expect(emailContext.bcc).toBeUndefined();

      expect(emailContext.cc?.[0].email).toBe('prospect@mail.com');
      expect(emailContext.cc?.[0].name).toBe('John Smith');
      expect(emailContext.cc?.[0].prospectId).toBe(123);

      expect(emailContext.cc?.[1].email).toBe('not-prospect@mail.com');
      expect(emailContext.cc?.[1].name).toBe('Mike Smith');
      expect(emailContext.cc?.[1].prospectId).toBeNull();
    });

    it('will initialize BCC param', () => {
      const emailContext = new EmailContext();

      const paramValue = JSON.stringify(getTestRecipients());

      const param: ContextParam = {
        key: EmailContextKeys.BCC,
        value: paramValue,
      };

      emailContext.initFrom(param);

      expect(emailContext.bcc?.length).toBe(2);

      expect(emailContext.to).toBeUndefined();
      expect(emailContext.cc).toBeUndefined();

      expect(emailContext.bcc?.[0].email).toBe('prospect@mail.com');
      expect(emailContext.bcc?.[0].name).toBe('John Smith');
      expect(emailContext.bcc?.[0].prospectId).toBe(123);

      expect(emailContext.bcc?.[1].email).toBe('not-prospect@mail.com');
      expect(emailContext.bcc?.[1].name).toBe('Mike Smith');
      expect(emailContext.bcc?.[1].prospectId).toBeNull();
    });

    it('will initialize subject param', () => {
      const emailContext = new EmailContext();

      const param: ContextParam = {
        key: EmailContextKeys.SUBJECT,
        value: 'SOME SUBJECT',
      };

      emailContext.initFrom(param);

      expect(emailContext.subject).toBe('SOME SUBJECT');
    });
  });

  describe('when converting toParams', () => {
    it('will convert TO value', () => {
      const recipients = getTestRecipients();
      const emailContext = new EmailContext();
      emailContext.to = recipients;

      const params = emailContext.toParams();

      expect(params.length).toBe(1);
      expect(params[0].key).toBe(EmailContextKeys.TO);
      expect(params[0].value).toBe(JSON.stringify(recipients));
    });
    it('will convert CC value', () => {
      const recipients = getTestRecipients();
      const emailContext = new EmailContext();
      emailContext.cc = recipients;

      const params = emailContext.toParams();

      expect(params.length).toBe(1);
      expect(params[0].key).toBe(EmailContextKeys.CC);
      expect(params[0].value).toBe(JSON.stringify(recipients));
    });
    it('will convert BCC value', () => {
      const recipients = getTestRecipients();
      const emailContext = new EmailContext();
      emailContext.bcc = recipients;

      const params = emailContext.toParams();

      expect(params.length).toBe(1);
      expect(params[0].key).toBe(EmailContextKeys.BCC);
      expect(params[0].value).toBe(JSON.stringify(recipients));
    });
    it('will convert subject value', () => {
      const emailContext = new EmailContext();
      emailContext.subject = 'SOME SUBJECT';

      const params = emailContext.toParams();

      expect(params.length).toBe(1);
      expect(params[0].key).toBe(EmailContextKeys.SUBJECT);
      expect(params[0].value).toBe('SOME SUBJECT');
    });
  });
});

const getTestRecipients = (): Recipient[] => {
  return [
    { email: 'prospect@mail.com', name: 'John Smith', prospectId: 123 },
    { email: 'not-prospect@mail.com', name: 'Mike Smith', prospectId: null },
  ];
};
