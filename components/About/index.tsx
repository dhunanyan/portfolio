'use client';
import * as React from 'react';
import { motion, useInView } from 'motion/react';
import { Icons } from '@components/icons';
import Image from 'next/image';
import { aboutContent, commonContent } from '@data';

import './styles.scss';

export type AboutPropsType = {
  data?: unknown;
};

export const About = ({ data }: AboutPropsType) => {
  void data;

  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="about">
      <div className="about__grid-bg" />

      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about__header"
        >
          <span className="about__index">01.</span>
          <h2 className="about__heading">About Me</h2>
          <div className="about__line" />
        </motion.div>

        <div className="about__content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about__text"
          >
            <p>
              Hello! I&apos;m Davit, a dedicated software developer based in
              Krakow, Poland. I enjoy creating things that live on the internet
              - from <span>{aboutContent.paragraphHighlights.interactive}</span>{' '}
              to <span>{aboutContent.paragraphHighlights.mobile}</span>.
            </p>
            <p>
              My goal is to always build apps that are visually beautiful,
              accessible, and highly performant. I&apos;m currently working as a{' '}
              <strong>{aboutContent.paragraphHighlights.role}</strong>, where I
              bring ideas to life through clean, efficient code.
            </p>
            <p>{aboutContent.paragraphs[2]}</p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="about__actions"
            >
              <a
                href={commonContent.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="about__action"
              >
                <Icons.Github size={15} />
                {aboutContent.actions.github}
              </a>
              <a
                href={commonContent.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="about__action"
              >
                <Icons.Linkedin size={15} />
                {aboutContent.actions.linkedin}
              </a>
              <a
                href={commonContent.cvUrl}
                target="_blank"
                className="about__action about__action--cv"
              >
                <Icons.FileText size={15} />
                {aboutContent.actions.cv}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about__photo-wrap"
          >
            <div className="about__photo-group">
              <div className="about__photo-glow" />
              <div className="about__photo-border" />
              <div className="about__photo-frame">
                <Image
                  src={aboutContent.avatarSrc}
                  alt={aboutContent.avatarAlt}
                  fill
                  sizes="(max-width: 767px) 16rem, 18rem"
                  className="about__photo"
                />
                <div className="about__photo-overlay" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about__skills-sections">
          <div className="about__skills-grid">
            {aboutContent.skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + groupIndex * 0.08, duration: 0.45 }}
                className="about__skills-card"
              >
                <div className="about__skills-head">
                  <p className="about__skills-title">{group.title}</p>
                  <span className="about__skills-count">
                    {group.skills.length}
                  </span>
                </div>

                <div className="about__skills-list">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill}`}
                      className="about__skill-item"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
