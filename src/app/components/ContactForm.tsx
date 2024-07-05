"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    let valid = true;
    let errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'El nombre es obligatorio';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es obligatorio';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Limpiar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section
      ref={formRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.heading}>Contacto</h2>
      {isSubmitted && <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`${styles.input} ${errors.name ? styles.errorBorder : ''}`}
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`${styles.input} ${errors.email ? styles.errorBorder : ''}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensaje</label>
          <textarea
            id="message"
            name="message"
            className={`${styles.textarea} ${errors.message ? styles.errorBorder : ''}`}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
