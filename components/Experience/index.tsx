'use client';
import * as React from 'react';
import { motion, useInView } from 'motion/react';
import { Icons } from '@components/icons';
import { experienceContent } from '@data';

import './styles.scss';

type Tab = (typeof experienceContent.tabs)[number];

export type ExperiencePropsType = {
  data?: unknown;
};

export const Experience = ({ data }: ExperiencePropsType) => {
  void data;

  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = React.useState<Tab>('all');
  const [activeId, setActiveId] = React.useState(experienceContent.items[0].id);

  const filtered = experienceContent.items.filter((item) =>
    activeTab === 'all' ? true : item.type === activeTab
  );
  const activeItem =
    experienceContent.items.find((item) => item.id === activeId) ||
    experienceContent.items[0];

  return (
    <section id="experience" ref={ref} className="experience">
      <div className="experience__top-line" />

      <div className="experience__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="experience__header"
        >
          <span className="experience__index">02.</span>
          <h2 className="experience__heading">Experience</h2>
          <div className="experience__line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="experience__tabs"
        >
          {experienceContent.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`experience__tab ${activeTab === tab ? 'experience__tab--active' : ''}`}
            >
              {tab === 'work' && <Icons.Briefcase size={13} />}
              {tab === 'education' && <Icons.GraduationCap size={13} />}
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="experience__layout">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="experience__list"
          >
            <div className="experience__list-line" />
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`experience__list-item ${activeId === item.id ? 'experience__list-item--active' : ''}`}
              >
                <div className="experience__list-head">
                  {item.type === 'work' ? (
                    <span className="experience__list-icon">
                      <Icons.Briefcase size={12} />
                    </span>
                  ) : (
                    <span className="experience__list-icon">
                      <Icons.GraduationCap size={12} />
                    </span>
                  )}
                  <span className="experience__list-company">
                    {item.type === 'work' ? item.company : item.institution}
                  </span>
                </div>
                <p className="experience__list-role">
                  {item.type === 'work' ? item.role : item.degree}
                </p>
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="experience__card"
          >
            <div className="experience__card-glow" />

            <div className="experience__card-content">
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__card-title">
                    {activeItem.type === 'work' ? activeItem.role : activeItem.degree}
                    {activeItem.type === 'work' && (
                      <span className="experience__card-title-highlight">
                        {' '}
                        @{' '}
                        <a
                          href={activeItem.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {activeItem.company}
                          <Icons.ExternalLink size={13} />
                        </a>
                      </span>
                    )}
                  </h3>
                  {activeItem.type === 'education' && (
                    <p className="experience__card-institution">
                      {activeItem.institution}
                    </p>
                  )}
                  {activeItem.type === 'work' && (
                    <p className="experience__card-project">
                      Project: {activeItem.project}
                    </p>
                  )}
                </div>
                <div className="experience__card-period">
                  <Icons.Calendar size={13} />
                  <span>{activeItem.period}</span>
                </div>
              </div>

              <div className="experience__card-description">
                <ul>
                  {activeItem.description.map((descItem, index) => (
                    <li key={index}>
                      <p>
                        <span>·</span>
                        {descItem}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience__card-tags">
                {activeItem.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`} className="experience__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
