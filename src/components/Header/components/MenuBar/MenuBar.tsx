import { Link } from "react-router-dom";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import CategoryIcon from "../../svg/CategoryIcon";
import ChevronRight from "../../svg/ChevronRight"; 
import "./MenuBar.css";

const MenuBar = () => {
  const {
    ref: dropdownRef,
    isComponentVisible: isDropdownOpen,
    setIsComponentVisible: setIsDropdownOpen,
  } = useComponentVisible(false);

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
              <div className="categoryItem">
                <div className="categoryName">
                  <div className="title">Hardware</div>
                  <div className="arrowIcon">
                    <ChevronRight />
                  </div>
                </div>
                <div className="subcategory megamenu">
                  <div className="subCategoryItems">
                    <div className="subCategoryItem">
                      <div className="subCategoryName">
                        <div className="title">Door</div>
                        <div className="arrowIcon">
                          <ChevronRight />
                        </div>
                      </div>
                      <div className="product megamenu">
                        <div className="productItems">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-3">
                                <Link
                                  to="/hardware/door/hinges"
                                  className="productName"
                                >
                                  Hinges
                                </Link>
                              </div>
                              <div className="col-lg-3">
                                <Link
                                  to="/hardware/door/hinges"
                                  className="productName"
                                >
                                  Hinges
                                </Link>
                              </div>
                              <div className="col-lg-3">
                                <Link
                                  to="/hardware/door/hinges"
                                  className="productName"
                                >
                                  Hinges
                                </Link>
                              </div>
                              <div className="col-lg-3">
                                <Link
                                  to="/hardware/door/hinges"
                                  className="productName"
                                >
                                  Hinges
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="menuItems"></div>
      </div>
    </div>
  );
};

export default MenuBar;
