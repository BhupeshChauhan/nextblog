import { useEffect, type ReactElement } from "react";
import { Button } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Layout from "../../../src/layouts";
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
  {
    name: "featuredImage",
    label: "Featured Image",
    placeholder: "Select Featured Image",
    formInputType: "imageSelector",
    xs: 6,
    sm: 6,
    lg: 6,
    xl: 6,
    fullWidth: true,
  },
  {
    name: "content",
    label: "Post Content",
    formInputType: "textEditor",
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
  },
  {
    name: "categories",
    label: "Categories",
    placeholder: "Enter Categories",
    formInputType: "select",
    xs: 6,
    sm: 6,
    lg: 6,
    xl: 6,
    menuArray: [
      {
        value: "category1",
        label: "Category 1",
      },
      {
        value: "category2",
        label: "Category 2",
      },
    ],
    fullWidth: true,
    multiple: true,
  },
  {
    name: "tags",
    label: "Tags",
    formInputType: "select",
    placeholder: "Enter Tags",
    xs: 6,
    sm: 6,
    lg: 6,
    xl: 6,
    menuArray: [
      {
        value: "tags1",
        label: "Tags 1",
      },
      {
        value: "tags2",
        label: "Tags 2",
      },
    ],
    fullWidth: true,
    multiple: true,
  },
  {
    id: "excerpt",
    name: "excerpt",
    label: "Excerpt",
    placeholder: "Enter Excerpt",
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
    name: "visibility",
    label: "visibility",
    placeholder: "Enter visibility",
    formInputType: "select",
    xs: 6,
    sm: 6,
    lg: 6,
    xl: 6,
    menuArray: [
      {
        value: "public",
        label: "Public",
      },
      {
        value: "private",
        label: "Private",
      },
    ],
    fullWidth: true,
    multiple: false,
  },
  {
    label: "Seo Settings",
    formInputType: "section",
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
  },
  {
    id: "focusKeyword",
    name: "focusKeyword",
    label: "Focus Keyword",
    placeholder: "Enter Focus Keyword",
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
    id: "seoTitle",
    name: "seoTitle",
    label: "SeoTitle",
    placeholder: "Enter Seo Title",
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
    id: "metaDescription",
    name: "metaDescription",
    label: "Meta Description",
    placeholder: "Enter Meta Description",
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
    id: "canonicalUrl",
    name: "canonicalUrl",
    label: "Canonical Url",
    placeholder: "Enter Canonical Url",
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

const PostsAdd = () => {
  const onAddPost = (values: any) => {
    const payload = {
      ...values,
      publishDate: new Date(),
    };
    console.log(payload);
  };
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <CustomDynamicForm
        title="Create Posts"
        // subtitle="All listed Blogs"
        action={
          <Link href={"/posts/list"}>
            <Button variant="outlined">Posts List</Button>
          </Link>
        }
        formArray={formArray}
        initialValues={initialValues}
        onSubmit={onAddPost}
        isClear={true}
      />
    </PageContainer>
  );
};

export default PostsAdd;
PostsAdd.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
