import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './styles.scss';

const SKILLS = [
  'React',
  'React Native',
  'Expo go',
  'NextJS',
  'Typescript',
  'JavaScript(ES5/ES6)',
  'ThreeJS',
  'NodeJS',
  'Express',
  'GraphQL',
  'Rest API',
  'WebPack',
  'Jest',
  'AWS',
  'Terraform',
  'Bash Scripts',
  'Git',
  'GitHub/GitLab',
  'GitLab Pipelines',
  'NewRelic',
  'Splunk',
  'Contentstack',
];

const KNOW_AS_WELL = [
  'Java',
  'C#',
  'Unity',
  'Python',
  'PyGame',
  'Machine Learning',
  'AI Prompting',
  'Jupyter Lab',
  'Jupyter Notebook',
  'WebDriverIO',
  'PostgresQL',
  'MongoDB',
  'Firebase',
  'Heroku',
  'Netlify',
];

const SOFT_SKILLS = [
  'Jira',
  'Confluence',
  'Slack',
  'Dovico',
  'MS Teams',
  'MS Office 365',
  'OutLook',
];

const UI_TOOLS = [
  'Blender',
  'Figma',
  'Asperite',
  'Ad. Photoshop',
  'Ad. Illustrator',
  'Ad. Lightroom',
];

export const About = () => (
  <section id="about" className="about">
    <div className="about__container">
      <div className="about__content">
        <h2 className="about__title">
          <span>01.</span> <span>About me</span>
          <span className="about__line" />
        </h2>

        <p className="about__description">
          I&apos;m a dedicated software developer with a strong background in
          web development and a passion for problem-solving. Over the years,
          I&apos;ve gained experience in several other areas of software
          development, <span>including backend services</span>,{' '}
          <span>database management</span>, <span>mobile app development</span>{' '}
          and <span>game development</span>.
        </p>

        <p className="about__description">
          My approach is to always keep learning and stay updated with the
          latest technology trends. I enjoy working on projects that push my
          creativity and technical abilities to the next level, and I strive to
          deliver top-quality solutions that meet client expectations.
        </p>

        <span className="about__line" />

        <p className="about__description">
          Recently used <span>Languages/Technologies/Tools</span>:
        </p>
        <ul className="about__list">
          {SKILLS.map((skill, index) => (
            <li className="about__item" key={index}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>

        <p className="about__description">Know as well:</p>
        <ul className="about__list">
          {KNOW_AS_WELL.map((skill, index) => (
            <li className="about__item about__item--know" key={index}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>

        <span className="about__line" />

        <p className="about__description">
          UI related <span>tools</span>:
        </p>
        <ul className="about__list">
          {UI_TOOLS.map((skill, index) => (
            <li className="about__item about__item--ui" key={index}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>

        <span className="about__line" />

        <p className="about__description">
          Other <span>tools</span>:
        </p>
        <ul className="about__list">
          {SOFT_SKILLS.map((skill, index) => (
            <li className="about__item about__item--other" key={index}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="about__images">
        <div className="about__image about__image--me">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/profile.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--me">
            <span>Me</span>
          </div>
        </div>
        <Link
          href="https://github.com/dhunanyan"
          target="_blank"
          className="about__image about__image--github"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/github.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dhunanyan"
          target="_blank"
          className="about__image about__image--linkedin"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/linkedin.png"
            alt="Me :)"
          />
          <div className="about__overlay about__overlay--linkedin" />
        </Link>
      </div>
    </div>
  </section>
);
