import FakeQueueProvider from '../../../providers/QueueProvider/fakes/FakeQueueProvider';
import IQueueProvider from '../../../providers/QueueProvider/models/IQueueProvider';

const queueProvider: IQueueProvider = new FakeQueueProvider();

export default queueProvider;
