import "./AlertMobile.scss";

const AlertMobile = () => {
  return (
    <div
      className="message-mobile d-xl-none d-flex align-items-center justify-content-center alert alert-danger text-center m-3"
      role="alert"
    >
      Trang web hiện tại các thiết bị di động không được hỗ trợ. Đang trong quá trình làm chưa xong vui lòng quay lại sau.
      <i className="bi bi-exclamation-triangle-fill text-danger fs-6 ms-2"></i>
    </div>
  );
};

export default AlertMobile;
