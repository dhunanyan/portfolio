'use client';
import * as React from 'react';
import { motion } from 'motion/react';
import { Icons } from '@components/icons';
import { commonContent, welcomeContent } from '@data';

import './styles.scss';

export type WelcomePropsType = {
  data?: unknown;
};

export const Welcome = ({ data }: WelcomePropsType) => {
  void data;

  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [charIndex, setCharIndex] = React.useState(0);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const current = welcomeContent.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % welcomeContent.roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1,
        size: Math.random() * 2 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${particle.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="welcome" className="welcome">
      <canvas ref={canvasRef} className="welcome__canvas" />

      <div className="welcome__orb welcome__orb--left" />
      <div className="welcome__orb welcome__orb--right" />
      <div className="welcome__orb welcome__orb--center" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="welcome__rail welcome__rail--left"
      >
        <a
          href={commonContent.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="welcome__rail-link"
        >
          <Icons.Github size={20} />
        </a>
        <a
          href={commonContent.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="welcome__rail-link"
        >
          <Icons.Linkedin size={20} />
        </a>
        <div className="welcome__rail-line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="welcome__rail welcome__rail--right"
      >
        <a href={`mailto:${commonContent.email}`} className="welcome__email-link">
          {commonContent.email}
        </a>
        <div className="welcome__rail-line" />
      </motion.div>

      <div className="welcome__content">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="welcome__intro"
        >
          <span className="welcome__intro-label">{welcomeContent.introLabel}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="welcome__name"
        >
          {welcomeContent.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="welcome__role-wrap"
        >
          <h2 className="welcome__role">
            <span className="welcome__role-gradient">{displayed}</span>
            <span className="welcome__role-caret">|</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="welcome__description"
        >
          I&apos;m a dedicated software developer specializing in building{' '}
          <span>{welcomeContent.descriptionHighlight}</span>. Currently focused
          on crafting mobile and frontend applications using modern technologies
          like React Native, TypeScript, and Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="welcome__actions"
        >
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="welcome__button welcome__button--primary"
          >
            <span className="welcome__button-overlay" />
            <span className="welcome__button-label">
              {welcomeContent.primaryCta}
            </span>
            <span className="welcome__button-icon">
              <Icons.ExternalLink size={14} />
            </span>
          </a>
          <a
            href="#work"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector('#work')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="welcome__button welcome__button--secondary"
          >
            {welcomeContent.secondaryCta}
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={scrollToAbout}
        className="welcome__scroll"
      >
        <span className="welcome__scroll-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <Icons.ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};
