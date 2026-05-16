export enum NotificationType {
  USER_CREATED = 'USER_CREATED',
  ORDER_CONFIRMED = 'ORDER_CONFIRMED',
  PAYMENT_CONFIRMED = 'PAYMENT_CONFIRMED',
}

type ISendNotificationDTO = {
  type: NotificationType
  email: string
};

export default ISendNotificationDTO;
