import { Header } from "@/modules/header";
import { Projects } from "@/modules/projects";

const ProjectsPage: React.FC = () => {
  return (
    <section className="container">
      <Header />
      <Projects />
    </section>
  )
};

export default ProjectsPage;