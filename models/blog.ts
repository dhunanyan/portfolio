import { Document } from '@contentful/rich-text-types';

export type BlogModel = {
  id: string;
  image: string;
  title: string;
  lastUpdated: string;
  content: Document;
};

export type BlogPreviewModel = {
  id: string;
  image: string;
  title: string;
};
