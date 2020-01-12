import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";

class create extends Component {
  render() {
    return (
      <div>
        <div className="homePageBackground">
          <div className="homePageContainer">
            <div className="homePageInput">
              <h2 className="homePageTitle">Chazam!</h2>
              <div className="homePageFormContainer">
                <button className="createBtnPhoto" id="enterBtn" type="button">
                  <Link className="none white" to="/create/photos">
                    <p className="orange">Random photos</p>
                  </Link>
                </button>

                <button className="createBtnFact">
                  <Link className="none white" to="/create/facts">
                    <p className="green">Random facts</p>
                  </Link>
                </button>

                <button className="createBtnDares">
                  <Link className="none white" to="/create/dares">
                    <p className="blue">Random dares</p>
                  </Link>
                </button>

                <button className="createBtnTruth">
                  <Link className="none white" to="/create/truth">
                    <p className="darkOrange">Random truth</p>
                  </Link>
                </button>
              </div>
              <div className="crateArrowBtns">
                <Link to="/" className="none grey">
                  <Icon icon={ic_keyboard_backspace} size={40}></Icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default create;
