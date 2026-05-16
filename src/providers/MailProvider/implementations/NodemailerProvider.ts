import nodemailer from 'nodemailer';

import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dto/ISendMailDTO';

export default class NodemailerProvider implements IMailProvider {
  async sendMail({
    to,
    subject,
    text,
  }: ISendMailDTO): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Sistema',
      to,
      subject,
      text,
    });
  }
}
