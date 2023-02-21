import { FC } from "react";
import CategoryBannerItem from "./components/CategoryBannerItem";
import { ICategoryBanner } from "./types";
import "./CategoryBanner.css";

export const CategoryBanner: FC<ICategoryBanner> = (props) => { 
  const { categories } = props;
  return (
    <div className="categoryContainer">
      <div className="categoryRow">
        {categories &&
          categories.map((category, index) => {
            return <CategoryBannerItem key={index} {...category} />;
          })}
      </div>
    </div>
  );
};
