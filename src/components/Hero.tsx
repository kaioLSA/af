import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo';
import styles from '../styles/Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(`.${styles.heroLogo}`, { scale: 0.5, opacity: 0, duration: 1.2 })
        .from(`.${styles.heroTagline}`, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
        .from(`.${styles.heroTitleWord}`, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.5')
        .from(`.${styles.heroDescription}`, { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
        .from(`.${styles.heroCta} > *`, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, '-=0.4')
        .from(`.${styles.scrollIndicator}`, { opacity: 0, duration: 1 }, '-=0.2');

      // Parallax on scroll
      gsap.to(`.${styles.heroBackground}`, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt="Construção"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div ref={contentRef} className={styles.heroContent}>
        <div className={styles.heroLogo}>
          <Logo variant="dark" width={320} height={230} />
        </div>

        <div className={styles.heroTagline}>
          Engenharia Civil &bull; Gestão de Obras &bull; Reformas
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>
            <span className={styles.heroTitleWord}>Gestão </span>
            <span className={styles.heroTitleWord}>de </span>
            <span className={styles.heroTitleWord}>obras </span>
            <span className={`${styles.heroTitleWord} ${styles.heroHighlight}`}>com </span>
          </span>
          <span className={styles.heroTitleLine}>
            <span className={`${styles.heroTitleWord} ${styles.heroHighlight}`}>excelência </span>
            <span className={styles.heroTitleWord}>e </span>
            <span className={`${styles.heroTitleWord} ${styles.heroHighlight}`}>transparência</span>
          </span>
        </h1>

        <p className={styles.heroDescription}>
          Transformamos sua obra em um processo organizado, seguro e sem dor de cabeça.
          Do planejamento à entrega final, com controle total e qualidade garantida.
        </p>

        <div className={styles.heroCta}>
          <button className={styles.btnPrimary} onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Orçamento
          </button>
          <button className={styles.btnSecondary} onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
            Conheça Nosso Trabalho
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;
