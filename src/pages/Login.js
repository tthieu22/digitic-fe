import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Login = () => {
  return (
    <>
      <Meta title={"Login"}></Meta>
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex gap-30 flex-column">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="input-control w-100"
                />
                <CustomInput
                  type="passsword "
                  placeholder="Password"
                  name="password"
                  classname="input-control w-100"
                />
                <div>
                  <Link to="/forgot-password" className="px-2 forgot">
                    Forgot Password ?{" "}
                  </Link>
                </div>
                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Login</button>
                  <Link to="/sign-up" className="button border-0">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
