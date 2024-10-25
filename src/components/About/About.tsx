import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AboutData } from '@data';

import './styles.scss';
import { Descriptions } from './Descriptions';
import { SkillsMapping } from './SkillsMapping';

const { title, descriptionsList, skillsList } = AboutData;

export const About = () => (
  <section id="about" className="about">
    <div className="about__container">
      <div className="about__content">
        <h2 className="about__title">
          <span>{title[0]}</span>
          <span>{title[1]}</span>
          <span className="about__line" />
        </h2>
        <Descriptions descriptionsList={descriptionsList} />
        <span className="about__line" />
        <SkillsMapping skillsList={skillsList} />
      </div>

      <div className="about__images">
        <div className="about__image about__image--me">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/profile.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--me">
            <span>Me</span>
          </div>
        </div>
        <Link
          href="https://github.com/dhunanyan"
          target="_blank"
          className="about__image about__image--github"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/github.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dhunanyan"
          target="_blank"
          className="about__image about__image--linkedin"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/linkedin.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--linkedin" />
        </Link>
        <Link
          href="#TODO"
          target="_blank"
          className="about__image about__image--cv"
        >
          <span>Curriculum vitae</span>
          <div className="about__overlay about__overlay--linkedin" />
        </Link>
      </div>
    </div>
  </section>
);
