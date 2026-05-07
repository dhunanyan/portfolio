export const parseMedia = ({
  fields: {
    file: { url },
  },
}: {
  fields: {
    file: { url: string };
  };
}) => `https:${url}`;
