'use client';
import * as React from 'react';
import Link from 'next/link';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { Icons } from '@config';
import { handleSmoothScroll } from '@utils';

import './styles.scss';

type NavItem = 'about' | 'experience' | 'work' | 'contact';

const NAV_ITEMS = ['about', 'experience', 'work', 'contact'];

export const Header = () => {
  const [activeItem, setActiveItem] = React.useState<NavItem>('about');

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleSmoothScroll({ event: event.nativeEvent });
  };

  const handleLeftClick = () => {
    setActiveItem(
      (prev) =>
        NAV_ITEMS[
          Math.max(NAV_ITEMS.findIndex((item) => item === prev) - 1, 0)
        ] as NavItem
    );
  };

  const handleRightClick = () => {
    setActiveItem(
      (prev) =>
        NAV_ITEMS[
          Math.min(
            NAV_ITEMS.findIndex((item) => item === prev) + 1,
            NAV_ITEMS.length - 1
          )
        ] as NavItem
    );
  };

  React.useEffect(() => {
    handleSmoothScroll({ targetID: activeItem });
  }, [activeItem]);

  return (
    <header id="header" className="header">
      <div className="header__container">
        <Link
          href="#hero"
          onClick={handleScroll}
          className="header__logo"
          dangerouslySetInnerHTML={{
            __html: `<div>${Icons['logo-fill']}${Icons['logo-bold']}</div>`,
          }}
        />
        <nav className="header__nav">
          <button
            disabled={NAV_ITEMS[0] === activeItem}
            className={`header__nav-arrow header__nav-arrow--left${NAV_ITEMS[0] === activeItem ? ' header__nav-arrow--disabled' : ''}`}
            onClick={handleLeftClick}
          >
            <IoIosArrowBack />
          </button>
          <div className="header__nav-container">
            <ul className={`header__list header__list--${activeItem}`}>
              {NAV_ITEMS.map((item, index) => (
                <li key={index} className="header__item">
                  <Link
                    href={`#${item}`}
                    onClick={handleScroll}
                    className="header__link"
                  >
                    <span>{`0${index + 1}.`}</span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            disabled={NAV_ITEMS[NAV_ITEMS.length - 1] === activeItem}
            className={`header__nav-arrow header__nav-arrow--right${NAV_ITEMS[NAV_ITEMS.length - 1] === activeItem ? ' header__nav-arrow--disabled' : ''}`}
            onClick={handleRightClick}
          >
            <IoIosArrowForward />
          </button>
        </nav>

        <Link href="/" className="header__cv">
          CV
        </Link>
      </div>
    </header>
  );
};
