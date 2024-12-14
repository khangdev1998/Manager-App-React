import "./ListTab.scss";
import { useState } from "react";
import clsx from "clsx";

const ListTab = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="list-tab">
      <button
        className={clsx({ active: activeTab === "Tất cả" })}
        onClick={() => handleTabClick("Tất cả")}
      >
        Tất cả
        <span className="count">0</span>
      </button>
      <button
        className={clsx({ active: activeTab === "Đang tạo phiếu" })}
        onClick={() => handleTabClick("Đang tạo phiếu")}
      >
        Đang tạo phiếu
        <span className="count">0</span>
      </button>
      <button
        className={clsx({ active: activeTab === "Đang kiểm hàng" })}
        onClick={() => handleTabClick("Đang kiểm hàng")}
      >
        Đang kiểm hàng
        <span className="count">0</span>
      </button>
      <button
        className={clsx({ active: activeTab === "Đã kiểm hàng" })}
        onClick={() => handleTabClick("Đã kiểm hàng")}
      >
        Đã kiểm hàng
        <span className="count">0</span>
      </button>
      <button
        className={clsx({ active: activeTab === "Đã huỷ" })}
        onClick={() => handleTabClick("Đã huỷ")}
      >
        Đã huỷ
        <span className="count">0</span>
      </button>
    </div>
  );
};

export default ListTab;
