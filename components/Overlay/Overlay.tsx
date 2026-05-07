import * as React from 'react';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';

import { PersonalInfo } from '@data';

import './styles.scss';

const SOCIALS = ['github', 'linkedin', 'mail'];

const renderIcon = (social: string) => {
  switch (social) {
    case 'linkedin':
      return <FaLinkedinIn />;
    case 'github':
      return <FaGithub />;
    case 'mail':
    default:
      return <FaEnvelope />;
  }
};

const getHref = (social: string) => {
  switch (social) {
    case 'linkedin':
      return PersonalInfo.LinkedIn;
    case 'github':
      return PersonalInfo.GitHub;
    case 'mail':
    default:
      return `mailto:${PersonalInfo.Mail}`;
  }
};

const getDisplayText = (social: string) => {
  switch (social) {
    case 'linkedin':
    case 'github':
      return PersonalInfo.Username;
    case 'mail':
    default:
      return PersonalInfo.Mail;
  }
};

export const Overlay = () => (
  <div className="overlay">
    <div className="overlay__container">
      <div className="overlay__socials">
        {SOCIALS.map((social, index) => (
          <Link
            key={index}
            href={getHref(social)}
            target="_blank"
            className="overlay__link"
          >
            {renderIcon(social)}
            <span>{getDisplayText(social)}</span>
          </Link>
        ))}
        <span className="overlay__line overlay__line--link" />
      </div>

      <div className="overlay__mail">
        <p>{PersonalInfo.Mail}</p>
        <span className="overlay__line" />
      </div>
    </div>
  </div>
);
