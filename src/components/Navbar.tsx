import { useState, useEffect } from 'react';
import LogoIcon from './LogoIcon';
import styles from '../styles/Navbar.module.css';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollTo('#hero')}>
        <LogoIcon size={32} variant="dark" />
      </div>

      <div className={styles.navCenter}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <span
              key={item.label}
              className={styles.navLink}
              onClick={() => scrollTo(item.href)}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.navRight}>
        <button className={styles.ctaButton} onClick={() => scrollTo('#contact')}>
          Orçamento
        </button>
      </div>

      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <div className={styles.menuIcon}>
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </div>
      </button>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navItems.map((item) => (
          <span
            key={item.label}
            className={styles.mobileNavLink}
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </span>
        ))}
        <div className={styles.mobileDivider} />
        <button className={styles.mobileCta} onClick={() => scrollTo('#contact')}>
          Solicitar Orçamento
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
