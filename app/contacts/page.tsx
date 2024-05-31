import { Header } from "@/modules/header";
import { Contacts } from "@/modules/contacts";

const ContactsPage: React.FC = () => {

  return (
    <section className="container">
      <Header />
      <Contacts />
    </section>
  )
};

export default ContactsPage;