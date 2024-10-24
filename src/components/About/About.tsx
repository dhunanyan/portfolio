import * as React from 'react';
import Image from 'next/image';

import './styles.scss';

export const About = () => (
  <section className="about">
    <div className="about__container">
      <div className="about__content">
        <h2 className="about__title">
          <span>01.</span> <span>About me</span>{' '}
          <span className="about__line" />
        </h2>

        <p className="about__description">
          I&apos;m a dedicated software developer with a strong background in
          web development and a passion for problem-solving. Over the years,
          I&apos;ve gained experience in several other areas of software
          development, <span>including backend services</span>,{' '}
          <span>database management</span>, <span>mobile app development</span>{' '}
          and <span>game development</span>.
        </p>

        <p className="about__description">
          My approach is to always keep learning and stay updated with the
          latest technology trends. I enjoy working on projects that push my
          creativity and technical abilities to the next level, and I strive to
          deliver top-quality solutions that meet client expectations.
        </p>
      </div>

      <div className="about__image">
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/profile.png"
          alt="Me :)"
        />
        <div className="about__overlay" />
      </div>
    </div>
  </section>
);
