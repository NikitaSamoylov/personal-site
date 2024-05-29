import { Header } from "@/modules/header";
import { About } from "@/modules/about";

const AboutPage: React.FC = () => {
  return (
    <section className="container">
      <Header />
      <About />
    </section>
  )
};

export default AboutPage;