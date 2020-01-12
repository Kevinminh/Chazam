import React, { Component } from "react";
import { Link } from "react-router-dom";

class landing extends Component {
  constructor(props) {
    super(props);
    this.getUserName = this.getUserName.bind(this);
  }

  getUserName() {
    // gets input value
    var name = document.querySelector("#homePagePin").value;

    // Saves data to retrieve later
    localStorage.setItem("userName", name);

    // Updates HTML
    this.updateHTML();
  }

  returnName() {
    return localStorage.getItem("userName");
  }

  updateHTML() {
    var name = this.returnName;
    document.querySelector("#homePagePin").innerHTML = name;
  }

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
                  placeholder="Your name..."
                ></input>
              </form>
              <div className="homePageBtns">
                <Link className="none white" to="/join">
                  <button className="homePageJoin">Join</button>
                </Link>

                <Link className="none white" to="/create">
                  <button className="homePageCreate">Create</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
