import { useEffect, type ReactElement } from "react";
import { Container } from "@mui/material";
import PageContainer from "../src/components/container/PageContainer";

// components
import Layout from "../src/layouts";
import Link from "next/link";
import PostList from "../src/UIComponents/PostList";
import useApi from "../src/Hooks/useApi";

export default function Home() {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();

  const fetchAllPosts = async () => {
    await apiCall([], "/api/posts/fetchAllPosts", "POST");
  };

  useEffect(() => {
    fetchAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const posts: any = response?.data ? response.data : [];
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map((post: any) => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map((post: any) => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Minimal">{page}</Layout>;
};
