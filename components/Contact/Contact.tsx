import * as React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { PersonalInfo } from '@data';

import { CommonSectionModel } from '@models';

import './styles.scss';

export type ContactPropsType = {
  data?: CommonSectionModel;
};

export const Contact = ({ data }: ContactPropsType) => {
  if (!data) {
    return null;
  }

  const { index, title, info, subtitle, description, button } = data;

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          <span>{index}</span>
          <span>{title}</span>
          <span className="contact__line" />
        </h2>
        <h4 className="contact__side-info">{info}</h4>
        <h3 className="contact__subtitle">{subtitle}</h3>
        <div className="contact__description">
          {documentToReactComponents(description)}
        </div>
        <Link href={`mailto:${PersonalInfo.Mail}`} className="contact__button">
          {button}
        </Link>
      </div>
    </section>
  );
};
