import { useState, useCallback } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={styles.app} style={{ overflow: loading ? 'hidden' : undefined, height: loading ? '100vh' : undefined }}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
