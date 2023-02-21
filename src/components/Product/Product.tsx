import React, { FC } from "react";
import { Link } from "react-router-dom";
import PrettyRating, { IconsInterface } from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import "./Product.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { IProduct } from "./types";
import Rupee from "../../svg/Rupee";

interface CustomIconsInterface {
  star: IconsInterface;
}
const icons: CustomIconsInterface = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};
const colors = {
  star: ["#92b73f", "#92b73f", "#92b73f"],
};

const Product: FC<IProduct> = (props) => {
  const {
    productId,
    productCode,
    productImage,
    productMarketPrice,
    productDiscountedPrice,
    productRatingValue,
    productTitle,
    productCategory,
    productSubCategory,
  } = props;
  return (
    <Card key={productId} id={productCode}>
      <Link to={`/${productCategory}/${productSubCategory}/${productCode}`}>
        <Card.Img variant="top" src={productImage} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/${productCategory}/${productSubCategory}/${productCode}`}>
            {productTitle}
          </Link>
        </Card.Title>
        <Row>
          <Col className="product-price">
            <span className="new-price">
              <ins>
                {<Rupee />}
                {productDiscountedPrice}
              </ins>
            </span>
            <span className="old-price">
              <del>
                {<Rupee />}
                {productMarketPrice}
              </del>
            </span>
          </Col>
          <Col>
            <div className="rating-container">
              <PrettyRating
                value={productRatingValue}
                icons={icons.star}
                colors={colors.star}
              />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
