'use client';
import * as React from 'react';
import Link from 'next/link';

import { Descriptions } from '../Descriptions';

import { handleSmoothScroll } from '@utils';
import { WelcomeData } from '@data';

import './styles.scss';

const { welcome, title, subtitle, descriptionsList, button } = WelcomeData;

export const Welcome = () => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSmoothScroll({ event: event.nativeEvent });
  };

  return (
    <section id="welcome" className="welcome">
      <div className="welcome__container">
        <h4 className="welcome__welcome">{welcome}</h4>
        <h1 className="welcome__title">{title}</h1>
        <h2 className="welcome__subtitle">{subtitle}</h2>
        <Descriptions
          className="welcome__description"
          descriptionsList={descriptionsList}
        />
        <Link
          href="#about"
          onClick={handleLinkClick}
          className="welcome__button"
        >
          {button}
        </Link>
      </div>
    </section>
  );
};
