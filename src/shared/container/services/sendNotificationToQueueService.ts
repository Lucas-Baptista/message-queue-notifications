import SendNotificationToQueueService from '../../../notifications/services/SendNotificationToQueueService';

import queueProvider from '../providers/queueProvider';

const sendNotificationToQueueService = new SendNotificationToQueueService(
  queueProvider,
);

export default sendNotificationToQueueService;
