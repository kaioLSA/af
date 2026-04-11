import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReveal, useRevealChildren } from '../hooks/useReveal';
import styles from '../styles/Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Planejamento Inicial',
    description: 'Entendemos suas necessidades, definimos escopo, orçamento e cronograma detalhado para a obra.',
  },
  {
    number: '02',
    title: 'Projeto e Aprovação',
    description: 'Desenvolvimento do projeto com alinhamento de equipes, fornecedores e aprovação do cliente.',
  },
  {
    number: '03',
    title: 'Execução Controlada',
    description: 'Gerenciamento em tempo real com controle de qualidade, custos e acompanhamento técnico diário.',
  },
  {
    number: '04',
    title: 'Entrega Final',
    description: 'Vistoria final, ajustes e entrega do projeto com documentação completa e total satisfação.',
  },
];

const Process = () => {
  const header = useReveal(0.1);
  const timeline = useRevealChildren(0.05);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only the progress bar uses GSAP scrub (it works fine as gsap.to)
    const trigger = ScrollTrigger.create({
      trigger: `.${styles.timeline}`,
      start: 'top 70%',
      end: 'bottom 50%',
      scrub: true,
      animation: gsap.to(progressRef.current, { height: '100%', ease: 'none' }),
    });

    return () => trigger.kill();
  }, []);

  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`${styles.header} ${header.visible ? 'revealed' : ''}`}
        >
          <div className={`${styles.sectionLabel} reveal-up`}>
            <span className={styles.labelLine} />
            Como Trabalhamos
            <span className={styles.labelLine} />
          </div>
          <h2 className={`${styles.title} reveal-up`}>
            Nosso <span className={styles.titleHighlight}>Processo</span>
          </h2>
          <p className={`${styles.subtitle} reveal-up`}>
            Um método estruturado que garante transparência, controle e qualidade
            em cada etapa da sua obra.
          </p>
        </div>

        <div
          ref={timeline.ref}
          className={`${styles.timeline} stagger-children ${timeline.visible ? 'revealed' : ''}`}
        >
          <div className={styles.timelineLine} />
          <div ref={progressRef} className={styles.timelineProgress} />

          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
