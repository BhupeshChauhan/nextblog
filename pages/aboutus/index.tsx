/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, type ReactElement, useState } from "react";
import PageContainer from "../../src/components/container/PageContainer";
import Layout from "../../src/layouts";

const AboutUs = () => {

  return (
    <PageContainer
      title="Sample Page"
      description="this is Sample page"
    >
      <></>
    </PageContainer>
  );
};

export default AboutUs;
AboutUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Minimal">{page}</Layout>;
};
