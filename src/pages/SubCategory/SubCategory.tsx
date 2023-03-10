import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const SubCategory = () => {
  const path = useLocation();
  const [breadCrumb, setBreadCrumb] = useState<string>("");

  useEffect(() => {
    setBreadCrumb(path.pathname);
  }, [path]);
  return (
    <>
      <BreadCrumb path={breadCrumb} />
      <div>SubCategory</div>
    </>
  );
};

export default SubCategory;
