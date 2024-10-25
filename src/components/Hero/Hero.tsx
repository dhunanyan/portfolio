'use client';
import * as React from 'react';
import Link from 'next/link';

import { Descriptions } from '../Descriptions';

import { handleSmoothScroll } from '@utils';
import { HeroData } from '@data';

import './styles.scss';

const { welcome, title, subtitle, descriptionsList, button } = HeroData;

export const Hero = () => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSmoothScroll(event.nativeEvent);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h4 className="hero__welcome">{welcome}</h4>
        <h1 className="hero__title">{title}</h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
        <Descriptions
          className="hero__description"
          descriptionsList={descriptionsList}
        />
        <Link href="#about" onClick={handleLinkClick} className="hero__button">
          {button}
        </Link>
      </div>
    </section>
  );
};
