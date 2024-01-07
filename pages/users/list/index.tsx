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
    headerName: "User's Name",
    flex: 1,
  },
  {
    field: "email",
    headerName: "User's Email",
    flex: 1,
  },
  {
    field: "role",
    headerName: "User's Role",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
  },
];

const UsersList = () => {
  const { isLoading, isError, response, apiCall, resetValues }: any = useApi();

  const fetchAllUsers = async () => {
    await apiCall([], "/api/user/fetchAllUser", "POST");
  };

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDataGrid
        title="Users List"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/users/add"}>
            <Button variant="outlined">Create User</Button>
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

export default UsersList;
UsersList.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
