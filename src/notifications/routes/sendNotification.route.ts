import { Router } from 'express';
import SendNotificationController from '../controller/SendNotificationController';
import sendNotificationToQueueService from '../../shared/container/services/sendNotificationToQueueService';

const sendNotificationController = new SendNotificationController(
  sendNotificationToQueueService,
);

const sendNotificationRoutes = Router();

sendNotificationRoutes.post(
  '/',
  sendNotificationController.index,
);

export default sendNotificationRoutes;
