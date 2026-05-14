import { NotificationType } from '../dtos/ISendNotificationDTO';

interface ITemplateResponse {
  subject: string;
  text: string;
}

export default class NotificationTemplateFactory {
  static make(
    type: NotificationType,
  ): ITemplateResponse {
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

    return template;
  }
}
