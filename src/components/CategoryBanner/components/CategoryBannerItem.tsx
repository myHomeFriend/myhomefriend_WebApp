import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../CategoryWiseProducts/types";

const CategoryBannerItem: FC<ICategory> = (props): JSX.Element => {
  const {
    categoryId,
    categoryCode,
    categoryType,
    categoryLink,
    categoryImage,
  } = props;
  return (
    <div
      id={categoryCode}
      key={categoryId}
      className="categoryItem"
      data-url={categoryLink + "/c"}
    >
      <Link to={categoryLink + "/c"}>
      <div className="categoryItemBorder">
        <span className="itemImage">
          <span></span>
          <img
            src={categoryImage}
            className="categoryImage"
            alt="category"
          ></img>
        </span>
        <div className="itemImageText">
          <h4 className="itemText">{categoryType}</h4>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoryBannerItem;
