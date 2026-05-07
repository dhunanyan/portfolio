'use client';
import * as React from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { commonContent, contactContent } from '@data';

import './styles.scss';

export type ContactPropsType = {
  data?: unknown;
};

export const Contact = ({ data }: ContactPropsType) => {
  void data;

  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="contact">
      <div className="contact__top-line" />
      <div className="contact__bg-glow" />

      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact__header"
        >
          <span className="contact__index">04.</span>
          <h2 className="contact__heading">Contact</h2>
          <div className="contact__line" />
        </motion.div>

        <div className="contact__layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="contact__intro"
          >
            <h3>
              Let&apos;s <span>{contactContent.titleHighlight}</span>
            </h3>
            <p>{contactContent.description}</p>

            <div className="contact__channels">
              <a
                href={`mailto:${commonContent.email}`}
                className="contact__mail-link"
              >
                <div className="contact__mail-icon">
                  <Mail size={16} />
                </div>
                <span>{commonContent.email}</span>
              </a>
            </div>

            <div className="contact__socials">
              <a
                href={commonContent.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                {contactContent.socialLabels.github}
              </a>
              <a
                href={commonContent.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                {contactContent.socialLabels.linkedin}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="contact__form-card">
              <div className="contact__form-glow" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact__success"
                >
                  <div className="contact__success-icon">
                    <CheckCircle size={28} />
                  </div>
                  <h4>{contactContent.successTitle}</h4>
                  <p>{contactContent.successDescription}</p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                  >
                    {contactContent.sendAnotherLabel}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form">
                  <div>
                    <label>{contactContent.form.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder={contactContent.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label>{contactContent.form.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder={contactContent.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label>{contactContent.form.messageLabel}</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder={contactContent.form.messagePlaceholder}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={15} />
                    {contactContent.form.submitLabel}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
