import Table from "../components/Table/Table";
import AlertMessage from "../components/AlertMessage/AlertMessage";
import ModalEditor from "../components/ModalEditor/ModalEditor";
import { useState } from "react";
import '../components/Tool/Tool.scss';

const ProductPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  return (
    <>
      <div className="tools">
        <div className="d-flex align-items-stretch flex-wrap gap-2">
          <button
            onClick={() => setShow(true)}
            className="tools-add"
            type="button"
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          <ModalEditor show={show} handleClose={handleClose} />
          <button className="tools-button">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="sync"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"></path>
            </svg>
            Tải lại
          </button>
          <button className="tools-button">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="tags"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"></path>
            </svg>
            Danh mục SP
          </button>
          <button className="tools-button">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="to-top"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13z"></path>
            </svg>
            Đồng bộ Facebook
          </button>
          <button className="tools-button">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="file-excel"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"></path>
            </svg>
            Xuất Excel
          </button>
          <button className="tools-button">
            <span
              role="img"
              aria-label="file-add"
              className="anticon anticon-file-add"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="file-add"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"></path>
              </svg>
            </span>
            Nhập Excel
          </button>
          <button className="tools-button">
            Thao tác
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>

        <div className="d-flex align-items-stretch flex-wrap gap-2">
          <button className="tools-button">
            <i className="eye bi bi-eye"></i>
          </button>
          <button className="tools-button">
            Thêm lọc
            <i className="bi bi-chevron-down"></i>
          </button>
          <button className="tools-group">
            <i className="bi bi-floppy"></i>
            <span className="line"></span>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
      <AlertMessage />
      <Table />
    </>
  );
};

export default ProductPage;
