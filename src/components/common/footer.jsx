import React, { Component } from "react";
import "../../styles/footer.css";
import semicolon from "../../img/semicolon.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="crossfit">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>© CrossFit Juniorz 2020 All rights reserved</h2>
          </a>
        </div>
        <div className="semicolon">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>Designed & Developed By Semicolon INC</h2>
          </a>
          <a href="https://semicolon-inc.herokuapp.com">
            <img
              className="footerSemicolon"
              src={semicolon}
              alt="semicolon footer logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
