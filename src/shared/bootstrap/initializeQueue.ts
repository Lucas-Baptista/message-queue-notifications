import queueProvider from '../container/providers/queueProvider';

export default async function initializeQueue() {
  await queueProvider.connect();
}
