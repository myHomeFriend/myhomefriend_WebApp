import React, { FC, useState } from "react";
import "./LoginModal.css";
import Eye from "./svg/Eye";

interface ILogin {
  loginRef: any;
}

const LoginModal: FC<ILogin> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="loginModal">
      <div className="container" style={{ opacity: 1 }}>
        <div className="modalBox">
          <div>
            <div className="modalBoxBackground" ref={props.loginRef}>
              <form className="content">
                <h3>Welcome To Ecommerce</h3>
                <h5>Log in with email &amp; password</h5>
                <div className="emailDiv">
                  <label htmlFor="email-input-box">Email or Phone Number</label>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="exmple@mail.com"
                      className="emailInputBox"
                      id="email-input-box"
                    />
                  </div>
                </div>
                <div className="passwordDiv">
                  <label htmlFor="password-input-box">Password</label>
                  <div className="sc-499601bf-0 fYmWgG">
                    <input
                      name="password"
                      autoComplete="on"
                      placeholder="*********"
                      type={`${showPassword ? "text" : "password"}`}
                      className="passwordInputBox"
                      id="password-input-box"
                    />
                    <button type="button" className="eyeButton">
                      <div>
                        <div
                          className={`eyeDiv ${showPassword ? "active" : ""}`}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Eye />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <button color="primary" type="submit" className="login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
