import { Request, Response } from 'express';
import SendNotificationToQueueService from '../services/SendNotificationToQueueService';
import FakeQueueProvider from '../../providers/QueueProvider/fakes/FakeQueueProvider';

export default class SendNotificationController {
  public async index(
    request: Request,
    response: Response,
  ) {
    const { type, email } = request.body;

    const queueProvider = new FakeQueueProvider();

    const service = new SendNotificationToQueueService(queueProvider);

    await service.execute({
      type,
      email,
    });

    return response.status(202).json({ message: 'Notification accepted for processing' });
  }
}
