'use client';
import * as React from 'react';
import { Link } from 'react-scroll';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { CommonSectionModel } from '@models';
import { getHeaderOffset } from '@utils';

import './styles.scss';

export type WelcomePropsType = {
  data?: CommonSectionModel;
};

export const Welcome = ({ data }: WelcomePropsType) => {
  const [offset, setOffset] = React.useState<number>(0);

  React.useEffect(() => {
    setOffset(getHeaderOffset());
  }, []);

  if (!data) {
    return null;
  }

  const { info, title, subtitle, description, button } = data;

  return (
    <section id="welcome" className="welcome">
      <div className="welcome__container">
        <h4 className="welcome__welcome">{info}</h4>
        <h1 className="welcome__title">{title}</h1>
        <h2 className="welcome__subtitle">{subtitle}</h2>
        <div className="welcome__description">
          {documentToReactComponents(description)}
        </div>

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
