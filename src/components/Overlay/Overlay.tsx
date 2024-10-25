import * as React from 'react';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';

import { PersonalInfo } from '@data';

import './styles.scss';

const SOCIALS = ['github', 'linkedin'];

const renderIcon = (social: string) => {
  switch (social) {
    case 'linkedin':
      return <FaLinkedinIn />;
    case 'github':
    default:
      return <FaGithub />;
  }
};

const getHref = (social: string) => {
  switch (social) {
    case 'linkedin':
      return PersonalInfo.LinkedIn;
    case 'github':
    default:
      return PersonalInfo.GitHub;
  }
};

export const Overlay = () => (
  <div className="overlay">
    <div className="overlay__socials">
      {SOCIALS.map((social, index) => (
        <Link
          key={index}
          href={getHref(social)}
          target="_blank"
          className="overlay__link"
        >
          {renderIcon(social)}
          <span>{PersonalInfo.Username}</span>
        </Link>
      ))}
      <span className="overlay__line overlay__line--link" />
    </div>

    <div className="overlay__mail">
      <p>{PersonalInfo.Mail}</p>
      <span className="overlay__line" />
    </div>
  </div>
);
