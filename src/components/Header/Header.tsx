'use client';
import * as React from 'react';
import Link from 'next/link';

import { Icons } from '@config';
import { handleSmoothScroll } from '@utils';

import './styles.scss';

export const Header = () => {
  const NAV_ITEMS = ['about', 'experience', 'work', 'contact'];
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSmoothScroll(event.nativeEvent);
  };

  return (
    <header id="header" className="header">
      <div className="header__container">
        <Link
          href="#hero"
          onClick={handleLinkClick}
          className="header__logo"
          dangerouslySetInnerHTML={{
            __html: `<div>${Icons['logo-fill']}${Icons['logo-bold']}</div>`,
          }}
        />
        <nav className="header__nav">
          <ul className="header__list">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="header__item">
                <Link
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className="header__link"
                >
                  <span>{`0${index + 1}.`}</span>
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="header__cv">
          CV
        </Link>
      </div>
    </header>
  );
};
