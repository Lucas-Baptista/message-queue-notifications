import FakeMailProvider from '../../../providers/MailProvider/fakes/FakeMailProvider';
import NodemailerProvider from '../../../providers/MailProvider/implementations/NodemailerProvider';
import IMailProvider from '../../../providers/MailProvider/models/IMailProvider';

type Environment = 'development' | 'production';

const mailProviderList: Record<
Environment,
IMailProvider
> = {
  development: new FakeMailProvider(),
  production: new NodemailerProvider(),
};

const env = process.env.NODE_ENV as Environment;

const mailProvider = mailProviderList[env];

if (!mailProvider) {
  throw new Error(
    `Invalid environment: ${env}`,
  );
}

export default mailProvider;
