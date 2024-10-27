'use client';
import * as React from 'react';
import { Link } from 'react-scroll';

import { Descriptions } from '../Descriptions';

import { getHeaderOffset } from '@utils';
import { WelcomeData } from '@data';

import './styles.scss';

const { welcome, title, subtitle, descriptionsList, button } = WelcomeData;

export const Welcome = () => {
  const [offset, setOffset] = React.useState<number>(0);

  React.useEffect(() => {
    setOffset(getHeaderOffset());
  }, []);

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
          to="about"
          spy
          smooth
          duration={250}
          offset={offset}
          className="welcome__button"
        >
          {button}
        </Link>
      </div>
    </section>
  );
};
