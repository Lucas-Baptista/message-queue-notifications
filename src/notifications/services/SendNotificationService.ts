import IMailProvider from '../../providers/MailProvider/models/IMailProvider';
import ISendNotificationDTO, { NotificationType } from '../dtos/ISendNotificationDTO';

interface ITemplateResponse {
  subject: string;
  text: string;
}

export default class SendNotificationService {
  constructor(
    private mailProvider: IMailProvider,
  ) { }

  async execute(notification: ISendNotificationDTO): Promise<void> {
    const { email, type } = notification;

    const templates: Record<
    NotificationType,
    ITemplateResponse
    > = {
      USER_CREATED: {
        subject: 'Bem-vindo!',
        text: 'Cadastro realizado com sucesso!',
      },

      ORDER_CONFIRMED: {
        subject: 'Pedido Confirmado!',
        text: 'Pedido confirmado com sucesso!',
      },

      PAYMENT_CONFIRMED: {
        subject: 'Pagamento Confirmado!',
        text: 'Pagamento confirmado com sucesso!',
      },
    };

    const template = templates[type];

    await this.mailProvider.sendMail({
      to: email,
      subject: template.subject,
      text: template.text,
    });
  }
}
