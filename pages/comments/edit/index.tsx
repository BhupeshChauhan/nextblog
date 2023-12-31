import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import Layout from "../../../src/layouts";

const CommentsEdit = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>Comments Edit</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default CommentsEdit;
CommentsEdit.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
