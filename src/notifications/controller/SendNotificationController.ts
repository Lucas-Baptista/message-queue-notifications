import { Request, Response } from 'express';
import SendNotificationToQueueService from '../services/SendNotificationToQueueService';

export default class SendNotificationController {
  public async index(
    request: Request,
    response: Response,
  ) {
    const service = new SendNotificationToQueueService();

    await service.execute();

    return response.status(201).json({ message: 'First Route' });
  }
}
