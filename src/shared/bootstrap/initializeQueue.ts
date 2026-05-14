import queueProvider from '../container/providers/queueProvider';

export async function initializeQueue() {
  await queueProvider.connect();
}
