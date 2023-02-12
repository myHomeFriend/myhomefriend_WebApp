import React, { FC } from "react";

export interface ICategoryBanner {
  image: string;
  imageText: string;
  url:string 
}

const CategoryBannerItem: FC<ICategoryBanner> = (props): JSX.Element => {
  return (
    <div className="categoryItem" data-url={props.url} onClick={()=>window.open(props.url,'_self')}>
      <div className="categoryItemBorder">
        <span className="itemImage">
          <span></span>
          <img src={props.image} className="categoryImage" alt="category"></img>
        </span>
        <div className="itemImageText">
          <h4 className="itemText">{props.imageText}</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryBannerItem;
