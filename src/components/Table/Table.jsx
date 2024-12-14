import "./Table.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Table = ({ useRounded = true }) => {
  return (
    <div className="overflow-y-auto">
      <table
        className={clsx("table table-hover overflow-hidden", {
          "rounded-4": useRounded,
        })}
        style={{ minWidth: "800px" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Giá</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          <tr>
            <th>1</th>
            <td>IP14PM</td>
            <td>iPhone 14 Pro Max</td>
            <td>Smartphone</td>
            <td>₫27,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>IP14P</td>
            <td>iPhone 14 Pro</td>
            <td>Smartphone</td>
            <td>₫25,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>MBA15</td>
            <td>MacBook Air 15</td>
            <td>Laptop</td>
            <td>₫32,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>MBP14</td>
            <td>MacBook Pro 14</td>
            <td>Laptop</td>
            <td>₫45,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>IPDP</td>
            <td>iPad Pro 12.9</td>
            <td>Tablet</td>
            <td>₫23,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>AWS8</td>
            <td>Apple Watch Series 8</td>
            <td>Wearable</td>
            <td>₫10,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>7</th>
            <td>APP2</td>
            <td>AirPods Pro 2</td>
            <td>Audio</td>
            <td>₫6,790,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
          <tr>
            <th>8</th>
            <td>APM</td>
            <td>AirPods Max</td>
            <td>Audio</td>
            <td>₫12,990,000</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Sửa</button>
              <button className="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  useRounded: PropTypes.bool,
};

export default Table;
