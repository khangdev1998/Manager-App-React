import "./Header.scss";
import VariationLink from "../VariationLink/VariationLink";
import { useVariationLink } from "../../context";
import TitlePage from "../../TitlePage/TitlePage";

const Header = () => {
  const showVariationLink = useVariationLink();
  return (
    <div className="header">
      {showVariationLink && <VariationLink />}
      {!showVariationLink && <TitlePage namePage={"Kiểm hàng"} />}
      <div className="search">
        <div className="search-dropdown">
          Tất cả
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="search-field">
          <input
            type="text"
            placeholder="Mã / Tên sản phẩm / Barcode / Keyword"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="control">
        <button className="control-filter">
          Tất cả các kho
          <i className="bi bi-chevron-down"></i>
        </button>
        <div className="control-main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="header-icon"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
          <span className="avatar">D</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
