import IQueueProvider from '../../providers/QueueProvider/models/IQueueProvider';
import { QUEUES } from '../../shared/constants/queues';
import ISendNotificationDTO from '../dtos/ISendNotificationDTO';

export default class SendNotificationToQueueService {
  constructor(
    private queueProvider: IQueueProvider,
  ) { }

  async execute(notification: ISendNotificationDTO): Promise<void> {
    await this.queueProvider.publish(
      QUEUES.NOTIFICATIONS,
      notification,
    );
  }
}
