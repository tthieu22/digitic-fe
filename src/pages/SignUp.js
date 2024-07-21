import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wapper-2 p-5">
        <div className="row p-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex gap-15 flex-column">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  classname="input-control w-100"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="input-control w-100"
                />
                <CustomInput
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  classname="input-control w-100"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  classname="input-control w-100"
                />
                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
