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
  button: string;
  github?: string;
  website?: string;
};

const SLIDES: SlideInfo[] = [
  {
    title: 'Spotify Clone',
    subtitle: 'React Native, TypeScript, Expo Go, Spotify API',
    description:
      'An impressive clone of the Spotify app, built with React Native and Expo Go. With a familiar interface and many core Spotify features, this app lets you explore, stream, and manage music seamlessly. Powered by the Spotify API.',
    image: '/images/spotify-clone.png',
    button: 'Spotify Clone',
    github: 'https://github.com/dhunanyan/spotify-clone',
  },
  {
    title: 'iOS Weather Clone',
    subtitle: 'React Native, TypeScript, Expo Go, Open Weather API',
    description:
      'A sleek, real-time weather app built with React Native and Expo Go. Get accurate and up-to-date weather information with an intuitive, mobile-friendly design.',
    image: '/images/weather-ios.png',
    button: 'iOS Weather Clone',
    github: 'https://github.com/dhunanyan/ios-weather-clone',
  },
  {
    title: 'SCSS to CSS Converter',
    subtitle: 'React, NextJS, ANTLR, Python (Compiler), Django',
    description:
      'A user-friendly tool that seamlessly converts SCSS code to CSS. This lightweight project aims to help developers and designers easily transform SCSS code to browser-ready CSS without complex setup.',
    image: '/images/scss-to-css-converter.png',
    button: 'SCSS/CSS Converter',
    github: 'https://github.com/dhunanyan/scss-to-css-converter',
  },
  {
    title: 'Novelex Consulting LLC',
    subtitle: 'React, NextJS, TypeScript',
    description:
      "A sleek, professional website for Novelex Consulting LLC, built with Next.js. The site highlights the firm's consulting services, expertise, and values with a modern, responsive design.",
    image: '/images/novelex.png',
    button: 'Novelex Consulting',
    github: 'https://github.com/dhunanyan/novelex-consulting-llc',
    website: 'https://novelex-consulting.com',
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
            <li className="slider__button" key={index}>
              <button onClick={() => setPosition(index)}>{button}</button>
            </li>
          );
        })}
      </ul>
      <ul className="slider__list">
        {SLIDES.map(({ title, image, github, website }, index) => (
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
            <div className="slider__links">
              {github && (
                <a href={github} target="_blank">
                  GitHub Repo
                  <FaGithub />
                </a>
              )}

              {website && (
                <>
                  <span>|</span>
                  <a href={website} target="_blank">
                    Website
                    <GoLinkExternal />
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="slider__content">
        <ul className="slider__content-list">
          {SLIDES.map(({ title, subtitle, description }, index) => (
            <li
              className="slider__content-item"
              key={index}
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
