import React from "react";
import BenefitItem from "./components/BenefitItem";
import "./CompanyBenefits.css";

const CompanyBenefits = () => {
  return (
    <div className="companyBenefitsContainer">
      <div className="row">
        <BenefitItem heading="Free Delivery" tagLine="Minimum order Rs.2000" />
        <BenefitItem heading="Money Guarantee" tagLine="7 Days Back" />
        <BenefitItem heading="Return" tagLine="30 days Policy" />
        <BenefitItem heading="Payment" tagLine="Secured Payment" />
      </div>
    </div>
  );
};

export default CompanyBenefits;
