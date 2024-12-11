import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import AlertMobile from "../components/AlertMobile/AlertMobile";

const MainLayout = ({ children }) => {
  return (
    <div id="wrapper" className="d-flex justify-content-center">
      <AlertMobile />
      <Sidebar />
      <div className="d-flex flex-column w-100 px-3">
        <Header />
        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
