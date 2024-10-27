import * as React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { Descriptions } from '../Descriptions';
import { SkillsMapping } from './SkillsMapping';

import { AboutData, PersonalInfo } from '@data';

import './styles.scss';

const { title, descriptionsList, skillsList } = AboutData;

export const About = () => (
  <section id="about" className="about">
    <div className="about__container">
      <h2 className="about__title">
        <span>{title[0]}</span>
        <span>{title[1]}</span>
        <span className="about__line" />
      </h2>
      <div className="about__content">
        <Descriptions
          descriptionsList={descriptionsList}
          className="about__description"
          withLine
        />

        <div className="about__images">
          <div className="about__image about__image--me">
            <div className="about__image--container">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/profile.png"
                alt="Me :)"
                priority
                placeholder="blur"
                blurDataURL="/images/profile.png"
              />
            </div>

            <div className="about__overlay about__overlay--me">
              <span>Me</span>
            </div>
          </div>
          <Link
            href={PersonalInfo.GitHub}
            target="_blank"
            className="about__image about__image--github"
          >
            <div className="about__image--container">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/github.png"
                alt="Github"
                placeholder="blur"
                blurDataURL="/images/github.png"
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
                layout="fill"
                objectFit="cover"
                src="/images/linkedin.png"
                alt="LinkedIn"
                placeholder="blur"
                blurDataURL="/images/linkedin.png"
              />
            </div>
            <div className="about__overlay about__overlay--linkedin" />
          </Link>
          <Link
            href="/pdf/dhunanyan-cv-english.pdf"
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
