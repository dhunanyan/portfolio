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

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID + '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN + '',
});

export const getAboutSection = async (): Promise<
  AboutSectionModel | undefined
> => {
  try {
    const entries = (await client.getEntries({
      content_type: 'portfolioAboutSection',
      // eslint-disable-next-line
      // @ts-ignore
      select: 'fields',
      // order: "fields.name"
    })) as unknown as AboutSectionResponseType;

    return parseAboutSection(entries);
  } catch (error) {
    console.log(error);
  }
};

export const getExperienceSection = async (): Promise<
  ExperienceSectionModel | undefined
> => {
  try {
    const entries = (await client.getEntries({
      content_type: 'portfolioExperienceSection',
      // eslint-disable-next-line
      // @ts-ignore
      select: 'fields',
      // order: "fields.name"
    })) as unknown as ExperienceSectionResponseType;

    return parseExperienceSection(entries);
  } catch (error) {
    console.log(error);
  }
};

export const getCommonSections = async (): Promise<
  CommonSectionModel[] | undefined
> => {
  try {
    const entries = (await client.getEntries({
      content_type: 'portfolioCommonSection',
      // eslint-disable-next-line
      // @ts-ignore
      select: 'fields',
      // order: "fields.name"
    })) as unknown as CommonSectionResponseType;

    return parseCommonSections(entries);
  } catch (error) {
    console.log(error);
  }
};

export const getPreviewBlogs = async (): Promise<
  BlogPreviewModel[] | undefined
> => {
  try {
    const entries = (await client.getEntries({
      content_type: 'portfolioBlog',
      // eslint-disable-next-line
      // @ts-ignore
      select: 'fields',
      // order: "fields.name"
    })) as unknown as BlogResponseType;

    return parsePreviewBlogs(entries);
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = async (
  blogId: string
): Promise<BlogModel | undefined> => {
  try {
    const entries = (await client.getEntries({
      content_type: 'portfolioBlog',
      // eslint-disable-next-line
      // @ts-ignore
      select: 'fields',
      // order: "fields.name"
    })) as unknown as BlogResponseType;

    return parseBlog(
      entries.items.find(({ fields: { id } }) => id === blogId)!
    );
  } catch (error) {
    console.log(error);
  }
};
