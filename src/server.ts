import express from 'express';
import sendNotificationRoutes from './notifications/routes/sendNotification.route';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/sendNotification', sendNotificationRoutes);

app.listen(PORT, () => {
  console.log(
    'Servidor rodando em http://localhost:3000 🚀',
  );
});
