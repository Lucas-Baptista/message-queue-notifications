import express from 'express';
import 'dotenv/config';
import sendNotificationRoutes from './notifications/routes/sendNotification.route';
import { initializeQueue } from './shared/bootstrap/initializeQueue';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/sendNotification', sendNotificationRoutes);

(async () => {
  await initializeQueue();

  app.listen(PORT, () => {
    console.log(
      'Servidor rodando em http://localhost:3000 🚀',
    );
  });
})();
