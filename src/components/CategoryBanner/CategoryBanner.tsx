import React from "react";
import "./CategoryBanner.css";
import CategoryBannerItem from "./components/CategoryBannerItem";
import hardware from "../../images/hardware.jpg";
import sanitary from "../../images/sanitary.jpg";
import appliances from "../../images/appliances.jpg";
import paint from "../../images/paint.png";
import Fevicol from "../../images/Fevicol.jpg";

export const CategoryBanner = () => {
  return (
    <div className="categoryContainer">
      <div className="categoryRow">
        <CategoryBannerItem
          image={hardware}
          imageText={"Hardware"}
          url={"/hardware"}
        />
        <CategoryBannerItem
          image={sanitary}
          imageText={"Sanitary"}
          url={"/sanitary"}
        />
        <CategoryBannerItem
          image={appliances}
          imageText={"Appliances"}
          url={"/appliances"}
        />
        <CategoryBannerItem
          image={paint}
          imageText={"Paint"}
          url={"/paint"}
        />
        <CategoryBannerItem
          image={Fevicol}
          imageText={"Fevicol"}
          url={"/fevicol"}
        /> 
      </div>
    </div>
  );
};
