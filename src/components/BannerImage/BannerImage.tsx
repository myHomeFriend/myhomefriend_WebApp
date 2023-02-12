import React ,{FC} from "react";
import { Link } from "react-router-dom";
import { IBanner } from "./types";
import './BannerImage.css'

const BannerImage:FC<IBanner> = (props): JSX.Element => {
  return (
    <>
      <img src={props.imageSrc} className="image" alt={"Catergory"} />
      <div className="imageTextDiv">
        <p>{props.imageTextHeading}</p>
        <h4>{props.imageTextParagraph}</h4>
        <Link to={props.imageShop}>Shop Now</Link>
      </div>
    </>
  );
};

export default BannerImage;
