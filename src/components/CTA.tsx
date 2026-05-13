import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/CTA.module.css';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      tl.from(`.${styles.title}`, { y: 60, opacity: 0, duration: 1 })
        .from(`.${styles.description}`, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(`.${styles.buttons}`, { y: 30, opacity: 0, duration: 0.6 }, '-=0.3');

      // Parallax background
      gsap.to(`.${styles.bgImage}`, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511966483111?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <section id="cta" ref={sectionRef} className={styles.cta}>
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Arquitetura"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          Pronto para transformar sua <span className={styles.titleHighlight}>obra</span>?
        </h2>
        <p className={styles.description}>
          Entre em contato conosco e descubra como podemos tornar seu projeto
          uma realidade com organização, controle e qualidade.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={handleWhatsApp}>
            Fale no WhatsApp
          </button>
          <button className={styles.btnOutline}>
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
