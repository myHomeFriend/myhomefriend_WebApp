import React, { FC } from "react";
import { IBenefitItem } from "../types";

const BenefitItem: FC<IBenefitItem> = (props): JSX.Element => {
  return (
    <div className="col-lg-3 items">
      <div className="row itemRow">
        <div className="col-lg-12">
          <h5>{props.heading}</h5>
        </div>
        <div className="col-lg-12">
          <p>{props.tagLine}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitItem;
