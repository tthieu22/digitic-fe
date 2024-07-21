import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Reset Your Password"}></Meta>
      <BreadCrumb title="Reset Your Password" />
      <Container class1="login-wrapper home-wapper-2 p-5">
        <div className="row p-5">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="px-2 forgot text-center fs-8 text-secondary">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex gap-15 flex-column">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="input-control w-100"
                />
                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Submit
                  </button>
                </div>
                <Link to="/login" className=" border-0 text-center text-dark">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
