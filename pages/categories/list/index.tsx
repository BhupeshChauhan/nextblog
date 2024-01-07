import { useEffect, type ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "../../../src/components/CustomDataGrid";
import Link from "next/link";
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

const CategoriesList = () => {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();

  const fetchAllCategories = async () => {
    await apiCall([], "/api/categories/fetchAllCategories", "POST");
  };

  useEffect(() => {
    fetchAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDataGrid
        title="Category List"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/categories/add"}>
            <Button variant="outlined">Create Category</Button>
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

export default CategoriesList;
CategoriesList.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
