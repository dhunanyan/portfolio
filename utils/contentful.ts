import 'server-only';

import { createClient } from 'contentful';

import {
  parseAboutSection,
  parseCommonSections,
  parseExperienceSection,
  parsePreviewBlogs,
  parseBlog,
} from './parsers';

import {
  AboutSectionModel,
  CommonSectionModel,
  ExperienceSectionModel,
  BlogPreviewModel,
  BlogModel,
} from '@models';

import {
  AboutSectionResponseType,
  CommonSectionResponseType,
  ExperienceSectionResponseType,
  BlogResponseType,
} from '@config';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const hasClientConfig = Boolean(spaceId && accessToken);
const REQUEST_TIMEOUT_MS = 10000;

const client = hasClientConfig
  ? createClient({
      space: spaceId!,
      accessToken: accessToken!,
      retryOnError: false,
      timeout: REQUEST_TIMEOUT_MS,
    })
  : null;

const withTimeout = async <T>(promise: Promise<T>): Promise<T> => {
  const timeoutPromise = new Promise<T>((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          `Contentful request timed out after ${REQUEST_TIMEOUT_MS / 1000} seconds`
        )
      );
    }, REQUEST_TIMEOUT_MS);
  });

  return Promise.race([promise, timeoutPromise]);
};

const getTypedEntries = async <T>(
  contentType: string
): Promise<T | undefined> => {
  if (!client) {
    return undefined;
  }

  try {
    return (await withTimeout(
      client.getEntries({
        content_type: contentType,
      })
    )) as unknown as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[contentful] Failed to fetch "${contentType}": ${message}`);
    return undefined;
  }
};

export const getAboutSection = async (): Promise<
  AboutSectionModel | undefined
> => {
  const entries = await getTypedEntries<AboutSectionResponseType>(
    'portfolioAboutSection'
  );

  if (!entries) {
    return undefined;
  }

  return parseAboutSection(entries);
};

export const getExperienceSection = async (): Promise<
  ExperienceSectionModel | undefined
> => {
  const entries = await getTypedEntries<ExperienceSectionResponseType>(
    'portfolioExperienceSection'
  );

  if (!entries) {
    return undefined;
  }

  return parseExperienceSection(entries);
};

export const getCommonSections = async (): Promise<
  CommonSectionModel[] | undefined
> => {
  const entries = await getTypedEntries<CommonSectionResponseType>(
    'portfolioCommonSection'
  );

  if (!entries) {
    return undefined;
  }

  return parseCommonSections(entries);
};

export const getPreviewBlogs = async (): Promise<
  BlogPreviewModel[] | undefined
> => {
  const entries = await getTypedEntries<BlogResponseType>('portfolioBlog');

  if (!entries) {
    return undefined;
  }

  return parsePreviewBlogs(entries);
};

export const getBlog = async (
  blogId: string
): Promise<BlogModel | undefined> => {
  const entries = await getTypedEntries<BlogResponseType>('portfolioBlog');

  if (!entries) {
    return undefined;
  }

  const matchedBlog = entries.items.find(({ fields: { id } }) => id === blogId);

  if (!matchedBlog) {
    return undefined;
  }

  return parseBlog(matchedBlog);
};
