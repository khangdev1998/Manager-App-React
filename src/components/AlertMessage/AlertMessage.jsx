import "./AlertMessage.scss";

const AlertMessage = () => {
  return (
    <div className="alert-message">
      <i className="bi bi-info-circle-fill"></i>
      <p>
        Bạn có thể đồng bộ sản phẩm lên Facebook Catalog để gửi sản phẩm đến
        khách hàng. Nhấn vào nút
        <b className="mx-1">Đồng bộ trang Facebook</b>ở trên để bắt đầu.
      </p>
      <a href="#!">Tìm hiểu thêm</a>
    </div>
  );
};

export default AlertMessage;
