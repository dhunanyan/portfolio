import * as React from 'react';

import { FooterData, PersonalInfo } from '@data';

import './styles.scss';

const { allRights, madeWith, by, heart, separator, motto } = FooterData;

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="content">
          <div className="footer__motto">
            <span className="footer__motto-line" />
            <p>
              <span className="footer__motto-quot">&quot;</span>
              <span className="footer__motto-text">{motto}</span>
            </p>
            <span className="footer__motto-line" />
          </div>
          <h6 className="footer__title">
            <span>{allRights}</span>
            <span className="footer__title-separator">{separator}</span>
            <span>
              {madeWith}
              <span>{heart}</span>
              {by}
              <a href={PersonalInfo.GitHub} className="footer__github">
                {PersonalInfo.Username}
              </a>
            </span>
          </h6>
        </div>
      </div>
    </footer>
  );
};
