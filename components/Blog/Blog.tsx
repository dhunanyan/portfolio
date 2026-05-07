import * as React from 'react';
import Image from 'next/image';

import { BlogModel } from '@models';

import './styles.scss';
import { richTextRenderer } from '@utils';
import { PersonalInfo } from '@data';
import { FaGithub } from 'react-icons/fa6';

export type BlogPropsType = {
  data?: BlogModel;
};

export const Blog = ({ data }: BlogPropsType) => {
  if (!data) {
    return null;
  }

  const { title, image, lastUpdated, content } = data;

  return (
    <main className="blog" id="welcome">
      <div className="blog__image">
        <Image
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          src={image}
          alt={title}
        />
      </div>
      <div className="blog__container">
        <h1 className="blog__title">{title}</h1>
        <div className="blog__user">
          <div className="blog__user-image">
            <Image
              fill
              sizes="40px"
              style={{ objectFit: 'cover' }}
              src="/images/avatar.png"
              alt="Davit Hunanyan avatar"
            />
          </div>

          <div className="blog__user-info">
            <h3 className="blog__user-username">
              Published by:
              <a href={PersonalInfo.GitHub} target="_blank">
                <span>{PersonalInfo.Username}</span>
                <FaGithub />
              </a>
            </h3>
            <p className="blog__user-last-updated">
              Last updated: <span>{lastUpdated}</span>
            </p>
          </div>
        </div>
        {richTextRenderer(content, 'blog__content')}
      </div>
    </main>
  );
};
