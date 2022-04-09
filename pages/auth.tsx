import React from "react";
import Logo from "../public/logo-astramaya.svg";
import Image from "next/Image";
import Script from "next/script";
import Link from "next/link";

const Auth = () => {
  return (
    <div id="auth">
      <div className="login-page">
        <div className="box">
          <div className="left">
            <Image src={Logo} className="gambar" width={250} height={100} />
            <h3>Create Account</h3>
            <button type="button" className="register-btn">
              Register
            </button>
          </div>

          <div className="right">
            <Image src={Logo} className="gambar" width={250} height={100} />
            <h3>Have an Account ?</h3>
            <button type="button" className="login-btn">
              Login
            </button>
          </div>

          <div className="form">
            <div className="login-form">
              <h3>Log In</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
              <Link href="/">
                <button type="button" className="submit-btn">
                  Login
                </button>
              </Link>
              <p>
                <a href="#" className="register-btn">
                  Register
                </a>{" "}
                |{" "}
                <a href="#" className="lost-pass-btn">
                  Lost Your Password ?
                </a>
              </p>
            </div>
            <div className="register-form form-hidden">
              <h3>Register</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password*"
                  className="form-control"
                />
              </div>

              <button type="button" className="submit-btn">
                Register
              </button>
              <p>
                <a href="#" className="login-btn">
                  Login
                </a>{" "}
                |{" "}
                <a href="#" className="lost-pass-btn">
                  Lost Your Password ?
                </a>
              </p>
            </div>
            <div className="lost-password-form form-hidden">
              <h3>Lost Your Password ?</h3>
              <h5>
                You will receive a link to create a new password via email.
              </h5>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="form-control"
                />
              </div>

              <button type="button" className="submit-btn">
                Reset Password
              </button>
              <p>
                <a href="#" className="login-btn">
                  Login
                </a>{" "}
                |{" "}
                <a href="#" className="register-btn">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script src="script.login.register.forgot.js" />
    </div>
  );
};

export default Auth;
