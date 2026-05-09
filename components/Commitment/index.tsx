'use client';

import * as React from 'react';
import { motion, useInView } from 'motion/react';
import {
  commitmentContent,
  githubHeatmap,
  githubHeatmapPeriod,
  gitlabPersonalHeatmap,
  gitlabPersonalHeatmapPeriod,
  gitlabWorkHeatmap,
  gitlabWorkHeatmapPeriod,
} from '@data';
import { CommitsHeatmap } from '@components/CommitsHeatmap';

import './styles.scss';

type CommitmentTab = (typeof commitmentContent.tabs)[number]['id'];

export const Commitment = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] =
    React.useState<CommitmentTab>('gitlab-work');

  return (
    <section id="commitment" ref={ref} className="commitment">
      <div className="commitment__top-line" />

      <div className="commitment__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="commitment__header"
        >
          <span className="commitment__index">04.</span>
          <h2 className="commitment__heading">Commitment</h2>
          <div className="commitment__line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="commitment__intro"
        >
          A transparent view of my consistency across platforms with activity
          patterns from GitHub, GitLab work, and personal GitLab streams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="commitment__tabs"
        >
          {commitmentContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`commitment__tab ${activeTab === tab.id ? 'commitment__tab--active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="commitment__panel"
        >
          {activeTab === 'gitlab-work' && (
            <>
              <div className="commitment__subsection-row">
                <span className="commitment__subsection">
                  {gitlabWorkHeatmapPeriod}
                </span>
              </div>
              <CommitsHeatmap data={gitlabWorkHeatmap} />
            </>
          )}

          {activeTab === 'github' && (
            <>
              <div className="commitment__subsection-row">
                <span className="commitment__subsection">
                  {githubHeatmapPeriod}
                </span>
              </div>
              <CommitsHeatmap data={githubHeatmap} />
            </>
          )}

          {activeTab === 'gitlab-personal' && (
            <>
              <div className="commitment__subsection-row">
                <span className="commitment__subsection">
                  {gitlabPersonalHeatmapPeriod}
                </span>
              </div>
              <CommitsHeatmap data={gitlabPersonalHeatmap} />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
