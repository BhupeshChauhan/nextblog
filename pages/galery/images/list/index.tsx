/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from "react";
import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import PageContainer from "../../../../src/components/container/PageContainer";
import DashboardCard from "../../../../src/components/shared/DashboardCard";
import Layout from "../../../../src/layouts";
import Link from "next/link";

const imagesArray = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const ImagesList = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard
        title="Images List"
        action={
          <Link href={"/galery/images/add"}>
            <Button variant="outlined">Upload Images</Button>
          </Link>
        }
      >
        <ImageList
          sx={{ width: "100%", height: "65vh" }}
          cols={3}
          rowHeight={164}
        >
          {imagesArray.map((item: any) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ height: "100%", width: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DashboardCard>
    </PageContainer>
  );
};

export default ImagesList;
ImagesList.getLayout = function getLayout(page: ReactElement) {
  return <Layout type="Full">{page}</Layout>;
};
