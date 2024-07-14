import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wapper-2 p-5">
        <div className="container-xxl p-5">
          <div className="row p-5">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex gap-15 flex-column">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input-control w-100"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input-control w-100"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      className="input-control w-100"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input-control w-100"
                    />
                  </div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
