'use client';
import * as React from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Icons } from '@components/icons';
import Image from 'next/image';
import { commonContent, workContent } from '@data';

import './styles.scss';

type WorkTab = (typeof workContent.tabs)[number]['id'];

export const Work = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const getTabProjects = React.useCallback(
    (tab: WorkTab) =>
      workContent.projects.filter((project) =>
        (project.categories as readonly WorkTab[]).includes(tab)
      ),
    []
  );

  const [activeTab, setActiveTab] = React.useState<WorkTab>(
    workContent.tabs[0].id
  );
  const initialProjects = getTabProjects(workContent.tabs[0].id);
  const [activeProject, setActiveProject] = React.useState(
    initialProjects[0]?.id ?? ''
  );

  const tabProjects = getTabProjects(activeTab);
  const active =
    tabProjects.find((project) => project.id === activeProject) ??
    tabProjects[0];

  const handleTabChange = (tab: WorkTab) => {
    const nextProjects = getTabProjects(tab);
    setActiveTab(tab);
    setActiveProject(nextProjects[0]?.id ?? '');
  };

  return (
    <section id="work" ref={ref} className="work">
      <div className="work__top-line" />

      <div className="work__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="work__header"
        >
          <span className="work__index">03.</span>
          <h2 className="work__heading">Work</h2>
          <div className="work__line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="work__intro"
        >
          {workContent.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="work__tabs"
        >
          {workContent.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`work__tab ${activeTab === tab.id ? 'work__tab--active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {active ? (
          <div className="work__layout">
            <motion.div
              key={`work-list-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="work__list"
            >
              {tabProjects.map((project, i) => (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  onClick={() => setActiveProject(project.id)}
                  className={`work__item ${activeProject === project.id ? 'work__item--active' : ''}`}
                  type="button"
                >
                  {activeProject === project.id && (
                    <motion.div
                      layoutId="activeProjectBg"
                      className="work__item-active-bg"
                    />
                  )}
                  <div className="work__item-head">
                    <div>
                      <p className="work__item-title">{project.title}</p>
                      <p className="work__item-subtitle">{project.subtitle}</p>
                    </div>
                    <span className="work__item-arrow">
                      <Icons.ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="work__item-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${active.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="work__card"
              >
                <div className="work__media">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(min-width: 1200px) 60vw, 200vw"
                    className="work__media-image"
                  />
                  <div className="work__media-gradient" />
                  <div
                    className="work__media-accent"
                    style={{
                      background: `radial-gradient(ellipse at 60% 50%, ${active.accent}30, transparent 70%)`,
                    }}
                  />

                  <div className="work__media-badges">
                    <span
                      style={{
                        background: `${active.accent}ff`,
                        borderColor: `${active.accent}90`,
                        color: 'white',
                      }}
                    >
                      {active.subtitle}
                    </span>
                  </div>

                  <div className="work__media-actions">
                    {active.npm && (
                      <a
                        href={active.npm}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Npm size={16} />
                      </a>
                    )}
                    {active.ovsx && (
                      <a
                        href={active.ovsx}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Ovsx size={16} />
                      </a>
                    )}
                    {active.vscm && (
                      <a
                        href={active.ovsx}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Vscm size={16} />
                      </a>
                    )}
                    {active.docs && (
                      <a
                        href={active.docs}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Docs size={16} />
                      </a>
                    )}
                    {active.ghPackages && (
                      <a
                        href={active.ghPackages}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Box size={16} />
                      </a>
                    )}
                    {active.github && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.Github size={16} />
                      </a>
                    )}
                    {active.live && (
                      <a
                        href={active.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icons.ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="work__card-content">
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <div className="work__card-tags">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: `${active.accent}15`,
                          border: `1px solid ${active.accent}30`,
                          color: active.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="work__empty">No projects yet in this section.</div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="work__github-cta"
        >
          <a href={commonContent.githubUrl} target="_blank" rel="noreferrer">
            <Icons.Github size={16} />
            <span>{workContent.githubCtaLabel}</span>
            <span className="work__github-cta-arrow">
              <Icons.ArrowRight size={14} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
