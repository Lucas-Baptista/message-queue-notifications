import { Router } from 'express';
import SendNotificationController from '../controller/SendNotificationController';

const sendNotificationControlller = new SendNotificationController();
const sendNotificationRoutes = Router();

sendNotificationRoutes.post('/', sendNotificationControlller.index);

export default sendNotificationRoutes;
