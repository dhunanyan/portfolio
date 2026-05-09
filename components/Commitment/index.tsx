'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  commitmentContent,
  githubHeatmap,
  gitlabPersonalHeatmap,
  gitlabWorkHeatmap,
} from '@data';
import { Icons } from '@components/icons';
import { CommitsHeatmap } from '@components/CommitsHeatmap';

import './styles.scss';

type CommitmentTab = (typeof commitmentContent.tabs)[number]['id'];

const commitmentTabIcons: Record<CommitmentTab, React.ReactNode> = {
  github: <Icons.Github size={13} />,
  'gitlab-work': <Icons.Briefcase size={13} />,
  'gitlab-personal': <Icons.GitLab size={13} />,
};

export const Commitment = () => {
  const [activeTab, setActiveTab] =
    React.useState<CommitmentTab>('gitlab-work');

  const dataByTab = React.useMemo(
    () => ({
      github: githubHeatmap,
      'gitlab-work': gitlabWorkHeatmap,
      'gitlab-personal': gitlabPersonalHeatmap,
    }),
    []
  );

  const yearsByTab = React.useMemo(() => {
    const entries = Object.entries(dataByTab).map(([tab, items]) => {
      const years = Array.from(
        new Set(items.map((item) => Number(item.date.slice(0, 4))))
      ).sort((a, b) => b - a);
      return [tab, years];
    });

    return Object.fromEntries(entries) as Record<CommitmentTab, number[]>;
  }, [dataByTab]);

  const [selectedYearByTab, setSelectedYearByTab] = React.useState<
    Record<CommitmentTab, number>
  >({
    github: yearsByTab.github[0],
    'gitlab-work': yearsByTab['gitlab-work'][0],
    'gitlab-personal': yearsByTab['gitlab-personal'][0],
  });

  const activeYear = selectedYearByTab[activeTab];
  const activeData = dataByTab[activeTab];
  const filteredData = React.useMemo(() => {
    const commitsByDate = new Map(
      activeData
        .filter((item) => item.date.startsWith(String(activeYear)))
        .map((item) => [item.date, item.commits])
    );

    const yearDays: { date: string; commits: number }[] = [];
    const start = new Date(Date.UTC(activeYear, 0, 1));
    const end = new Date(Date.UTC(activeYear, 11, 31));

    for (
      let day = new Date(start);
      day <= end;
      day.setUTCDate(day.getUTCDate() + 1)
    ) {
      const date = day.toISOString().split('T')[0];
      yearDays.push({
        date,
        commits: commitsByDate.get(date) ?? 0,
      });
    }

    return yearDays;
  }, [activeData, activeYear]);
  const yearTotal = React.useMemo(
    () => filteredData.reduce((sum, item) => sum + item.commits, 0),
    [filteredData]
  );
  const setYearForActiveTab = (year: number) => {
    setSelectedYearByTab((prev) => ({
      ...prev,
      [activeTab]: year,
    }));
  };
  const emptyStateByTab = {
    github: commitmentContent.empty.github,
    'gitlab-personal': commitmentContent.empty.gitlabPersonal,
  } as const;
  const emptyState = emptyStateByTab[activeTab as 'github' | 'gitlab-personal'];

  return (
    <section id="commitment" className="commitment">
      <div className="commitment__top-line" />

      <div className="commitment__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="commitment__header"
        >
          <span className="commitment__index">04.</span>
          <h2 className="commitment__heading">Commitment</h2>
          <div className="commitment__line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="commitment__intro"
        >
          A transparent view of my consistency across platforms with activity
          patterns from GitHub, GitLab work, and personal GitLab streams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="commitment__tabs"
        >
          {commitmentContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`commitment__tab ${activeTab === tab.id ? 'commitment__tab--active' : ''}`}
            >
              <span className="commitment__tab-icon">
                {commitmentTabIcons[tab.id]}
              </span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="commitment__panel"
        >
          <div className="commitment__panel-header">
            <div className="commitment__panel-heading">
              <p className="commitment__panel-title">Contribution Overview</p>
              <p className="commitment__panel-subtitle">
                <span className="commitment__panel-subline">
                  <Icons.Activity size={13} />
                  <span>
                    <strong>Source:</strong> {activeTab}
                  </span>
                </span>
                <span className="commitment__panel-subline">
                  <Icons.Calendar size={13} />
                  <span>
                    <strong>Year:</strong> {activeYear}
                  </span>
                </span>
              </p>
            </div>
            <div className="commitment__panel-metric">
              <span className="commitment__panel-metric-value">
                {yearTotal}
              </span>
              <span className="commitment__panel-metric-label">
                contributions
              </span>
            </div>
          </div>

          <div className="commitment__panel-layout">
            <div className="commitment__main">
              <CommitsHeatmap data={filteredData} />
            </div>

            <div className="commitment__years">
              <p className="commitment__years-label">Choose year</p>
              <ul>
                {yearsByTab[activeTab].map((year) => (
                  <li key={`${activeTab}-${year}`}>
                    <button
                      onClick={() => setYearForActiveTab(year)}
                      className={`commitment__year ${year === activeYear ? 'commitment__year--active' : ''}`}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {filteredData.length === 0 && emptyState && (
            <div className="commitment__empty">
              <h3>{emptyState.title}</h3>
              <p>{emptyState.description}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
