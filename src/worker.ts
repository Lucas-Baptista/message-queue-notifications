import 'dotenv/config';
import SendNotificationService from './notifications/services/SendNotificationService';
import { initializeQueue } from './shared/bootstrap/initializeQueue';
import mailProvider from './shared/container/providers/MailProvider';
import queueProvider from './shared/container/providers/queueProvider';

(async () => {
  await initializeQueue();

  const sendNotification = new SendNotificationService(mailProvider);

  const worker = async () => {
    await queueProvider.consume(
      'notifications',
      async (message) => {
        await sendNotification.execute(message);
      },
    );
  };

  await worker();

  console.log('Worker iniciado 🚀');
})();
