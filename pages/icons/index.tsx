import type { ReactElement } from "react";
import PageContainer from "../../src/components/container/PageContainer";
import DashboardCard from "../../src/components/shared/DashboardCard";
import Layout from "../../src/layouts";

const Icons = () => {
  return (
    <PageContainer title="Icons" description="this is Icons">
      <DashboardCard title="Icons">
        <iframe
          src="https://tabler-icons.io/"
          title="Inline Frame Example"
          frameBorder={0}
          width="100%"
          height="650"
        ></iframe>
      </DashboardCard>
    </PageContainer>
  );
};

export default Icons;
Icons.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
