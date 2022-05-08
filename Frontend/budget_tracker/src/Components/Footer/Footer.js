import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 item">
              <p className="f1">About</p>
              <ul>
                <li>
                  <a href="http://localhost:3000/about-us">Team</a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 item text">
              <p className="f2">Budget Expense Tracker (BET)</p>
              <p>
                BET, not only helps you to track your expenses but also helps
                you save money.
              </p>
            </div>
            <div className="col item social">
              <a href="https://github.com/dpmanek/CS_546_C_Project">
                <i className="icon ion-social-github"></i>
              </a>
            </div>
          </div>
          <p className="copyright c1">BET © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
