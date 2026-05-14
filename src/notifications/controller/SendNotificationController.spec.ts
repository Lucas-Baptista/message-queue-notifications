import SendNotificationController from './SendNotificationController';
import queueProvider from '../../shared/container/providers/queueProvider';
import sendNotificationToQueueService from '../../shared/container/services/sendNotificationToQueueService';

vi.mock(
  '../../shared/container/providers/queueProvider',
  () => ({
    default: {
      publish: vi.fn(),
    },
  }),
);

describe('SendNotificationController', () => {
  it(
    'should return 202 when notification is accepted',
    async () => {
      const controller = new SendNotificationController(sendNotificationToQueueService);

      const request = {
        body: {
          type: 'USER_CREATED',
          email: 'test@email.com',
        },
      };

      const json = vi.fn();

      const response = {
        status: vi.fn(() => ({
          json,
        })),
      };

      await controller.index(
        request as any,
        response as any,
      );

      expect(response.status)
        .toHaveBeenCalledWith(202);

      expect(json)
        .toHaveBeenCalledWith({
          message:
            'Notification accepted for processing',
        });
    },
  );

  it(
    'should publish notification to queue',
    async () => {
      const controller = new SendNotificationController(sendNotificationToQueueService);

      const request = {
        body: {
          type: 'USER_CREATED',
          email: 'test@email.com',
        },
      };

      const response = {
        status: vi.fn(() => ({
          json: vi.fn(),
        })),
      };

      await controller.index(
        request as any,
        response as any,
      );

      expect(
        queueProvider.publish,
      ).toHaveBeenCalledWith(
        'notifications',
        {
          type: 'USER_CREATED',
          email: 'test@email.com',
        },
      );
    },
  );

  it(
    'should throw validation error for invalid email',
    async () => {
      const controller = new SendNotificationController(sendNotificationToQueueService);

      const request = {
        body: {
          type: 'USER_CREATED',
          email: 'invalid-email',
        },
      };

      const response = {
        status: vi.fn(() => ({
          json: vi.fn(),
        })),
      };

      await expect(
        controller.index(
          request as any,
          response as any,
        ),
      ).rejects.toThrow();
    },
  );
});
