import IQueueProvider from '../models/IQueueProvider';

interface IMessage {
  queue: string;
  message: unknown;
}

export default class FakeQueueProvider implements IQueueProvider {
  public messages: IMessage[] = [];

  public connected = false;

  async connect(): Promise<void> {
    this.connected = true;
  }

  async publish(
    queue: string,
    message: unknown,
  ): Promise<void> {
    if (!this.connected) {
      throw new Error(
        'Queue provider is not connected',
      );
    }

    this.messages.push({
      queue,
      message,
    });
  }

  async consume(
    queue: string,
    callback: (message: any) => Promise<void>,
  ): Promise<void> {
    if (!this.connected) {
      throw new Error(
        'Queue provider is not connected',
      );
    }

    setInterval(async () => {
      const queueMessages = this.messages.filter(
        (item) => item.queue === queue,
      );

      queueMessages.forEach(async (item) => {
        await callback(item.message);
      });

      this.messages = this.messages.filter(
        (item) => item.queue !== queue,
      );
    }, 1000);
  }
}
