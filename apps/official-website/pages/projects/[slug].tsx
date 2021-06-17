import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib/.';
import Head from 'next/head';
import PostType from '../../types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Project = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(post);

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore
      consectetur ea voluptatibus, maxime sapiente ad, ipsam totam saepe libero
      eaque illum fugiat est, vero veniam sunt ullam odio nam?
    </p>
  );
};

export default Project;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
