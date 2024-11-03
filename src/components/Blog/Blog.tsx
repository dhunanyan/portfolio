import * as React from 'react';

import { BlogModel } from '@models';

import './styles.scss';
import Image from 'next/legacy/image';
import { richTextRenderer } from '@utils';

export type BlogPropsType = {
  data?: BlogModel;
};

export const Blog = ({ data }: BlogPropsType) => {
  if (!data) {
    return null;
  }

  const {
    title,
    image,
    titlePrefix,
    lastUpdated,
    username,
    profilePicture,
    content,
  } = data;

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
        <h1 className="blog__title">
          <span>{titlePrefix}</span>
          <span>{title}</span>
          <span />
        </h1>
        <div className="blog__user">
          <div className="blog__user-image">
            <Image
              layout="fill"
              objectFit="cover"
              src={profilePicture}
              alt="Github"
              placeholder="blur"
              blurDataURL={profilePicture}
            />
          </div>

          <div className="blog__user-info">
            <h3 className="blog__user-username">
              Published by: <span>{username}</span>
            </h3>
            <p className="blog__user-last-updated">
              Last updated: <span>{lastUpdated} </span>
            </p>
          </div>
        </div>
        {richTextRenderer(content, 'blog__content')}
      </div>
    </main>
  );
};
