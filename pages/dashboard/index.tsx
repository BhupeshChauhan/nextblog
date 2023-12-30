import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import YearlyBreakup from "../../src/components/dashboard/YearlyBreakup";
import MonthlyEarnings from "../../src/components/dashboard/MonthlyEarnings";
import RecentTransactions from "../../src/components/dashboard/RecentTransactions";
import ProductPerformance from "../../src/components/dashboard/ProductPerformance";
import Blog from "../../src/components/dashboard/Blog";
import Layout from "../../src/layouts";


export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
