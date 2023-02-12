import React from "react";
import { Link } from "react-router-dom";
import PrettyRating, { IconsInterface } from "pretty-rating-react";
import { 
    faStar,
    faStarHalfAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import { 
    faStar as farStar,
  } from "@fortawesome/free-solid-svg-icons";
  
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hetticChannel from "../../images/hettichChannel.jpg";
import "./Product.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

interface CustomIconsInterface {
    star: IconsInterface; 
  }
  
  const icons: CustomIconsInterface = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    } 
  };
  const colors = {
   star: ['#92b73f', '#92b73f', '#92b73f'] 
  };

const Product = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to="hardware/door/channel">
        <Card.Img variant="top" src={hetticChannel} />
      </Link>
      <Card.Body>
        <Card.Title>Channel 12*18</Card.Title>
        <Card.Text>
          <Row>
            <Col>
            Rs.200
            </Col>
            <Col>
            <PrettyRating value={5} icons={icons.star} colors={colors.star} />
            </Col>
          </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
