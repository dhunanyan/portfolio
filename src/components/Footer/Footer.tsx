import * as React from 'react';

import { FooterData, PersonalInfo } from '@data';

import './styles.scss';

const { title, motto } = FooterData;

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="content">
          <h6 className="footer__title">
            <span dangerouslySetInnerHTML={{ __html: title }} />
            <a href={PersonalInfo.GitHub} className="footer__github">
              {PersonalInfo.Username}
            </a>
          </h6>
          <div className="footer__motto">
            <span className="footer__motto-line" />
            <p>
              <span className="footer__motto-quot">&quot;</span>
              <span className="footer__motto-text">{motto}</span>
            </p>
            <span className="footer__motto-line" />
          </div>
        </div>
      </div>
    </footer>
  );
};
