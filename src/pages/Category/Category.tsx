import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import paint from "../../images/paint.png";
import ChevronRight from "../../svg/ChevronRight";
import "./Category.scss";

const Category = () => {
  const path = useLocation();
  const [breadCrumb, setBreadCrumb] = useState<string>("");
  const [showDiv, setShowDiv] = useState<boolean>(false);
  useEffect(() => {
    setBreadCrumb(path.pathname);
  }, [path]);

  return (
    <>
      <BreadCrumb path={breadCrumb} />
      <section className="categorySection">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 p-3">
            <div className="subCategories" onClick={() => setShowDiv(!showDiv)}>
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-3">
                  <div className="subCategoryImage">
                    <img src={paint} alt={"Mobile"} />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-9">
                  <div className="subCategoryText">
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
              <div className={`subCategoriesMenu ${showDiv ? "active" : ""}`}>
                <div className="row">
                  <div className="col-lg-12 subCategoriesMenuItem">
                    <div className="item">
                      <Link to={"/product"}>Keypad Phone</Link>
                      <ChevronRight />
                    </div>
                  </div>
                  <div className="col-lg-12 subCategoriesMenuItem">
                    <div className="item">
                      <Link to={"/product"}>Keypad Phone</Link>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 p-3">
            <div className="subCategories" onClick={() => setShowDiv(!showDiv)}>
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-3">
                  <div className="subCategoryImage">
                    <img src={paint} alt={"Mobile"} />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-9">
                  <div className="subCategoryText">
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
              <div className={`subCategoriesMenu ${showDiv ? "active" : ""}`}>
                <div className="row">
                  <div className="col-lg-12 subCategoriesMenuItem">
                    <div className="item">
                      <Link to={"/product"}>Keypad Phone</Link>
                      <ChevronRight />
                    </div>
                  </div>
                  <div className="col-lg-12 subCategoriesMenuItem">
                    <div className="item">
                      <Link to={"/product"}>Keypad Phone</Link>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
