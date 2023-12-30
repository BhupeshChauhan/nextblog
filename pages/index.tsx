import type { ReactElement } from "react";
import { Box } from "@mui/material";
import PageContainer from "../src/components/container/PageContainer";

// components
import Layout from "../src/layouts";

export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        Landing Page
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Minimal">{page}</Layout>;
};
