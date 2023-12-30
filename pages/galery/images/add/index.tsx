import type { ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../../src/components/container/PageContainer";
import DashboardCard from "../../../../src/components/shared/DashboardCard";
import FullLayout from "../../../../src/layouts/full/FullLayout";
import Link from "next/link";
import CustomUploadImage from "../../../../src/FormComponent/FormFeilds/CustomUploadImage";

const AddImages = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard
        title="Upload Images"
        action={
          <Link href={"/galery/images/list"}>
            <Button variant="outlined">Images List</Button>
          </Link>
        }
      >
        <>
          <CustomUploadImage />
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddImages;
AddImages.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
