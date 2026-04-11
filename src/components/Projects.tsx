import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tag: 'Reforma Residencial',
    title: 'Apartamento Alto Padrão',
    description: 'Reforma completa com gestão integrada, entregue no prazo e dentro do orçamento.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    tag: 'Gerenciamento',
    title: 'Residência Moderna',
    description: 'Acompanhamento técnico completo com controle de qualidade em todas as etapas.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tag: 'Reforma',
    title: 'Cozinha Planejada',
    description: 'Projeto de reforma com planejamento detalhado e execução impecável.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    tag: 'Vistoria',
    title: 'Inspeção Predial',
    description: 'Vistoria técnica detalhada com relatório completo de patologias.',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    tag: 'Reforma Residencial',
    title: 'Banheiro Premium',
    description: 'Reforma de banheiro com acabamentos de alto padrão e execução precisa.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    tag: 'Gerenciamento',
    title: 'Sala Integrada',
    description: 'Gestão completa da obra de integração de ambientes com design moderno.',
  },
];

const Projects = () => {
  const header = useReveal(0.1);
  const grid = useRevealChildren(0.05);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`${styles.header} ${header.visible ? 'revealed' : ''}`}
        >
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Portfólio
            <span className={styles.labelLine} />
          </div>
          <h2 className={`${styles.title} reveal-up`}>
            Nossos <span className={styles.titleHighlight}>Projetos</span>
          </h2>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} stagger-children ${grid.visible ? 'revealed' : ''}`}
        >
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectOverlay}>
                <span className={styles.projectTag}>{project.tag}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
