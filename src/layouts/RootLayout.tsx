// React
import { useEffect, Suspense, type FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
// Navbar
import Navbar from "./../components/Navbar/Navbar";
// Loading
import Loading from "../components/Loading";
// Footer
import Footer from "../components/Footer/Footer";
const RootLayout: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />

      <Suspense key={location.pathname} fallback={<Loading />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default RootLayout;
