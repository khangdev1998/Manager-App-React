import { useState } from "react";
import "./Sidebar.scss";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const [isToggle, setToggle] = useState(true);

  const handleCloseSidebar = () => {
    closeSidebar(false);
  };

  return (
    <div
      className={clsx("sidebar", {
        show: isSidebarOpen,
      })}
    >
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
              <i
                className={clsx("bi bi-chevron-down", {
                  rotate: isToggle,
                })}
              ></i>
            </a>
            <ul
              className={clsx("submenu", {
                active: isToggle,
              })}
            >
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  href="#!"
                >
                  <span>Sản phẩm</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/inventory"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Kiểm hàng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/import"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Nhập hàng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/export"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Xuất hàng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/defective"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Hàng lỗi</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/transfer"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Chuyển kho</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                onClick={handleCloseSidebar}
                  to="/history"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Lịch sử xuất nhập</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="anticon"
        >
          <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
        </svg>
        <span>Bảng điều khiển</span>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  closeSidebar: PropTypes.func,
};

export default Sidebar;
