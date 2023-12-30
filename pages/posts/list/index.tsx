import type { ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import FullLayout from "../../../src/layouts/full/FullLayout";
import CustomDataGrid from "../../../src/components/CustomDataGrid";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Link from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "featuredImage",
    headerName: "Featured Image",
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
  },
  {
    field: "categories",
    headerName: "Categories",
    flex: 1,
  },
  {
    field: "tags",
    headerName: "Tags",
    flex: 1,
  },
  {
    field: "excerpt",
    headerName: "Excerpt",
    flex: 1,
  },
  {
    field: "publishDate",
    headerName: "Publish Date",
    flex: 1,
  },
  {
    field: "visibility",
    headerName: "visibility",
    flex: 1,
  },
  {
    field: "postStatus",
    headerName: "postStatus",
    flex: 1,
  },
  // {
  //   field: "postStatus",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    title: "Sample Post Title",
    content: "Lorem ipsum dolor sit amet...",
    featuredImage: "path/to/featured-image.jpg",
    categories: ["Category1", "Category2"],
    tags: ["Tag1", "Tag2"],
    excerpt: "Short description of the post.",
    publishDate: new Date("2023-01-01T12:00:00Z"),
    visibility: "public",
    postStatus: "published",
    author: {
      name: "John Doe",
      bio: "Author bio goes here.",
      avatar: "path/to/avatar.jpg",
    },
    seoSettings: {
      focusKeyword: "example keyword",
      seoTitle: "Custom SEO Title",
      metaDescription: "Meta description for SEO",
      canonicalUrl: "canonical-url",
      openGraphTags: {
        /* Open Graph tags */
      },
      twitterCards: {
        /* Twitter Cards settings */
      },
    },
    seoAnalytics: {
      searchEngineVisibility: true,
      keywordRanking: 5,
      backlinks: ["link1", "link2"],
      organicTraffic: 1000,
      clickThroughRate: 0.1,
    },
    comments: [
      {
        commentId: 1,
        author: {
          name: "Alice",
          avatar: "path/to/alice-avatar.jpg",
        },
        content: "Great post!",
        timestamp: new Date("2023-01-02T14:30:00Z"),
      },
      // Additional comments can be added here
    ],
  },
];

const PostsList = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <CustomDataGrid
        title="Posts List"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/posts/add"}>
            <Button variant="outlined">Create Post</Button>
          </Link>
        }
        columns={columns}
        rows={rows}
        pageSize={10}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
      />
    </PageContainer>
  );
};

export default PostsList;
PostsList.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
