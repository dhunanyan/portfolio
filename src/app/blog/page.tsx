import { PreviewBlogs } from '@components';

import { getPreviewBlogs } from '@utils';

export default async function Page() {
  const previewBlogs = (await getPreviewBlogs())!;

  return <PreviewBlogs data={previewBlogs} />;
}
