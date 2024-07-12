import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xxl">
        <row>
          <div className="col-12">
            <p className="text-center m-0 ">
              <Link className="text-dark" to="/">
                Home{" "}
              </Link>
              &nbsp;/&nbsp;{title}
            </p>
          </div>
        </row>
      </div>
    </div>
  );
};

export default BreadCrumb;
