import * as React from 'react';

import './styles.scss';

export const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__container">
      <h4 className="hero__welcome">Hi, my name is</h4>
      <h1 className="hero__title">Davit Hunanyan</h1>
      <h2 className="hero__subtitle">Software Engineer</h2>
      <p className="hero__description">
        Hi, I&apos;m Davit Hunanyan, a passionate Software Developer
        specializing in Web Development. With experience in various fields, I
        thrive on turning innovative ideas into working software solutions.
        Whether it’s building sleek and responsive websites or developing robust
        applications, I&apos;m always excited to take on new challenges and
        bring projects to life.
      </p>
      <button className="hero__button">Get started</button>
    </div>
  </section>
);
