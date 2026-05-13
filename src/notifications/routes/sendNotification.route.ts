import { Router, Request, Response } from 'express';

const sendNotificationRoutes = Router();

sendNotificationRoutes.post('/', (
  request: Request,
  response: Response,
) => response.status(201).json({ message: 'First Route' }));

export default sendNotificationRoutes;
