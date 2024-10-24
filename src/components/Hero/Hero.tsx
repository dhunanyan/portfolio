'use client';
import * as React from 'react';
import Link from 'next/link';
import { handleSmoothScroll } from '@utils';

import './styles.scss';

export const Hero = () => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSmoothScroll(event.nativeEvent); // Passing nativeEvent for your smooth scroll logic
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h4 className="hero__welcome">Hi, my name is</h4>
        <h1 className="hero__title">Davit Hunanyan</h1>
        <h2 className="hero__subtitle">Software Engineer</h2>
        <p className="hero__description">
          Hi, I&apos;m Davit Hunanyan, a passionate Software Developer
          specializing in Web Development. With experience in various fields, I
          thrive on turning innovative ideas into working software solutions.
          Whether it&apos;s building sleek and responsive websites or developing
          robust applications, I&apos;m always excited to take on new challenges
          and bring projects to life.
        </p>
        <Link href="#about" onClick={handleLinkClick} className="hero__button">
          Get started
        </Link>
      </div>
    </section>
  );
};
