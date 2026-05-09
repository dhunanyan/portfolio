'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from '@components/icons';
import { headerContent } from '@data';
import { createSmoothScrollClickHandler, smoothScrollTo } from '@utils/scroll';

import './styles.scss';

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    smoothScrollTo(href);
  };
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  const handleConnectClick = createSmoothScrollClickHandler('#contact', () => {
    setMobileOpen(false);
  });
  const handleMobileConnect = () => {
    setMobileOpen(false);
    smoothScrollTo('#contact');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
      >
        <div className="header__container">
          <button
            onClick={() => smoothScrollTo('#welcome')}
            className="header__logo"
          >
            <span className="header__logo-icon">
              <Icons.Logo size={40} />
            </span>
            <span className="header__logo-text">{headerContent.logoText}</span>
          </button>

          <div className="header__desktop-nav">
            {headerContent.navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                onClick={() => handleNav(link.href)}
                className="header__link"
              >
                <span className="header__link-index">0{i + 1}.</span>
                <span className="header__link-label">{link.label}</span>
                <span className="header__link-line" />
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              href="#contact"
              onClick={handleConnectClick}
              className="header__connect"
            >
              {headerContent.connectLabel}
            </motion.a>
          </div>

          <button
            className="header__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="header__mobile-menu"
          >
            {headerContent.navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.href)}
                className="header__mobile-link"
              >
                <span className="header__mobile-index">0{i + 1}.</span>
                <span className="header__mobile-label">{link.label}</span>
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={handleMobileConnect}
              className="header__mobile-connect"
            >
              {headerContent.connectLabel}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
