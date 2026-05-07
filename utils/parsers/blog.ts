import { parseMedia } from './parseMedia';

import { BlogResponseType } from '@config';
import { BlogModel, BlogPreviewModel } from '@models';

export const parsePreviewBlogs = ({
  items,
}: BlogResponseType): BlogPreviewModel[] =>
  items.map(({ fields: { id, image, title } }) => ({
    id,
    image: parseMedia(image),
    title,
  }));

export const parseBlog = ({
  fields: { id, image, title, lastUpdated, content },
}: BlogResponseType['items'][0]): BlogModel => ({
  id,
  image: parseMedia(image),
  title,
  lastUpdated,
  content,
});
