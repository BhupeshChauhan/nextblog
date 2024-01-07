import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import Layout from "../../../src/layouts";

const UsersEdit = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>Users Edit</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default UsersEdit;
UsersEdit.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
