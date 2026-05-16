import { describe, expect, it } from 'vitest';

import { NotificationType }
  from '../dtos/ISendNotificationDTO';

import NotificationTemplateFactory
  from './NotificationTemplateFactory';

describe('NotificationTemplateFactory', () => {
  it(
    'should return user created template',
    () => {
      const template = NotificationTemplateFactory.make(
        NotificationType.USER_CREATED,
      );

      expect(template).toEqual({
        subject: 'Bem-vindo!',
        text:
          'Cadastro realizado com sucesso!',
      });
    },
  );

  it(
    'should return order confirmed template',
    () => {
      const template = NotificationTemplateFactory.make(
        NotificationType.ORDER_CONFIRMED,
      );

      expect(template).toEqual({
        subject: 'Pedido Confirmado!',
        text:
          'Pedido confirmado com sucesso!',
      });
    },
  );

  it(
    'should return payment confirmed template',
    () => {
      const template = NotificationTemplateFactory.make(
        NotificationType.PAYMENT_CONFIRMED,
      );

      expect(template).toEqual({
        subject: 'Pagamento Confirmado!',
        text:
          'Pagamento confirmado com sucesso!',
      });
    },
  );

  it(
    'should throw when template does not exist',
    () => {
      expect(() => {
        NotificationTemplateFactory.make(
          'INVALID_TYPE' as NotificationType,
        );
      }).toThrow(
        'Notification template not found',
      );
    },
  );
});
