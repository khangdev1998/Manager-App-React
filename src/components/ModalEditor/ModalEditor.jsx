import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const ModalEditor = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fs-5">Thiết lập sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="productCode" className="form-label">
              Mã sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="productCode"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Danh mục
            </label>
            <input
              type="text"
              className="form-control"
              id="productCategory"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Giá
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="gap-1">
        <Button
          className="btn btn-secondary px-3"
          variant="secondary"
          onClick={handleClose}
        >
          <i className="fas fa-times-circle"></i>
          Đóng
        </Button>
        <Button
          className="btn btn-primary px-3"
          variant="primary"
          onClick={handleClose}
          type="submit"
        >
          <i className="fas fa-save me-1"></i>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalEditor.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalEditor;
