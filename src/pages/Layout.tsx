import type { ReactNode } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gradient-to-tr from-indigo-950 via-purple-900 to-blue-950 min-h-screen text-white">
      <NavBar />
      <div>{children ?? <Outlet />}</div>
    </div>
  );
};

export default Layout;
