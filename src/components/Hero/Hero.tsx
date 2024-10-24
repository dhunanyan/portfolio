import * as React from 'react';

import './styles.scss';

export const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__container">
      <h4 className="hero__welcome">Hi, my name is</h4>
      <h1 className="hero__title">Davit Hunanyan</h1>
      <h2 className="hero__subtitle">Software Engineer</h2>
      <p className="hero__description">
        I&apos;m a dedicated software developer with a strong background in web
        development and a passion for problem-solving. Over the years, I&apos;ve
        gained experience in several other areas of software development,{' '}
        <span>including backend services</span>,{' '}
        <span>database management</span>, <span>mobile app development</span>{' '}
        and <span>game development</span>.
      </p>
      <button className="hero__button">Get started</button>
    </div>
  </section>
);
