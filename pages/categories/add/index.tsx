import type { ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
import CustomDynamicForm from "../../../src/components/CustomDynamicForm";
import Link from "next/link";
import useApi from "../../../src/Hooks/useApi";
import { useRouter } from "next/router";
import * as Yup from "yup";
import CustomCircularProgress from "../../../src/components/CustomCircularProgress";

const formArray = [
  {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter Name",
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
  {
    id: "slug",
    name: "slug",
    label: "Slug",
    placeholder: "Enter Slug",
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
  {
    id: "description",
    name: "description",
    label: "Description",
    placeholder: "Enter Description",
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
  name: "",
  slug: "",
  description: "",
};

const CategoriesAdd = () => {
  const { isLoading, isError, response, apiCall, resetValues } = useApi();
  const router = useRouter();
  const onAddcategories = async (values: any) => {
    const res = await apiCall(values, "/api/categories", "POST");
    if (res.status === 200) {
      router.push("/categories/list");
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    slug: Yup.string().required("Slug is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDynamicForm
        title="Create Category"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/categories/list"}>
            <Button variant="outlined">categories List</Button>
          </Link>
        }
        formArray={formArray}
        initialValues={initialValues}
        onSubmit={onAddcategories}
        validationSchema={validationSchema}
        isClear={true}
      />
    </PageContainer>
  );
};

export default CategoriesAdd;
CategoriesAdd.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
