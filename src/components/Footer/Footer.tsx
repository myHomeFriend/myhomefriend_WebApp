import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants/header";
import Logo from "../../svg/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-container">
          <div className="row footer-row">
            <div className="col-lg-4">
              <div className="row">
                <Link className="logo" to={"/"}>
                  <Logo></Logo>
                </Link>
                <p className="company-description">
                  HomeSolutionsKart is an e-commerce business that provides a
                  wide range of products and solutions for households.
                  Our mission is to provide the best shopping experience to
                  their customers by offering a vast selection of products, fast
                  and reliable shipping, and exceptional customer services.
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <h4 className="heading-4">About Us</h4>
              <div className="row">
                <div className="col-lg-12">
                  <Link className="description-links" to="termsandconditions">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="heading-4">Customer Care</h4>
              <div className="row">
                <div className="col-lg-12">
                  <Link className="description-links" to="howtobuy">
                    How to buy?
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="heading-4">Contact Us</h4>
              <div className="row">
                <div className="col-lg-12">
                  <div className="companyname companydetails">
                    Home Solutions Kart India Private Limited
                  </div>
                  <div className="address companydetails">
                    Hudda Sector, Palwal, Haryana (121102), India
                  </div>
                  <div className="companydetails">
                    Email:{" "}
                    <span>
                      <a className="mail" href={"mailto:" + data.Email}>
                        {data.Email}
                      </a>
                    </span>
                  </div>
                  <div className="companydetails">
                    Phone:{" "}
                    <span>
                      <a className="phone" href={"tel:" + data.Mobile}>
                        {data.Mobile}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
