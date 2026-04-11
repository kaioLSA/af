import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from '../styles/Preloader.module.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      },
    });

    const skyline = logoRef.current?.querySelector('#skyline');
    const afText = logoRef.current?.querySelector('#af-text');
    const goldLine = logoRef.current?.querySelector('#gold-line');
    const engText = logoRef.current?.querySelector('#eng-text');
    const projText = logoRef.current?.querySelector('#proj-text');
    const respText = logoRef.current?.querySelector('#resp-text');
    const fagnerText = logoRef.current?.querySelector('#fagner-text');

    const allStrokes = [skyline, goldLine];
    const allTexts = [afText, engText, projText, respText, fagnerText];

    // Phase 1: Progress bar + text fade in
    tl.to(progressBarRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    })
      .to(textRef.current, { opacity: 1, duration: 0.4 }, '<')

      // Phase 2: Draw skyline stroke
      .to(skyline, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0.3)

      // Phase 3: Draw AF + gold line
      .to(afText, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0.6)
      .to(goldLine, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      }, 1.0)

      // Phase 4: Draw smaller texts
      .to([engText, projText], {
        strokeDashoffset: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.inOut',
      }, 1.2)
      .to([respText, fagnerText], {
        strokeDashoffset: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.inOut',
      }, 1.6)

      // Progress bar fill in sync
      .to(progressRef.current, {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function () {
          setProgress(Math.round(this.progress() * 100));
        },
      }, 0.3)

      // Phase 5: Fill in all text colors
      .to(afText, {
        fill: '#ffffff',
        duration: 0.6,
        ease: 'power2.out',
      }, 2.4)
      .to([engText, projText], {
        fill: '#ffffff',
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, 2.5)
      .to(respText, {
        fill: '#999999',
        duration: 0.4,
        ease: 'power2.out',
      }, 2.6)
      .to(fagnerText, {
        fill: '#c9a84c',
        duration: 0.5,
        ease: 'power2.out',
      }, 2.6)

      // Phase 6: Hold
      .to({}, { duration: 0.5 })

      // Phase 7: Fade out logo + progress
      .to(logoRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.in',
      })
      .to(
        [progressBarRef.current, textRef.current],
        { opacity: 0, duration: 0.3, ease: 'power2.in' },
        '<'
      )

      // Phase 8: Slide preloader away with panels
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
      })
      .to(
        overlayRef.current?.children || [],
        {
          scaleY: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.inOut',
          transformOrigin: 'top',
        },
        '-=0.5'
      );

    // Cleanup unused refs warning
    void allStrokes;
    void allTexts;

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <>
      <div ref={preloaderRef} className={styles.preloader}>
        <div className={styles.logoContainer}>
          <svg
            ref={logoRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 0 520 380"
            className={styles.logoSvg}
          >
            {/* Skyline */}
            <polyline
              id="skyline"
              points="30,150 30,120 50,120 50,90 65,90 65,70 80,70 80,50 95,50 95,70 110,70 110,45 125,45 125,70 140,70 140,90 155,90 155,60 170,60 170,40 185,40 185,60 200,60 200,80 215,80 215,50 230,50 230,30 245,30 245,50 260,50 260,70 275,70 275,45 290,45 290,60 305,60 305,80 320,80 320,60 335,60 335,40 350,40 350,60 365,60 365,90 380,90 380,70 395,70 395,50 410,50 410,70 425,70 425,100 440,100 440,120 455,120 455,150 470,150"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeDasharray="2000"
              strokeDashoffset="2000"
            />

            {/* AF */}
            <text
              id="af-text"
              x="130"
              y="248"
              fontFamily="'Inter', Arial, sans-serif"
              fontSize="110"
              fontWeight="800"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="1.2"
              letterSpacing="-3"
              strokeDasharray="600"
              strokeDashoffset="600"
            >
              AF
            </text>

            {/* Gold line */}
            <line
              id="gold-line"
              x1="125"
              y1="262"
              x2="280"
              y2="262"
              stroke="#c9a84c"
              strokeWidth="2.5"
              strokeDasharray="200"
              strokeDashoffset="200"
            />

            {/* ENGENHARIA */}
            <text
              id="eng-text"
              x="290"
              y="220"
              fontFamily="'Inter', Arial, sans-serif"
              fontSize="26"
              fontWeight="400"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="0.6"
              letterSpacing="3"
              strokeDasharray="800"
              strokeDashoffset="800"
            >
              ENGENHARIA
            </text>

            {/* & PROJETOS */}
            <text
              id="proj-text"
              x="290"
              y="252"
              fontFamily="'Inter', Arial, sans-serif"
              fontSize="26"
              fontWeight="400"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="0.6"
              letterSpacing="3"
              strokeDasharray="800"
              strokeDashoffset="800"
            >
              & PROJETOS
            </text>

            {/* Responsável Técnico */}
            <text
              id="resp-text"
              x="250"
              y="305"
              fontFamily="'Inter', Arial, sans-serif"
              fontSize="14"
              fontWeight="400"
              fill="transparent"
              stroke="#999999"
              strokeWidth="0.4"
              textAnchor="middle"
              letterSpacing="2"
              strokeDasharray="500"
              strokeDashoffset="500"
            >
              Responsável Técnico
            </text>

            {/* Fagner Cruz */}
            <text
              id="fagner-text"
              x="250"
              y="340"
              fontFamily="'Inter', Arial, sans-serif"
              fontSize="26"
              fontWeight="500"
              fill="transparent"
              stroke="#c9a84c"
              strokeWidth="0.6"
              textAnchor="middle"
              strokeDasharray="500"
              strokeDashoffset="500"
            >
              Fagner Cruz
            </text>
          </svg>
        </div>

        <div ref={progressBarRef} className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill} />
        </div>

        <div ref={textRef} className={styles.loadingText}>
          {progress}%
        </div>
      </div>

      <div ref={overlayRef} className={styles.revealOverlay}>
        <div className={styles.revealPanel} />
        <div className={styles.revealPanel} />
        <div className={styles.revealPanel} />
        <div className={styles.revealPanel} />
        <div className={styles.revealPanel} />
      </div>
    </>
  );
};

export default Preloader;
