import PostPage from "./default";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  const ogImage = post?.mainImage
    ? urlForImage(post.mainImage)?.src
    : "/img/og-default.jpg";

  return {
    title: post.title,
    description: post.excerpt || post.title,
    authors: [{ name: post.author?.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.publishedAt || post._createdAt,
      authors: [post.author?.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [ogImage]
    },
    alternates: {
      canonical: `https://beauiticulturehub.com/post/${params.slug}`
    }
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

export const revalidate = 3600;
