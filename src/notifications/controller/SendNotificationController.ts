import { Request, Response } from 'express';

export default class SendNotificationController {
  public async index(
    request: Request,
    response: Response,
  ) {
    return response.status(201).json({ message: 'First Route' });
  }
}
