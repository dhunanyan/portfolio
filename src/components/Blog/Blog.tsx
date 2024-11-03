import * as React from 'react';

import { BlogModel } from '@models';

import './styles.scss';
import Image from 'next/legacy/image';
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
    <main className="blog">
      <div className="blog__image">
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt="Github"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="blog__container">
        <h1 className="blog__title">{title}</h1>
        <div className="blog__user">
          <div className="blog__user-image">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/avatar.png"
              alt="Github"
              placeholder="blur"
              blurDataURL="/images/avatar.png"
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
