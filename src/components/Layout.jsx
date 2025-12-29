import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "calc(100vh - 140px)",
          background: "#fafafa",
        }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
}

export default Layout;