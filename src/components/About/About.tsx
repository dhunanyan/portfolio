import * as React from 'react';

import './styles.scss';

export const About = () => (
  <section id="about" className="about">
    <div className="about__container">
      <h4 className="about__welcome">Hi, my name is</h4>
      <h1 className="about__title">Davit Hunanyan</h1>
      <h2 className="about__subtitle">Software Engineer</h2>
      <p className="about__description">
        I&apos;m a dedicated software developer with a strong background in web
        development and a passion for problem-solving. Over the years, I&apos;ve
        gained experience in several other areas of software development,{' '}
        <span>including backend services</span>,{' '}
        <span>database management</span>, <span>mobile app development</span>{' '}
        and <span>game development</span>.
      </p>
      <button className="about__button">Get started</button>
    </div>
  </section>
);
