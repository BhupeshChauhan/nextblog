import type { ReactElement } from "react";
import { Typography } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import FullLayout from "../../../src/layouts/full/FullLayout";

const TagsEdit = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>Tags Edit</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default TagsEdit;
TagsEdit.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
