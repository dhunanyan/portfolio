'use client';
import * as React from 'react';
import { Link } from 'react-scroll';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { Icons } from '@config';
import { getHeaderOffset } from '@utils';

import './styles.scss';

type NavItem = 'welcome' | 'about' | 'experience' | 'work' | 'contact';

const NAV_ITEMS = ['welcome', 'about', 'experience', 'work', 'contact'];

export const Header = () => {
  const [activeItem, setActiveItem] = React.useState<NavItem>('welcome');
  const [offset, setOffset] = React.useState<number>(0);

  React.useEffect(() => {
    setOffset(getHeaderOffset());
  }, []);

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

  return (
    <header id="header" className="header">
      <div className="header__container">
        <Link
          to="welcome"
          spy
          smooth
          duration={250}
          offset={offset}
          className="header__logo"
          activeClass="header__logo--active"
          dangerouslySetInnerHTML={{
            __html: `<div>${Icons['logo-fill']}${Icons['logo-bold']}</div>`,
          }}
          onSetActive={() => setActiveItem('welcome')}
        />
        <nav className="header__nav">
          <Link
            to={
              NAV_ITEMS[
                Math.max(
                  NAV_ITEMS.findIndex((item) => item === activeItem) - 1,
                  0
                )
              ] as NavItem
            }
            spy
            smooth
            duration={250}
            offset={offset}
            disabled={NAV_ITEMS[0] === activeItem}
            onClick={handleLeftClick}
            className={`header__nav-arrow header__nav-arrow--left${NAV_ITEMS[0] === activeItem ? ' header__nav-arrow--disabled' : ''}`}
          >
            <IoIosArrowBack />
          </Link>
          <div className="header__nav-container">
            <ul className={`header__list header__list--${activeItem}`}>
              {NAV_ITEMS.map((item, index) => (
                <li key={index} className="header__item">
                  <Link
                    to={item}
                    spy
                    smooth
                    offset={offset}
                    className="header__link"
                    activeClass="header__link--active"
                    onSetActive={() => setActiveItem(item as NavItem)}
                  >
                    <span>{index === 0 ? '' : `0${index}.`}</span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={
              NAV_ITEMS[
                Math.min(
                  NAV_ITEMS.findIndex((item) => item === activeItem) + 1,
                  NAV_ITEMS.length - 1
                )
              ] as NavItem
            }
            spy
            smooth
            duration={250}
            offset={offset}
            disabled={NAV_ITEMS[NAV_ITEMS.length - 1] === activeItem}
            onClick={handleRightClick}
            className={`header__nav-arrow header__nav-arrow--right${NAV_ITEMS[NAV_ITEMS.length - 1] === activeItem ? ' header__nav-arrow--disabled' : ''}`}
          >
            <IoIosArrowForward />
          </Link>
        </nav>

        <Link
          to="todo"
          spy
          smooth
          offset={offset}
          className={`header__cv${NAV_ITEMS[0] === activeItem ? ' header__cv--active' : ''}`}
        >
          CV
        </Link>
      </div>
    </header>
  );
};
