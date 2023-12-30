import React from "react";
import AuthProvider from "../utils/AuthProvider";
import BlankLayout from "./blank/BlankLayout";
import FullLayout from "./full/FullLayout";
import MinimalLayout from "./minimal/MinimalLayout";

interface Props {
  children: React.ReactNode;
  type: string;
}

const Layout: React.FC<Props> = ({ children, type }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <AuthProvider>
      {type === "Full" && <FullLayout>{children}</FullLayout>}
      {type === "Blank" && <BlankLayout>{children}</BlankLayout>}
      {type === "Minimal" && <MinimalLayout>{children}</MinimalLayout>}
    </AuthProvider>
  );
};

export default Layout;
