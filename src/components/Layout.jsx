import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "calc(100vh - 140px)",
          background: "#fafafa",
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;