import React, { useEffect, useState } from "react";
import AuthProvider from "../utils/AuthProvider";
import BlankLayout from "./blank/BlankLayout";
import FullLayout from "./full/FullLayout";
import MinimalLayout from "./minimal/MinimalLayout";
import { useRouter } from "next/router";
import { LinearProgress } from "@mui/material";
import { GlobalContextProvider } from "../Context/GlobalContext";
import SnackBarComponent from "../UIComponents/SnackBarComponent";

interface Props {
  children: React.ReactNode;
  type: string;
}

const LoadingSpinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        zIndex: 2000,
      }}
    >
      <LinearProgress />
    </div>
  );
};

const Layout: React.FC<Props> = ({ children, type }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <AuthProvider>
      <GlobalContextProvider>
        {type === "Full" && (
          <>
            {loading && <LoadingSpinner />}
            <FullLayout>{children}</FullLayout>
          </>
        )}
        {type === "Blank" && (
          <>
            {loading && <LoadingSpinner />}
            <BlankLayout>{children}</BlankLayout>
          </>
        )}
        {type === "Minimal" && (
          <>
            {loading && <LoadingSpinner />}
            <MinimalLayout>{children}</MinimalLayout>
          </>
        )}
        <SnackBarComponent />
      </GlobalContextProvider>
    </AuthProvider>
  );
};

export default Layout;
