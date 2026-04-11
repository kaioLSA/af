import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/Differentials.module.css';

const differentials = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg>
    ),
    title: 'Gestão Integrada',
    description: 'Integramos planejamento, execução e controle em tempo real, garantindo decisões com base técnica e visão de custo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
    ),
    title: 'Comunicação Direta',
    description: 'Atuação direta na interface entre cliente, equipes e fornecedores, reduzindo falhas de comunicação.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
    ),
    title: 'Antecipação de Riscos',
    description: 'Identificamos riscos antes que se tornem problemas, evitando retrabalho e mantendo a obra dentro do planejado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
    ),
    title: 'Controle Financeiro',
    description: 'Previsibilidade e controle total dos custos, sem surpresas no orçamento. Transparência em cada centavo investido.',
  },
];

const Differentials = () => {
  const header = useReveal(0.1);
  const grid = useRevealChildren(0.05);

  return (
    <section className={styles.differentials}>
      <div className={styles.container}>
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`${styles.header} ${header.visible ? 'revealed' : ''}`}
        >
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Diferenciais
            <span className={styles.labelLine} />
          </div>
          <h2 className={`${styles.title} reveal-up`}>
            Por que escolher a <span className={styles.titleHighlight}>AF Engenharia</span>?
          </h2>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} stagger-children ${grid.visible ? 'revealed' : ''}`}
        >
          {differentials.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemIcon}>{item.icon}</div>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
