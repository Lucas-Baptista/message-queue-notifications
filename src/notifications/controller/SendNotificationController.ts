import { Request, Response } from 'express';
import { z } from 'zod';
import SendNotificationToQueueService from '../services/SendNotificationToQueueService';
import queueProvider from '../../shared/container/providers/queueProvider';
import { NotificationType } from '../dtos/ISendNotificationDTO';

const sendNotificationSchema = z.object({
  type: z.enum(NotificationType),
  email: z.email(),
});

export default class SendNotificationController {
  public async index(
    request: Request,
    response: Response,
  ) {
    const { type, email } = sendNotificationSchema.parse(request.body);

    const service = new SendNotificationToQueueService(queueProvider);

    await service.execute({
      type,
      email,
    });

    return response.status(202).json({ message: 'Notification accepted for processing' });
  }
}
