import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("playerName") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("playerName", value);
  }, [value]);

  const onChange = event => {
    setValue(event.target.value);
  };

  function getName(e) {
    var playerName = document.querySelector("#playerName").value;
    var joinBtn = document.querySelector(".homePageJoin");
    var createBtn = document.querySelector(".homePageCreate");
    var inputField = document.querySelector("#playerName");
    var error = document.querySelector("#error");

    if (playerName === "") {
      joinBtn.setAttribute("class", "homePageJoinDisabled disabled none white");
      createBtn.setAttribute(
        "class",
        "homePageCreateDisabled disabled none white"
      );
      inputField.setAttribute("class", "inputPinRED");
      error.setAttribute("class", "error");
      e.preventDefault();
    } else if (playerName !== "" || e.key === "ENTER") {
      joinBtn.setAttribute("class", "homePageJoin");
      createBtn.setAttribute("class", "homePageCreate");
    }
  }
  return (
    <div className="homePageBackground">
      <div className="homePageContainer">
        <div className="homePageInput">
          <h2 className="homePageTitle">Chazam!</h2>
          <div className="homePageFormContainer">
            <form className="homePageForm">
              <input
                className="homePagePin"
                id="playerName"
                placeholder="Your name..."
                onChange={onChange}
                value={value}
                type="text"
              ></input>
            </form>

            <div className="homePageBtns">
              <Link className="none white homePageJoin" id="joinBtn" to="/join">
                <button className="homePageJoin" onClick={getName}>
                  Join
                </button>
              </Link>

              <Link
                className="none white homePageCreate"
                id="createBtn"
                to="/create"
              >
                <button className="homePageCreate" onClick={getName}>
                  Create
                </button>
              </Link>
            </div>
          </div>
          <span className="hide" id="error">
            <p>Error! Please enter your name to continue.</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default App;
