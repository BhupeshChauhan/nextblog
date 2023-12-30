import React, { useState } from "react";
import { styled, Container, Box } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

const MinimalLayout = ({ children }: any) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log("here");
  return (
    <MainWrapper className="mainwrapper">
      <>
        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onSidebarClose={() => setSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Main Wrapper */}
        {/* ------------------------------------------- */}
        <PageWrapper className="page-wrapper">
          {/* ------------------------------------------- */}
          {/* Header */}
          {/* ------------------------------------------- */}
          <Header toggleMobileSidebar={() => setSidebarOpen(true)} />
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}
          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Page Route */}
            {/* ------------------------------------------- */}
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
            {/* ------------------------------------------- */}
            {/* End Page */}
            {/* ------------------------------------------- */}
          </Container>
        </PageWrapper>
      </>
    </MainWrapper>
  );
};

export default MinimalLayout;
