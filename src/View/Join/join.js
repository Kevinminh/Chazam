import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";

class join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
    this.getText = this.getText.bind(this);
  }

  getText() {
    // Gets the input field
    var gamePIN = document.querySelector("#gamePIN");
    var PIN = gamePIN.value;
    var error = document.querySelector("#error");

    if (PIN === "2020") {
      gamePIN.setAttribute("class", "homePagePinGreen");
      error.setAttribute("class", "hide");
    } else {
      gamePIN.setAttribute("class", "homePagePinRED");
      error.setAttribute("class", "error");
    }
  }

  handleKeyPress = event => {
    var gamePIN = document.querySelector("#gamePIN");
    var PIN = gamePIN.value;
    var error = document.querySelector("#error");
    var enterBtn = document.querySelector("#enterBtn");
    var enterLink = document.querySelector("#enterLink");

    if (event.key === "Enter" && PIN === "2020") {
      gamePIN.setAttribute("class", "homePagePinGreen");
      error.setAttribute("class", "hide");
      event.preventDefault();
      enterBtn.setAttribute("class", "homePageJoin ");
      enterLink.setAttribute("class", "none white");
    } else if (event.key !== "Enter") {
      return null;
    } else {
      gamePIN.setAttribute("class", "homePagePinRED");
      error.setAttribute("class", "error");
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="homePageBackground">
        <div className="homePageContainer">
          <div className="homePageInput">
            <h2 className="homePageTitle">Chazam!</h2>
            <div className="homePageFormContainer">
              <form className="homePageForm">
                <input
                  className="homePagePin"
                  id="gamePIN"
                  placeholder="Game PIN"
                  onKeyPress={this.handleKeyPress}
                ></input>
              </form>
              <div className="homePageBtns">
                <Link
                  id="enterLink"
                  className="none white disabled"
                  to="/game/2020"
                >
                  <button
                    id="enterBtn"
                    className="homePageJoinDisabled disabled"
                  >
                    Join
                  </button>
                </Link>
              </div>
            </div>
            <span className="hide" id="error">
              <p>Error! You did not enter the correct game PIN.</p>
            </span>
            <div className="crateArrowBtns">
              <Link to="/" className="none grey">
                <Icon icon={ic_keyboard_backspace} size={40}></Icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default join;
