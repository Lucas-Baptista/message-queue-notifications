import FakeQueueProvider from '../../../providers/QueueProvider/fakes/FakeQueueProvider';
import RabbitMQProvider from '../../../providers/QueueProvider/implamentations/RabbitMQProvider';
import IQueueProvider from '../../../providers/QueueProvider/models/IQueueProvider';

type Environment = 'development' | 'production';

const queueProviderList: Record<
Environment,
IQueueProvider
> = {
  development: new FakeQueueProvider(),
  production: new RabbitMQProvider(),
};
const env = process.env.NODE_ENV as Environment;

const queueProvider: IQueueProvider = queueProviderList[env];

if (!queueProvider) {
  throw new Error(
    `Invalid environment: ${env}`,
  );
}

export default queueProvider;
