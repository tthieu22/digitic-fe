import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
const Resetpassword = () => {
  return (
    <div>
      <Meta title={"Reset Password"}></Meta>
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wapper-2 p-5">
        <div className="container-xxl p-5">
          <div className="row p-5">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex gap-15 flex-column">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input-control w-100"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="input-control w-100"
                    />
                  </div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
