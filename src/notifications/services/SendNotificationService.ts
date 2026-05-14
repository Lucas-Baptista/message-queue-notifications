import IMailProvider from '../../providers/MailProvider/models/IMailProvider';
import ISendNotificationDTO from '../dtos/ISendNotificationDTO';
import NotificationTemplateFactory from '../factories/NotificationTemplateFactory';

export default class SendNotificationService {
  constructor(
    private mailProvider: IMailProvider,
  ) { }

  async execute(notification: ISendNotificationDTO): Promise<void> {
    const { email, type } = notification;

    const template = NotificationTemplateFactory.make(type);

    await this.mailProvider.sendMail({
      to: email,
      subject: template.subject,
      text: template.text,
    });
  }
}
