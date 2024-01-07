/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, type ReactElement, useState } from "react";
import { Container } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
import Link from "next/link";
import useApi from "../../../src/Hooks/useApi";
import { useRouter } from "next/router";
import CategoryLabel from "../../../src/UIComponents/Blog/category";
import { parseISO, format } from "date-fns";

const PostSinglePage = () => {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();
  const router = useRouter();
  const route = router.asPath;
  const currentRoute = route.split("/")[2];

  const fetchAllPosts = async () => {
    // .replace("-", " ")
    console.log(currentRoute.replaceAll("%20", " "));

    await apiCall(
      { title: currentRoute.replaceAll("%20", " ") },
      "/api/posts/fetchPostByTitle",
      "POST",
    );
  };

  useEffect(() => {
    fetchAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute]);

  const post: any = response?.data ? response.data : [];

  return (
    <PageContainer
      title="Sample Page"
      description="this is Sample page"
      key={post}
    >
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {/* {post?.author && (
                  <Link href={`/author/${post.author.slug.current}`}>
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                )} */}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/author/${post?.author?.slug?.current}`}>
                    {post?.author?.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post.createdAt}
                  >
                    {post?.publishedAt ||
                      (post.createdAt &&
                        format(
                          parseISO(post?.publishedAt || post.createdAt),
                          "MMMM dd, yyyy",
                        ))}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {post?.featuredImage && (
          <img
            src={post?.featuredImage}
            sizes="(max-width: 768px) 30vw, 33vw"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.content && (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          {/* {post.author && <AuthorCard author={post.author} />} */}
        </article>
      </Container>
    </PageContainer>
  );
};

export default PostSinglePage;
PostSinglePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Minimal">{page}</Layout>;
};
