import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import FakeQueueProvider from './FakeQueueProvider';

const wait = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

describe('FakeQueueProvider', () => {
  it(
    'should connect queue provider',
    async () => {
      const fakeQueueProvider = new FakeQueueProvider();

      await fakeQueueProvider.connect();

      expect(
        fakeQueueProvider.connected,
      ).toBe(true);
    },
  );

  it(
    'should publish messages to queue',
    async () => {
      const fakeQueueProvider = new FakeQueueProvider();

      await fakeQueueProvider.connect();

      await fakeQueueProvider.publish(
        'notifications',
        {
          email: 'test@email.com',
        },
      );

      expect(
        fakeQueueProvider.messages,
      ).toHaveLength(1);

      expect(
        fakeQueueProvider.messages[0],
      ).toEqual({
        queue: 'notifications',
        message: {
          email: 'test@email.com',
        },
      });
    },
  );

  it(
    'should consume queue messages',
    async () => {
      const fakeQueueProvider = new FakeQueueProvider();

      await fakeQueueProvider.connect();

      const callback = vi.fn();

      await fakeQueueProvider.publish(
        'notifications',
        {
          email: 'test@email.com',
        },
      );

      await fakeQueueProvider.consume(
        'notifications',
        callback,
      );

      await wait(1100);

      expect(callback)
        .toHaveBeenCalledTimes(1);

      expect(callback)
        .toHaveBeenCalledWith({
          email: 'test@email.com',
        });
    },
  );

  it(
    'should throw if provider is not connected',
    async () => {
      const fakeQueueProvider = new FakeQueueProvider();

      await expect(
        fakeQueueProvider.publish(
          'notifications',
          {},
        ),
      ).rejects.toThrow();

      await expect(
        fakeQueueProvider.consume(
          'notifications',
          async () => {},
        ),
      ).rejects.toThrow();
    },
  );
});
