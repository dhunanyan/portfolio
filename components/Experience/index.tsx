'use client';
import * as React from 'react';
import { motion } from 'motion/react';
import { Icons } from '@components/icons';
import { experienceContent } from '@data';
import Image from 'next/image';

import './styles.scss';

type Tab = (typeof experienceContent.tabs)[number];

export type ExperiencePropsType = {
  data?: unknown;
};

const experienceMediaById: Record<
  string,
  { logo: string; building: string; altBase: string }
> = {
  'grand-parade-md': {
    logo: '/experience/grandparade-logo.png',
    building: '/experience/grandparade-building.png',
    altBase: 'Grand Parade',
  },
  'grand-parade-jr': {
    logo: '/experience/grandparade-logo.png',
    building: '/experience/grandparade-building.png',
    altBase: 'Grand Parade',
  },
  'grand-parade-intern': {
    logo: '/experience/grandparade-logo.png',
    building: '/experience/grandparade-building.png',
    altBase: 'Grand Parade',
  },
  agh: {
    logo: '/experience/agh-logo.png',
    building: '/experience/agh-building.png',
    altBase: 'AGH University',
  },
  uken: {
    logo: '/experience/uken-logo.png',
    building: '/experience/uken-building.png',
    altBase: 'UKEN University',
  },
};

export const Experience = ({ data }: ExperiencePropsType) => {
  void data;

  const [activeTab, setActiveTab] = React.useState<Tab>('all');
  const [activeId, setActiveId] = React.useState(experienceContent.items[0].id);
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    React.useState(false);
  const [descriptionHeights, setDescriptionHeights] = React.useState({
    preview: 0,
    full: 0,
  });
  const fullDescriptionRef = React.useRef<HTMLDivElement | null>(null);
  const previewDescriptionRef = React.useRef<HTMLDivElement | null>(null);

  const filtered = experienceContent.items.filter((item) =>
    activeTab === 'all' ? true : item.type === activeTab
  );
  const activeItem =
    experienceContent.items.find((item) => item.id === activeId) ||
    experienceContent.items[0];
  const DESCRIPTION_PREVIEW_CHAR_LIMIT = 160;
  const totalDescriptionChars = activeItem.description.join(' ').length;
  const shouldShowDescriptionToggle =
    totalDescriptionChars > DESCRIPTION_PREVIEW_CHAR_LIMIT;

  const getPreviewDescription = React.useCallback((items: string[]) => {
    let charsCount = 0;
    const previewItems: string[] = [];

    for (const item of items) {
      if (charsCount >= DESCRIPTION_PREVIEW_CHAR_LIMIT) {
        break;
      }

      const remaining = DESCRIPTION_PREVIEW_CHAR_LIMIT - charsCount;
      if (item.length <= remaining) {
        previewItems.push(item);
        charsCount += item.length;
        continue;
      }

      previewItems.push(
        `${item.slice(0, Math.max(remaining - 1, 0)).trimEnd()}...`
      );
      charsCount = DESCRIPTION_PREVIEW_CHAR_LIMIT;
    }

    return previewItems;
  }, []);
  const previewDescription = React.useMemo(
    () => getPreviewDescription(activeItem.description),
    [activeItem.description, getPreviewDescription]
  );
  const activeMedia = experienceMediaById[activeItem.id];
  const tabIconByType: Partial<Record<Tab, React.ReactNode>> = {
    work: <Icons.Briefcase size={13} />,
    education: <Icons.GraduationCap size={13} />,
  };
  const itemIconByType: Record<'work' | 'education', React.ReactNode> = {
    work: <Icons.Briefcase size={12} />,
    education: <Icons.GraduationCap size={12} />,
  };
  const handleItemSelect = (itemId: string) => {
    setActiveId(itemId);
    setIsDescriptionExpanded(false);
  };

  React.useLayoutEffect(() => {
    const full = fullDescriptionRef.current?.scrollHeight ?? 0;
    const preview = previewDescriptionRef.current?.scrollHeight ?? 0;
    setDescriptionHeights({ full, preview });
  }, [activeId, activeItem.description, previewDescription]);

  return (
    <section id="experience" className="experience">
      <div className="experience__top-line" />

      <div className="experience__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience__header"
        >
          <span className="experience__index">02.</span>
          <h2 className="experience__heading">Experience</h2>
          <div className="experience__line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="experience__tabs"
        >
          {experienceContent.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`experience__tab ${activeTab === tab ? 'experience__tab--active' : ''}`}
            >
              {tabIconByType[tab]}
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="experience__layout">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="experience__list"
          >
            <div className="experience__list-line" />
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemSelect(item.id)}
                className={`experience__list-item ${activeId === item.id ? 'experience__list-item--active' : ''}`}
              >
                <div className="experience__list-head">
                  <span className="experience__list-icon">
                    {itemIconByType[item.type]}
                  </span>
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
                    {activeItem.type === 'work'
                      ? activeItem.role
                      : activeItem.degree}
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
                <motion.div
                  className="experience__description-viewport"
                  initial={false}
                  animate={{
                    height: isDescriptionExpanded
                      ? descriptionHeights.full
                      : descriptionHeights.preview,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="experience__description-block"
                    ref={previewDescriptionRef}
                    aria-hidden={isDescriptionExpanded}
                    initial={false}
                    animate={{ opacity: +!isDescriptionExpanded }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <ul>
                      {previewDescription.map((descItem, index) => (
                        <li key={`preview-${index}`}>
                          <p>
                            <span>·</span>
                            {descItem}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    className="experience__description-block"
                    ref={fullDescriptionRef}
                    aria-hidden={!isDescriptionExpanded}
                    initial={false}
                    animate={{ opacity: isDescriptionExpanded ? 1 : 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <ul>
                      {activeItem.description.map((descItem, index) => (
                        <li key={`full-${index}`}>
                          <p>
                            <span>·</span>
                            {descItem}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {shouldShowDescriptionToggle && (
                  <motion.button
                    layout
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    type="button"
                    onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                    className="experience__description-toggle"
                  >
                    {isDescriptionExpanded ? 'Show less' : 'Show more'}
                  </motion.button>
                )}
              </div>

              {activeMedia && (
                <div className="experience__media-grid">
                  <div className="experience__media-box experience__media-box--logo">
                    <Image
                      src={activeMedia.logo}
                      alt={`${activeMedia.altBase} logo`}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="experience__media-image experience__media-image--logo"
                    />
                  </div>
                  <div className="experience__media-box experience__media-box--building">
                    <Image
                      src={activeMedia.building}
                      alt={`${activeMedia.altBase} building`}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="experience__media-image experience__media-image--building"
                    />
                  </div>
                </div>
              )}

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
