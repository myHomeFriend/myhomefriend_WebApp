import React, { FC } from "react";
import Tooltip from "react-bootstrap/Tooltip";

interface IToolTip {
  MessageText: string;
}

const TooltipDynamic: FC<IToolTip> = (props): JSX.Element => {
  return <Tooltip id="tooltip">{props.MessageText}</Tooltip>;
};

export default TooltipDynamic;
