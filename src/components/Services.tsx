import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/Services.module.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 14v3M12 14v3M16 14v3M20 10v11" /></svg>
    ),
    title: 'Gerenciamento de Obras',
    description: 'Acompanhamento técnico completo em todas as etapas da obra, garantindo controle de custos, prazos e qualidade na execução.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>
    ),
    title: 'Reformas Residenciais',
    description: 'Reformas de apartamentos e residências com planejamento detalhado, execução organizada e resultado final que supera expectativas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>
    ),
    title: 'Vistorias Técnicas',
    description: 'Inspeção detalhada de imóveis com relatórios técnicos completos, identificando patologias e garantindo segurança na aquisição.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" /></svg>
    ),
    title: 'Relatórios Técnicos',
    description: 'Elaboração de laudos e relatórios técnicos com rigor profissional, atendendo normas e fornecendo documentação completa.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></svg>
    ),
    title: 'Planejamento e Cronograma',
    description: 'Desenvolvimento de cronogramas detalhados com controle de execução, garantindo previsibilidade e cumprimento de prazos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Controle de Qualidade',
    description: 'Fiscalização rigorosa de materiais e serviços, assegurando que cada etapa da obra atenda aos mais altos padrões de qualidade.',
  },
];

const Services = () => {
  const header = useReveal(0.1);
  const grid = useRevealChildren(0.05);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`${styles.header} ${header.visible ? 'revealed' : ''}`}
        >
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Nossos Serviços
            <span className={styles.labelLine} />
          </div>
          <h2 className={`${styles.title} reveal-up`}>
            Soluções completas em <span className={styles.titleHighlight}>engenharia</span>
          </h2>
          <p className={`${styles.subtitle} reveal-up`}>
            Oferecemos um portfólio completo de serviços para garantir que sua obra
            seja executada com excelência do início ao fim.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} stagger-children ${grid.visible ? 'revealed' : ''}`}
        >
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
