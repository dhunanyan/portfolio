import * as React from 'react';
import Link from 'next/link';
import { Icons } from '@config';

import './styles.scss';

export const Header = () => {
  const NAV_ITEMS = ['about', 'experience', 'work', 'contact'];

  return (
    <header id="header" className="header">
      <div className="header__container">
        <Link
          href="/"
          className="header__logo"
          dangerouslySetInnerHTML={{
            __html: `<div>${Icons['logo-fill']}${Icons['logo-bold']}</div>`,
          }}
        />
        <nav className="header__nav">
          <ul className="header__list">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="header__item">
                <Link href="/" className="header__link">
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
