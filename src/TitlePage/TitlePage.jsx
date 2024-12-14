import PropTypes from "prop-types";

const TitlePage = ({ namePage }) => {
  return <h4 className="fs-5 fw-bold">{namePage}</h4>;
};
TitlePage.propTypes = {
  namePage: PropTypes.string.isRequired,
};
export default TitlePage;
