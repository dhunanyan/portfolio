'use client';
import * as React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { commonContent, footerContent } from '@data';

import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a
            href={commonContent.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href={commonContent.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${commonContent.email}`}>
            <Mail size={18} />
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="footer__credit"
        >
          {footerContent.creditPrefix}{' '}
          <a
            href={commonContent.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {footerContent.creditName}
          </a>
        </motion.p>
        <p className="footer__copyright">
          © {new Date().getFullYear()} - {footerContent.allRights}
        </p>
      </div>
    </footer>
  );
};
