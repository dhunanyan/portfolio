import * as React from 'react';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';

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
      return 'https://www.linkedin.com/in/dhunanyan';
    case 'github':
    default:
      return 'https://github.com/dhunanyan';
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
          <span>dhunanyan</span>
        </Link>
      ))}
      <span className="overlay__line overlay__line--link" />
    </div>

    <div className="overlay__mail">
      <p>davit.hunanyan@me.com</p>
      <span className="overlay__line" />
    </div>
  </div>
);
