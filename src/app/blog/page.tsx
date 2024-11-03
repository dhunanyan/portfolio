import { PreviewBlogs } from '@components';

import { getPreviewBlogs } from '@utils';

export default async function Page() {
  return <PreviewBlogs data={(await getPreviewBlogs())!} />;
}
