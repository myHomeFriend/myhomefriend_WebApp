import React from "react";
import ChevronRight from "../Header/svg/ChevronRight";
import Product from "../Product/Product";
import "./CategoryWiseProducts.css";

const CategoryWiseProducts = () => {
  return (
    <div className="CategoryWiseProductsContainer">
      <div className="CategoryWiseProductsRow">
        <div className="Category-header">
          <h4>Hardware</h4>
        </div>
        <div className="Category-more">
          <h6>
            More Products <ChevronRight />
          </h6>
        </div>
      </div>
      <div className="CategoryWiseProductsRow">
         <div className="col-lg-2">
           <Product/>
         </div>
         <div className="col-lg-2">hello</div>
         <div className="col-lg-2">hello</div>
         <div className="col-lg-2">hello</div>
         <div className="col-lg-2">hello</div> 
      </div>
      
    </div>
  );
};

export default CategoryWiseProducts;
