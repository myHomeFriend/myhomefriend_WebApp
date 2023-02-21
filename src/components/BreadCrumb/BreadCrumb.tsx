import { FC } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  IBreadCrumbData,
  useCreateBrumbCrumJson,
} from "../../hooks/useCreateBrumbCrumJson";
import "./BreadCrumb.css";

export interface IBreadCrumb {
  path: string;
}

const BreadCrumb: FC<IBreadCrumb> = (props) => {
  const { path } = props; 
  const data: IBreadCrumbData = useCreateBrumbCrumJson(path); 
 

  return (
    <Breadcrumb className="breadcrumbDiv">
      {data.breadCrumbs.map((item, index) => {
        return (
          <li className="breadcrumb-item" key={index}>
            {item.urlType === "home" ? (
              <Link to={"/"}>{item.text}</Link>
            ) : item.urlType === data.urlType ? (
              item.text
            ) : (
              <Link to={`${item.url}/${item.urlType}`}>
                {item.text}
              </Link>
            )}
          </li>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
