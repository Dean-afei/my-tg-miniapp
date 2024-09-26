import Header from "@/components/header";
import ScrollToTop from "@/components/scrollToTop";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <ScrollToTop>
        <Header />
        <Outlet />
      </ScrollToTop>
    </>
  );
}

export default Root;
