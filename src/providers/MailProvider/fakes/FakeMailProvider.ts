import ISendMailDTO from '../dto/ISendMailDTO';

import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  subject: string;
  text: string;
}

export default class FakeMailProvider
implements IMailProvider {
  public messages: IMessage[] = [];

  public async sendMail({
    to,
    subject,
    text,
  }: ISendMailDTO): Promise<void> {
    const message: IMessage = {
      to,
      subject,
      text,
    };

    this.messages.push(message);
  }
}
