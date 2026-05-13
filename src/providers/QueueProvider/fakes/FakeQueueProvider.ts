import IQueueProvider from '../models/IQueueProvider';

export default class FakeQueueProvider implements IQueueProvider {
  public messages: unknown[] = [];

  async connect(): Promise<void> {
    // fake connect
  }

  async publish(
    queue: string,
    message: unknown,
  ): Promise<void> {
    this.messages.push({
      queue,
      message,
    });
  }

  async consume(): Promise<void> {
    // fake consume
  }
}
