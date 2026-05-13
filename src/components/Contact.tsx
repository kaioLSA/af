import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const section = useReveal(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const introduction = "Olá! Vim do site AF Engenharia e gostaria de mais informações.";
    const messageBody = `Meu nome é ${formData.name}.
Meu e-mail é ${formData.email}.
Meu telefone é ${formData.phone}.
Gostaria de saber mais sobre ${formData.service}.
Minha mensagem: ${formData.message}`;
    
    const text = encodeURIComponent(`${introduction}\n\n${messageBody}`);
    window.open(`https://wa.me/5511966483111?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={section.ref as React.RefObject<HTMLElement>}
      className={`${styles.contact} ${section.visible ? 'revealed' : ''}`}
    >
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt=""
          className={styles.bgImage}
        />
      </div>

      <div className={styles.container}>
        <div className={`${styles.info} reveal-left`}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            Contato
          </div>

          <h2 className={styles.title}>
            Vamos transformar sua <span className={styles.titleHighlight}>obra</span> em realidade
          </h2>

          <p className={styles.description}>
            Entre em contato conosco e descubra como podemos tornar seu projeto
            uma experiência organizada, segura e sem dor de cabeça.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Telefone</div>
                <div className={styles.contactValue}>(11) 96648-3111</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>contato@afengenharia.com.br</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconBox}>
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Localização</div>
                <div className={styles.contactValue}>Brasil</div>
              </div>
            </div>
          </div>
        </div>

        <form className={`${styles.formCard} reveal-right`} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Solicite um orçamento</h3>
          <p className={styles.formSubtitle}>
            Preencha o formulário e entraremos em contato em até 24h.
          </p>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Telefone</label>
              <input
                type="tel"
                name="phone"
                placeholder="(11) 96648-3111"
                className={styles.formInput}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Serviço</label>
              <select
                name="service"
                className={styles.formSelect}
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="Gerenciamento de Obras">Gerenciamento de Obras</option>
                <option value="Reforma Residencial">Reforma Residencial</option>
                <option value="Vistoria Técnica">Vistoria Técnica</option>
                <option value="Relatório Técnico">Relatório Técnico</option>
                <option value="Planejamento">Planejamento e Cronograma</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Mensagem</label>
            <textarea
              name="message"
              placeholder="Descreva seu projeto ou necessidade..."
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.formSubmit}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
