import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Conectify</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Conectify</p>
          {/* <div role="button"> */}
            <button class="button" role="button">
              <span class="button_lg">
                <span class="button_sl"></span>
                <Link to={"/auth"} class="button_text">Let's Start</Link>
              </span>
            </button>
            {/* <Link to={"/auth"}>Get Started</Link> */}
          {/* </div> */}
        </div>
        <div>{/* <img src="/mobile.png" alt="" /> */}</div>
      </div>
    </div>
  );
}
