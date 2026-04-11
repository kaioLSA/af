import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/About.module.css';

const About = () => {
  const section = useReveal(0.1);
  const stats = useRevealChildren(0.1);

  return (
    <section
      id="about"
      ref={section.ref as React.RefObject<HTMLElement>}
      className={`${styles.about} ${section.visible ? 'revealed' : ''}`}
    >
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} reveal-left`}>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
            alt="Engenheiro em obra"
            className={styles.image}
          />
          <div className={`${styles.experienceBadge} reveal-scale`}>
            <span className={styles.experienceNumber}>8+</span>
            <span className={styles.experienceText}>Anos de<br />Experiência</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Sobre Nós
          </div>

          <h2 className={`${styles.title} reveal-up`}>
            Engenharia com <span className={styles.titleHighlight}>propósito</span> e compromisso com o <span className={styles.titleHighlight}>resultado</span>
          </h2>

          <p className={`${styles.description} reveal-up`}>
            A AF Engenharia nasceu com o propósito de mitigar as dores comuns em obras,
            assumindo a gestão completa da reforma com transparência, acompanhamento próximo,
            organização e segurança. Com 8 anos de experiência em obras diversificadas, nosso
            foco é garantir que cada projeto seja executado com qualidade e que o cliente tenha
            tranquilidade durante todo o processo.
          </p>

          <div
            ref={stats.ref}
            className={`${styles.stats} stagger-children ${stats.visible ? 'revealed' : ''}`}
          >
            <div>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Anos de Experiência</span>
            </div>
            <div>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projetos Realizados</span>
            </div>
            <div>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
