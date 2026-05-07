import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SkillsMapping } from './SkillsMapping';

import { PersonalInfo } from '@data';
import { AboutSectionModel } from '@models';
import { richTextRenderer } from '@utils';

import './styles.scss';

export type AboutPropsType = {
  data?: AboutSectionModel;
};

export const About = ({ data }: AboutPropsType) => {
  if (!data) {
    return null;
  }

  const {
    index,
    title,
    description,
    skills: skillsList,
    github,
    linkedin,
    profile,
    profilePlaceholder,
  } = data;

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">
          <span>{index}</span>
          <span>{title}</span>
          <span className="about__line" />
        </h2>
        <div className="about__content">
          {richTextRenderer(description, 'about__description')}

          <div className="about__images">
            <div className="about__image about__image--me">
              <div className="about__image--container">
                <Image
                  fill
                  sizes="(min-width: 768px) 260px, 90vw"
                  style={{ objectFit: 'cover' }}
                  src={profile}
                  alt="Me :)"
                  priority
                />
              </div>

              <div className="about__overlay about__overlay--me">
                <span>{profilePlaceholder}</span>
              </div>
            </div>
            <Link
              href={PersonalInfo.GitHub}
              target="_blank"
              className="about__image about__image--github"
            >
              <div className="about__image--container">
                <Image
                  fill
                  sizes="150px"
                  style={{ objectFit: 'cover' }}
                  src={github}
                  alt="Github"
                />
              </div>
              <div className="about__overlay about__overlay--github" />
            </Link>
            <Link
              href={PersonalInfo.LinkedIn}
              target="_blank"
              className="about__image about__image--linkedin"
            >
              <div className="about__image--container">
                <Image
                  fill
                  sizes="150px"
                  style={{ objectFit: 'cover' }}
                  src={linkedin}
                  alt="LinkedIn"
                />
              </div>
              <div className="about__overlay about__overlay--linkedin" />
            </Link>
            <Link
              href="/pdfs/dhunanyan-cv-english.pdf"
              target="_blank"
              className="about__image about__image--cv"
            >
              <span>Curriculum vitae</span>
              <div className="about__overlay about__overlay--linkedin" />
            </Link>
          </div>

          <SkillsMapping skillsList={skillsList} />
        </div>
      </div>
    </section>
  );
};
