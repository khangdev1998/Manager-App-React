import { useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isToggle, setToggle] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span>M</span>
        <h4>Manager</h4>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <a
              className="sidebar-menu__item active"
              href="#!"
              data-toggle="submenu"
              onClick={(e) => {
                e.preventDefault();
                setToggle(!isToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="anticon ant-menu-item-icon"
              >
                <path d="M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112ZM184,208H72V48h16.8a40,40,0,0,0,78.38,0H184Zm36.75-96.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"></path>
              </svg>
              <span>Sản phẩm</span>
              {isToggle ? (
                <i className="bi bi-chevron-up"></i>
              ) : (
                <i className="bi bi-chevron-down"></i>
              )}
            </a>
            {isToggle && (
              <ul className="submenu">
                <li>
                  <a className="active" href="#!">
                    <span>Sản phẩm</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Kiểm hàng</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Nhập hàng</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Xuất hàng</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Hàng lỗi</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Chuyển kho</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span>Lịch sử xuất nhập</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="anticon"
          >
            <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
          </svg>
          <span>Bảng điều khiển</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
