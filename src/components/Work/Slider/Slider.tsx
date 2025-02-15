'use client';
import * as React from 'react';
import Image from 'next/legacy/image';

import { FaGithub } from 'react-icons/fa6';
import { GoLinkExternal } from 'react-icons/go';

import './styles.scss';

// Utility functions and types
type SlideInfo = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  button: string;
  links: {
    text: string;
    url: string;
    icon: () => React.ReactNode;
  }[];
};

const SLIDES: SlideInfo[] = [
  {
    title: 'Spotify Clone (Mobile App)',
    subtitle: 'React Native, TypeScript, Expo Go, Spotify API',
    description:
      'An impressive clone of the Spotify app, built with React Native and Expo Go. With a familiar interface and many core Spotify features, this app lets you explore, stream, and manage music seamlessly. Powered by the Spotify API.',
    image: '/images/spotify-clone.png',
    video: '/videos/spotify-clone.mp4',
    button: 'Spotify Clone',
    links: [
      {
        text: 'GitHub Repo',
        url: 'https://github.com/dhunanyan/spotify-clone',
        icon: () => <FaGithub />,
      },
    ],
  },
  {
    title: 'iOS Weather Clone (Mobile App)',
    subtitle: 'React Native, TypeScript, Expo Go, Open Weather API',
    description:
      'A sleek, real-time weather app built with React Native and Expo Go. Get accurate and up-to-date weather information with an intuitive, mobile-friendly design.',
    image: '/images/ios-weather-clone.png',
    video: '/videos/ios-weather-clone.mp4',
    button: 'iOS Weather Clone',
    links: [
      {
        text: 'GitHub Repo',
        url: 'https://github.com/dhunanyan/ios-weather-clone',
        icon: () => <FaGithub />,
      },
    ],
  },
  {
    title: 'SCSS to CSS Converter (Web App)',
    subtitle: 'React, NextJS, ANTLR, Nodejs, NPM',
    description:
      'A user-friendly tool that seamlessly converts SCSS code to CSS. This lightweight project aims to help developers and designers easily transform SCSS code to browser-ready CSS without complex setup.',
    image: '/images/scss-to-css-converter.png',
    video: '/videos/scss-to-css-converter.mp4',
    button: 'SCSS/CSS Converter',
    links: [
      {
        text: 'App',
        url: 'https://github.com/dhunanyan/scss-to-css-converter',
        icon: () => <FaGithub />,
      },
      {
        text: 'NPM',
        url: 'https://github.com/dhunanyan/scss-to-css-converter-npm-package',
        icon: () => <FaGithub />,
      },
      {
        text: 'NPM',
        url: 'https://www.npmjs.com/package/@dhunanyan/scss-to-css-converter',
        icon: () => <GoLinkExternal />,
      },
      {
        text: 'Website',
        url: 'https://scss-to-css-converter.netlify.app',
        icon: () => <GoLinkExternal />,
      },
    ],
  },
  {
    title: 'Novelex Consulting LLC (Web App)',
    subtitle: 'React, NextJS, TypeScript',
    description:
      "A sleek, professional website for Novelex Consulting LLC, built with Next.js. The site highlights the firm's consulting services, expertise, and values with a modern, responsive design.",
    image: '/images/novelex.png',
    video: '/videos/novelex-consulting.mp4',
    button: 'Novelex Consulting',
    links: [
      {
        text: 'GitHub Repo',
        url: 'https://github.com/dhunanyan/novelex-consulting-llc',
        icon: () => <FaGithub />,
      },
      {
        text: 'Website',
        url: 'https://novelex-consulting.com',
        icon: () => <GoLinkExternal />,
      },
    ],
  },
];

export const Slider: React.FC = () => {
  const [position, setPosition] = React.useState<number>(0);
  const buttons = React.useMemo(() => SLIDES.map((slide) => slide.button), []);

  return (
    <div className="slider">
      <ul className="slider__buttons">
        {buttons.map((button, index) => {
          return (
            <li
              className={`slider__button${position === index ? ' slider__button--active' : ''}`}
              key={index}
            >
              <button onClick={() => setPosition(index)}>{button}</button>
            </li>
          );
        })}
      </ul>
      <ul className="slider__list">
        {SLIDES.map(({ title, image, video, links }, index) => (
          <li
            className={`slider__item${index === position ? ' slider__item--active' : ''}`}
            key={index}
            style={{
              transform: `translate(0, calc(${position * -100}% - ${index * 20}px)) scale(${index === position ? 1 : 0.9})`,
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={image}
              alt={title}
              placeholder="blur"
              blurDataURL={image}
            />
            {video && <video src={video} preload="none" autoPlay loop muted />}
            <ul className="slider__links">
              {links.map(({ text, url, icon }, i) => (
                <li key={i} className="slider__link">
                  {i !== 0 && <span>|</span>}
                  <a href={url} target="_blank">
                    {text}
                    {icon()}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="slider__content">
        <ul className="slider__content-list">
          {SLIDES.map(({ title, subtitle, description }, index) => (
            <li
              key={index}
              className="slider__content-item"
              style={{ pointerEvents: index === position ? 'all' : 'none' }}
            >
              <h3
                className="slider__content-item-title"
                style={{ opacity: +(index === position) }}
              >
                {title}
              </h3>
              <h4
                className="slider__content-item-subtitle"
                style={{ opacity: +(index === position) }}
              >
                {subtitle}
              </h4>
              <p
                className="slider__content-item-description"
                style={{ opacity: +(index === position) }}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
