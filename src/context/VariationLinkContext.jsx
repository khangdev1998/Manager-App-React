// src/context/VariationLinkContext.js
import { createContext, useContext } from "react";
import PropTypes from "prop-types";

// Tạo context
const VariationLinkContext = createContext();

// Tạo provider chỉ cung cấp giá trị hiển thị
export const VariationLinkProvider = ({ children, showVariationLink }) => {
  return (
    <VariationLinkContext.Provider value={showVariationLink}>
      {children}
    </VariationLinkContext.Provider>
  );
};

VariationLinkProvider.propTypes = {
  children: PropTypes.node,
  showVariationLink: PropTypes.bool,
};

// Hook để tiêu thụ context
export const useVariationLink = () => useContext(VariationLinkContext);
