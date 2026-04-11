import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    text: 'A AF Engenharia transformou nossa reforma em uma experiência tranquila. Tudo organizado, no prazo e sem surpresas no orçamento. Recomendo de olhos fechados!',
    name: 'Mariana S.',
    role: 'Proprietária - Apt. Alto Padrão',
    initials: 'MS',
  },
  {
    text: 'Pode confiar, ele cuida da obra de verdade. Organiza tudo, resolve problema e te deixa tranquilo durante o processo. Profissional excepcional.',
    name: 'Roberto L.',
    role: 'Proprietário - Residência',
    initials: 'RL',
  },
  {
    text: 'A clareza na comunicação e o controle financeiro fizeram toda a diferença. Finalmente encontrei um engenheiro que assume a responsabilidade pela obra.',
    name: 'Carla M.',
    role: 'Proprietária - Reforma Completa',
    initials: 'CM',
  },
];

const Testimonials = () => {
  const header = useReveal(0.1);
  const grid = useRevealChildren(0.05);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`${styles.header} ${header.visible ? 'revealed' : ''}`}
        >
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Depoimentos
            <span className={styles.labelLine} />
          </div>
          <h2 className={`${styles.title} reveal-up`}>
            O que dizem nossos <span className={styles.titleHighlight}>clientes</span>
          </h2>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} stagger-children ${grid.visible ? 'revealed' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>{testimonial.text}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>{testimonial.initials}</div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
