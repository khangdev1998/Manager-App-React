import "./Overlay.scss";
import PropTypes from "prop-types";

const Overlay = ({ isVisible, onClick }) => {
  return isVisible ? (
    <div className="overlay" onClick={onClick}>
      <div className="close-btn">Close</div>
    </div>
  ) : null;
};

Overlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Overlay;