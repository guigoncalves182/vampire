import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      Start
      <hr />
      <Outlet />
      <hr />
      End
    </>
  );
}

export default Layout;
