import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const ProductType = () => {
  const path = useLocation();
  const [breadCrumb, setBreadCrumb] = useState<string>("");

  useEffect(() => {
    setBreadCrumb(path.pathname);
  }, [path]);

  return (
    <>
      <BreadCrumb path={breadCrumb} />
      <div>ProductType</div>
    </>
  );
};

export default ProductType;
