import * as React from 'react';

import { Slider } from './Slider';

import './styles.scss';

export const Work = () => {
  return (
    <section className="work">
      <div className="work__container">
        <h2 className="work__title">
          <span>03. </span>
          <span>Work</span>
          <span className="work__line" />
        </h2>
        <p className="work__description">
          Welcome to my &quot;Work&quot; section, where you&apos;ll find a
          showcase of my projects spanning a range of web and mobile
          applications. Each project represents my dedication to clean,
          efficient code and a strong commitment to delivering exceptional user
          works. From dynamic full-stack applications and interactive 3D web
          works to mobile apps and responsive websites, my work here highlights
          my expertise in technologies like React, Next.js, Three.js, and more.
        </p>

        <p className="work__description">
          Explore each project to see how I&apos;ve applied the latest tools and
          best practices to create solutions that are both functional and
          visually engaging. Every project has pushed me to refine my skills,
          take on unique challenges, and learn new techniques, which I now bring
          into all my work.
        </p>
        {/* {richTextRenderer(
          (<></>) as unknown as Document,
          'work__description'
        )} */}
        <h2 className="work__subtitle">
          <span>Featured projects</span>
          <span className="work__line" />
        </h2>

        <Slider />
      </div>
    </section>
  );
};
