import SendNotificationService from './notifications/services/SendNotificationService';
import FakeMailProvider from './providers/MailProvider/fakes/FakeMailProvider';
import queueProvider from './shared/container/providers/queueProvider';

(async () => {
  await queueProvider.connect();

  const mailProvider = new FakeMailProvider();
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
