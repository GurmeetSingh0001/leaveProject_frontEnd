import React from "react";
import Style from "./SignInPage.module.css";
import Image from "next/image";
import { off } from "process";
const SignInPage = () => {
  return (
    <div className={Style.SignInPageContainer}>
      <div className={Style.leftImageDiv}>
        <Image
          src="/assets/images/SignInLeftBackground.png"
          layout="fill"
          height="100px"
          //   style={{ position: "absolute" }}
        ></Image>
      </div>

      <div className={Style.SignInMainoDiv}>
        <div className={Style.SignInLogoDiv}>
          <Image
            src="/assets/images/SignInLogo.png"
            layout="fill"
            // style={{ position: "absolute" }}
          />
        </div>
        <div className={Style.SignInFormDiv}>
          <h1>Sign In</h1>
          <form>
            <div className={Style.floatingDiv}>
              <input
                type="email"
                name="email"
                autoComplete="off"
                className={Style.inputEmail}
                required
              ></input>
              {/* <label className={` ${Style.floatingLabelEmail}`}>
                Email or Username
              </label> */}
            </div>
            <div className={Style.floatingDiv}>
              <input
                type="password"
                name="password"
                autoComplete="off"
                className={Style.inputPassword}
                required
              ></input>
              {/* <label className={` ${Style.floatingLabelPassword}`}>
                Password
              </label> */}
            </div>
            <div className={Style.accountType}>
              <p>Choose Account Type</p>
              <button className={Style.employeeButton}>Employee</button>
              <button className={Style.adminButton}>Admin</button>
            </div>
            <div className={Style.remeberDiv}>
              <input type="checkBox" />
              <label>Remember My Login Credentials</label>
              <br></br>
              <button className={Style.submitButton}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={Style.topRightCornerImg}>
        <img src="/assets/images/topRight.png" alt="toprightcorner" />
      </div>
      <div className={Style.bottomRightDiv}>
        <img src="/assets/images/bottomRight.png"></img>
      </div>
    </div>
  );
};

export default SignInPage;
