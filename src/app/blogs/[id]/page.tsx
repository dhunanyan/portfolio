import { Blog } from '@components';
import { getBlog } from '@utils';

type PagePropsType = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PagePropsType) {
  const { id } = await params;
  const blog = (await getBlog(id))!;

  return <Blog data={blog} />;
}
