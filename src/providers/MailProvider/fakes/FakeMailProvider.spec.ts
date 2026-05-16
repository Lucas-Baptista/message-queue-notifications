import { describe, expect, it } from 'vitest';

import FakeMailProvider from './FakeMailProvider';

describe('FakeMailProvider', () => {
  it(
    'should store sent emails',
    async () => {
      const fakeMailProvider = new FakeMailProvider();

      await fakeMailProvider.sendMail({
        to: 'test@email.com',
        subject: 'Test Subject',
        text: 'Test Content',
      });

      expect(
        fakeMailProvider.messages,
      ).toHaveLength(1);

      expect(
        fakeMailProvider.messages[0],
      ).toEqual({
        to: 'test@email.com',
        subject: 'Test Subject',
        text: 'Test Content',
      });
    },
  );

  it(
    'should store multiple emails',
    async () => {
      const fakeMailProvider = new FakeMailProvider();

      await fakeMailProvider.sendMail({
        to: 'first@email.com',
        subject: 'First Subject',
        text: 'First Content',
      });

      await fakeMailProvider.sendMail({
        to: 'second@email.com',
        subject: 'Second Subject',
        text: 'Second Content',
      });

      expect(
        fakeMailProvider.messages,
      ).toHaveLength(2);

      expect(
        fakeMailProvider.messages,
      ).toEqual([
        {
          to: 'first@email.com',
          subject: 'First Subject',
          text: 'First Content',
        },
        {
          to: 'second@email.com',
          subject: 'Second Subject',
          text: 'Second Content',
        },
      ]);
    },
  );
});
