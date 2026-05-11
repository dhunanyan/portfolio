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
import Slider from 'react-slick';

import './styles.scss';

type CommitmentTab = (typeof commitmentContent.tabs)[number]['id'];
type SliderArrowProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const commitmentTabIcons: Record<CommitmentTab, React.ReactNode> = {
  personal: <Icons.Github size={13} />,
  work: <Icons.GitLab size={13} />,
  studies: <Icons.GitLab size={13} />,
};
const CommitmentSliderArrow = ({ className, onClick }: SliderArrowProps) => {
  const isPrev = className?.includes('slick-prev');
  return (
    <button
      type="button"
      className={`commitment__slider-arrow ${isPrev ? 'commitment__slider-arrow--prev' : 'commitment__slider-arrow--next'} ${className || ''}`}
      onClick={onClick}
      aria-label={isPrev ? 'Previous years' : 'Next years'}
    >
      <Icons.ArrowDown size={14} />
    </button>
  );
};

export const Commitment = () => {
  const [activeTab, setActiveTab] = React.useState<CommitmentTab>('work');

  const dataByTab = React.useMemo(
    () => ({
      personal: githubHeatmap,
      work: gitlabWorkHeatmap,
      studies: gitlabPersonalHeatmap,
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
    personal: yearsByTab.personal[0],
    work: yearsByTab.work[0],
    studies: yearsByTab.studies[0],
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
    personal: commitmentContent.empty.github,
    studies: commitmentContent.empty.gitlabPersonal,
  } as const;
  const emptyState = emptyStateByTab[activeTab as 'personal' | 'studies'];
  const yearsSliderSettings = React.useMemo(
    () => ({
      arrows: true,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      speed: 260,
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: false,
      nextArrow: <CommitmentSliderArrow />,
      prevArrow: <CommitmentSliderArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
          },
        },
      ],
    }),
    []
  );

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
              <p className="commitment__main-label">Heatmap</p>
              <CommitsHeatmap data={filteredData} />
            </div>

            <div className="commitment__years">
              <p className="commitment__years-label">Choose year</p>
              <div className="commitment__years-mobile">
                {yearsByTab[activeTab].map((year) => (
                  <button
                    key={`mobile-${activeTab}-${year}`}
                    onClick={() => setYearForActiveTab(year)}
                    className={`commitment__year ${year === activeYear ? 'commitment__year--active' : ''}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
              <Slider
                key={activeTab}
                {...yearsSliderSettings}
                className="commitment__years-slider"
              >
                {yearsByTab[activeTab].map((year) => (
                  <div
                    key={`${activeTab}-${year}`}
                    className="commitment__year-slide"
                  >
                    <button
                      onClick={() => setYearForActiveTab(year)}
                      className={`commitment__year ${year === activeYear ? 'commitment__year--active' : ''}`}
                    >
                      {year}
                    </button>
                  </div>
                ))}
              </Slider>
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
