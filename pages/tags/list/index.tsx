import { useEffect, type ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
import CustomDataGrid from "../../../src/components/CustomDataGrid";
import Link from "next/link";
import { GridColDef } from "@mui/x-data-grid";
import useApi from "../../../src/Hooks/useApi";
import CustomCircularProgress from "../../../src/components/CustomCircularProgress";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Category Name",
    flex: 1,
  },
  {
    field: "slug",
    headerName: "Category Slug",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: "Technology",
    slug: "technology",
    description: "Articles related to technology and gadgets.",
    parentCategoryId: null, // No parent category
    createdAt: new Date("2023-01-01T08:00:00Z"),
    updatedAt: new Date("2023-01-01T08:00:00Z"),
  },
];

const TagsList = () => {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();

  const fetchAllTags = async () => {
    await apiCall([], "/api/tags/fetchAllTags", "POST");
  };

  useEffect(() => {
    fetchAllTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDataGrid
        title="Tags List"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/tags/add"}>
            <Button variant="outlined">Create Tag</Button>
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

export default TagsList;
TagsList.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
