import * as React from 'react';
import Link from 'next/link';
import { Descriptions } from '../Descriptions';

import { ContactData } from '@data';

import './styles.scss';

const { title, sideInfo, subtitle, descriptionsList, button } = ContactData;

export const Contact = () => (
  <div className="contact">
    <div className="contact__container">
      <h2 className="contact__title">
        <span>{title[0]}</span>
        <span>{title[1]}</span>
        <span className="contact__line" />
      </h2>
      <h4 className="contact__side-info">{sideInfo}</h4>
      <h3 className="contact__subtitle">{subtitle}</h3>
      <Descriptions
        className="contact__description"
        descriptionsList={descriptionsList}
      />
      <Link href="mailto:davit.hunanyan@me.com" className="contact__button">
        {button}
      </Link>
    </div>
  </div>
);
