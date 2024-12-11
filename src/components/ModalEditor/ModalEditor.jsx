import "./ModalEditor.scss";

const ModalEditor = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Thêm sản phẩm mới
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="productForm">
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
          </div>
          <div className="modal-footer gap-2">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fas fa-times-circle me-1"></i>
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-save me-1"></i>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditor;
