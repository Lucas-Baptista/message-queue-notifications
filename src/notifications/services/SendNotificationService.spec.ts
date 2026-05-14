import FakeMailProvider from '../../providers/MailProvider/fakes/FakeMailProvider';
import { NotificationType } from '../dtos/ISendNotificationDTO';

import SendNotificationService from './SendNotificationService';

describe('SendNotificationService', () => {
  it('should send notification email', async () => {
    const fakeMailProvider = new FakeMailProvider();

    const sendMailSpy = vi.spyOn(
      fakeMailProvider,
      'sendMail',
    );

    const service = new SendNotificationService(
      fakeMailProvider,
    );

    await service.execute({
      type: NotificationType.USER_CREATED,
      email: 'test@email.com',
    });

    expect(sendMailSpy).toHaveBeenCalled();
  });
});
