import { useEffect, type ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
import CustomDataGrid from "../../../src/components/CustomDataGrid";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Link from "next/link";
import useApi from "../../../src/Hooks/useApi";
import CustomCircularProgress from "../../../src/components/CustomCircularProgress";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "featuredImage",
    headerName: "Featured Image",
    flex: 1,
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    renderCell: (params) => <img src={params.value} width={100} height={60} />,
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
    field: "createdAt",
    headerName: "Created Date",
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

const PostsList = () => {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();

  const fetchAllPosts = async () => {
    await apiCall([], "/api/posts/fetchAllPosts", "POST");
  };

  useEffect(() => {
    fetchAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(response.data);
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDataGrid
        title="Posts List"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/posts/add"}>
            <Button variant="outlined">Create Post</Button>
          </Link>
        }
        columns={columns}
        rows={response?.data ? response?.data : []}
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
  return <Layout type="Full">{page}</Layout>;
};
