import { areRecipients, isRecipient } from '../src/context/interfaces/Recipient';

describe('recipient', () => {
  describe('when calling isRecipient', () => {
    it('will return true for valid recipient', () => {
      expect(
        isRecipient({
          email: 'not-prospect@email.com',
          name: 'some name',
        })
      ).toBe(true);
    });

    it('will return false for wrong type', () => {
      expect(isRecipient('BANANAS')).toBe(false);
    });

    it('will return false for missing email ', () => {
      expect(
        isRecipient({
          name: 'some name',
        })
      ).toBe(false);
    });

    it('will return true when missing name', () => {
      expect(
        isRecipient({
          email: 'not-prospect@email.com',
        })
      ).toBe(true);
    });
  });

  describe('when calling areRecipients', () => {
    it('will return true for empty array of recipients', () => {
      expect(areRecipients([])).toBe(true);
    });

    it('will return true for valid array of recipients', () => {
      expect(
        areRecipients([
          {
            email: 'not-prospect@email.com',
            name: 'some name',
          },
        ])
      ).toBe(true);
    });

    it('will return false for non array', () => {
      expect(
        areRecipients({
          email: 'not-prospect@email.com',
          name: 'some name',
        })
      ).toBe(false);
    });

    it('will return false for array of non recipients', () => {
      expect(areRecipients([1, 2, 3])).toBe(false);
    });

    it('will return false for array with invalid recipient', () => {
      expect(
        areRecipients([
          {
            email: 'not-prospect@email.com',
            name: 'some name',
            prospectId: null,
          },
          {
            name: 'some name',
          },
        ])
      ).toBe(false);
    });
  });
});
