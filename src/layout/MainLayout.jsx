import ButtonSidebar from "../components/ButtonSidebar/ButtonSidebar";
import Header from "../components/Header/Header";
import Overlay from "../components/Overlay/Overlay";
import Sidebar from "../components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MainLayout = ({ children, namePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isSidebarOpen]);

  return (
    <div id="wrapper" className="d-flex justify-content-center">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <ButtonSidebar handleOnClick={toggleSidebar} />
      <Overlay onClick={toggleSidebar} isVisible={isSidebarOpen} />
      <div className="d-flex flex-column w-100 px-3">
        <Header namePage={namePage} />
        <main className="main pb-3">{children}</main>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  namePage: PropTypes.string,
};

export default MainLayout;
