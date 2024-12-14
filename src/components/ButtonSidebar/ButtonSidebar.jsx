import sidebarIcon from "../../assets/sidebar-icon.svg";
import PropTypes from "prop-types";

const ButtonSidebar = ({ handleOnClick }) => {
  return (
    <button
      className="d-lg-none d-inline-block position-fixed"
      style={{ width: "45px", bottom: "0.8rem", left: "0.8rem" }}
      type="button"
      onClick={handleOnClick}
    >
      <img className="w-100 h-100" src={sidebarIcon} alt="this-icon" />
    </button>
  );
};

ButtonSidebar.propTypes = {
  handleOnClick: PropTypes.func,
};

export default ButtonSidebar;