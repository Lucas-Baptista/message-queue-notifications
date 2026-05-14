import FakeQueueProvider from '../../providers/QueueProvider/fakes/FakeQueueProvider';
import { NotificationType } from '../dtos/ISendNotificationDTO';

import SendNotificationToQueueService from './SendNotificationToQueueService';

describe('SendNotificationToQueueService', () => {
  let fakeQueueProvider: FakeQueueProvider;

  let publishSpy: any;

  let service: SendNotificationToQueueService;

  beforeEach(() => {
    fakeQueueProvider = new FakeQueueProvider();

    publishSpy = vi.spyOn(
      fakeQueueProvider,
      'publish',
    );

    service = new SendNotificationToQueueService(
      fakeQueueProvider,
    );
  });

  it('should publish notification to queue', async () => {
    const data = {
      email: 'test@email.com',
      type: NotificationType.USER_CREATED,
    };

    await fakeQueueProvider.connect();

    await service.execute(data);

    expect(publishSpy).toHaveBeenCalled();

    expect(publishSpy).toHaveBeenCalledWith(
      'notifications',
      data,
    );

    expect(
      fakeQueueProvider.messages,
    ).toHaveLength(1);
  });
});
