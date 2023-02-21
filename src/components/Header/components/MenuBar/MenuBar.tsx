/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hostUrl, menuBarPath } from "../../../../constants/common";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import CategoryIcon from "../../../../svg/CategoryIcon";
import ChevronRight from "../../../../svg/ChevronRight";
import { IMenuBar } from "../../types";
import "./MenuBar.css";

const MenuBar: FC = () => {
  const {
    ref: dropdownRef,
    isComponentVisible: isDropdownOpen,
    setIsComponentVisible: setIsDropdownOpen,
  } = useComponentVisible(false);

  const [menuBarData, setMenuBarData] = useState<IMenuBar>();
  const url = hostUrl + menuBarPath;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setMenuBarData(JSON.parse(data)));
  };

  return (
    <div className="menuBar">
      <div className="menuBarDiv">
        <div className="categoryDropdown">
          <button
            className="categoryButton"
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="categoryIconDiv">
              <CategoryIcon />
            </div>
            <div className="CategoryText">Categories</div>
            <div
              className={`${
                isDropdownOpen
                  ? "dropdownicon_arrowDown"
                  : "dropdownicon_arrowUp"
              }`}
            >
              <ChevronRight />
            </div>
          </button>

          {isDropdownOpen && (
            <div className="menuDropdown">
              {menuBarData &&
                menuBarData.categories.map((category, index) => {
                  return (
                    <div className="categoryItem" key={index}>
                      <div className={`categoryName`}>
                        {category.subCategories &&
                        category.subCategories[0].subCategoryName?.length >
                          0 ? (
                          <>
                            <div className="title">{category.categoryName}</div>
                            <div className="arrowIcon">
                              <ChevronRight />
                            </div>
                          </>
                        ) : (
                          <>
                            <Link
                              to={category.categoryCode + "/c"}
                              className="title noMenu"
                            >
                              {category.categoryName}
                            </Link>
                          </>
                        )}
                      </div>

                      <div className="subcategory megamenu">
                        <div className="subCategoryItems">
                          {category.subCategories &&
                            category.subCategories[0].subCategoryName?.length >
                              0 &&
                            category.subCategories.map((subCategory, index) => {
                              return (
                                <div className="subCategoryItem" key={index}>
                                  <div className="subCategoryName">
                                    {subCategory.productsType &&
                                    subCategory.productsType[0].productTypeName
                                      ?.length > 0 ? (
                                      <>
                                        <div className="title">
                                          {subCategory.subCategoryName}
                                        </div>
                                        <div className="arrowIcon">
                                          <ChevronRight />
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <Link
                                          to={
                                            category.categoryCode +
                                            "/" +
                                            subCategory.subCategoryCode +
                                            "/s"
                                          }
                                          className="title noMenu"
                                        >
                                          {subCategory.subCategoryName}
                                        </Link>
                                      </>
                                    )}
                                  </div>

                                  {subCategory.productsType &&
                                  subCategory?.productsType[0].productTypeName
                                    ?.length > 0 ? (
                                    <div className="product megamenu">
                                      <div className="productItems">
                                        <div className="container">
                                          <div className="row">
                                            {subCategory.productsType &&
                                              subCategory?.productsType[0]
                                                .productTypeName?.length > 0 &&
                                              subCategory.productsType.map(
                                                (product, index) => {
                                                  return (
                                                    <div
                                                      className="col-lg-3"
                                                      key={index}
                                                    >
                                                      <Link
                                                        to={
                                                          category.categoryCode +
                                                          "/" +
                                                          subCategory.subCategoryCode +
                                                          "/" +
                                                          product.productTypeCode +
                                                          "/pt"
                                                        }
                                                        className="productName"
                                                      >
                                                        {
                                                          product.productTypeName
                                                        }
                                                      </Link>
                                                    </div>
                                                  );
                                                }
                                              )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            //   <div className="menuDropdown">
            //   <div className="categoryItem">
            //     <div className="categoryName">
            //       <div className="title">Hardware</div>
            //       <div className="arrowIcon">
            //         <ChevronRight />
            //       </div>
            //     </div>
            //     <div className="subcategory megamenu">
            //       <div className="subCategoryItems">
            //         <div className="subCategoryItem">
            //           <div className="subCategoryName">
            //             <div className="title">Door</div>
            //             <div className="arrowIcon">
            //               <ChevronRight />
            //             </div>
            //           </div>
            //           <div className="product megamenu">
            //             <div className="productItems">
            //               <div className="container">
            //                 <div className="row">
            //                   <div className="col-lg-3">
            //                     <Link
            //                       to="/hardware/door/hinges"
            //                       className="productName"
            //                     >
            //                       Hinges
            //                     </Link>
            //                   </div>
            //                   <div className="col-lg-3">
            //                     <Link
            //                       to="/hardware/door/hinges"
            //                       className="productName"
            //                     >
            //                       Hinges
            //                     </Link>
            //                   </div>
            //                   <div className="col-lg-3">
            //                     <Link
            //                       to="/hardware/door/hinges"
            //                       className="productName"
            //                     >
            //                       Hinges
            //                     </Link>
            //                   </div>
            //                   <div className="col-lg-3">
            //                     <Link
            //                       to="/hardware/door/hinges"
            //                       className="productName"
            //                     >
            //                       Hinges
            //                     </Link>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
