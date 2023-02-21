import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "./types";
import ChevronRight from "../../svg/ChevronRight";
import Product from "../Product/Product";
import "./CategoryWiseProducts.css";

const CategoryWiseProducts: FC<ICategory> = (props) => {
  const {
    categoryId,
    categoryCode,
    categoryType,
    categoryLink,
    categoryProducts,
  } = props;
  return (
    <div
      className="CategoryWiseProductsContainer"
      key={categoryId}
      id={categoryCode}
    >
      <div className="CategoryWiseProductsRow">
        <div className="Category-header">
          <h4>{categoryType}</h4>
        </div>
        <div className="Category-more">
          <h6>
            <Link to={categoryLink}>
              More Products <ChevronRight />
            </Link>
          </h6>
        </div>
      </div>
      <div className="row">
        {categoryProducts.map((product) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={product.productId}>
              <Product  {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
