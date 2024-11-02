import * as React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { BlogPreviewModel } from '@models';

import './styles.scss';

export type PreviewBlogPropsType = {
  data?: BlogPreviewModel[];
};

export const PreviewBlogs = ({ data }: PreviewBlogPropsType) => (
  <main className="preview-blogs">
    <div className="preview-blogs__container">
      <div className="preview-blogs__content">
        <h1 className="preview-blogs__title">
          <span>Code Chronicles</span>
          <span>- Adventures in React and Beyond</span>
          <span />
        </h1>
        <p className="preview-blogs__description">
          Welcome to Code Chronicles, your ultimate destination for navigating
          the ever-evolving landscape of web and mobile development! Dive into a
          treasure trove of insightful articles that explore the depths of
          React, React Native, and the MERN stack. Whether you&apos;re a
          seasoned developer or just starting your coding journey, our carefully
          curated content is designed to enlighten, inspire, and empower you.
          Join us as we embark on this coding adventure, unlocking the secrets
          to building powerful applications and mastering the art of modern web
          development. Your next great project starts here!
        </p>
      </div>
      <div className="preview-blogs__cards">
        {data &&
          data.map(({ id, title, image }) => (
            <Link key={id} href={`/blog/${id}`} className="preview-blogs__card">
              <div className="preview-blogs__card-image">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={image}
                  alt="Github"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>

              <h2 className="preview-blogs__card-title">{title}</h2>
            </Link>
          ))}
      </div>
    </div>
  </main>
);
