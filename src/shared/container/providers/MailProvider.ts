import FakeMailProvider from '../../../providers/MailProvider/fakes/FakeMailProvider';
import IMailProvider from '../../../providers/MailProvider/models/IMailProvider';

const mailProvider: IMailProvider = new FakeMailProvider();

export default mailProvider;
