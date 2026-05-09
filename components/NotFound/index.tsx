import * as React from 'react';
import Link from 'next/link';

import { notFoundData } from '@data';

const { code, message, goBack } = notFoundData;

import './styles.scss';

export const NotFound = () => (
  <main className="not-found">
    <div className="not-found__container">
      <div className="not-found__content">
        <div className="not-found__title">
          <span className="not-found__code">{code}</span>
          <span className="not-found__line" />
          <span className="not-found__message">{message}</span>
        </div>
        <Link href="/" className="not-found__link">
          {goBack}
        </Link>
      </div>
    </div>
  </main>
);
