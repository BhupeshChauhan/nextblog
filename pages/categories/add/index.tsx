import type { ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import FullLayout from "../../../src/layouts/full/FullLayout";
import CustomDynamicForm from "../../../src/components/CustomDynamicForm";
import Link from "next/link";

const formArray = [
  {
    label: "Post Details",
    formInputType: "section",
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
  },
  {
    id: "title",
    name: "title",
    label: "Post Title",
    placeholder: "Enter Post Title",
    required: true,
    disabled: false,
    formInputType: "input",
    type: null,
    InputProps: null,
    variant: "outlined",
    autoComplete: null,
    size: "sm",
    margin: "none",
    fullWidth: true,
    multiLine: false,
    maxRows: null,
    rows: null,
    xs: 6,
    sm: 6,
    lg: 6,
    xl: 6,
  },
];
const initialValues = {
  title: "",
  content: "<p>Enter Post Content 👋</p>",
  categories: [],
  tags: [],
};

const CategoriesAdd = () => {
  const onAddCategory = (values: any) => {
    const payload = {
      ...values,
      publishDate: new Date(),
    };
    console.log(payload);
  };
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <CustomDynamicForm
        title="Create Category"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/categories/list"}>
            <Button variant="outlined">Posts List</Button>
          </Link>
        }
        formArray={formArray}
        initialValues={initialValues}
        onSubmit={onAddCategory}
        isClear={true}
      />
    </PageContainer>
  );
};

export default CategoriesAdd;
CategoriesAdd.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
