import React from "react";
import { Icon } from "react-icons-kit";
import { close } from "react-icons-kit/fa/close";
import { Link } from "react-router-dom";
import { group } from "react-icons-kit/fa/group";

const App = () => {
  const title = Math.floor(Math.random() * 100000) + 900000;
  const [value] = React.useState(localStorage.getItem("playerName") || "");
  return (
    <div className="lobbyPage">
      <div className="mainLobby">
        <Link className="white none" to="/">
          <Icon className="lobbyCloseIcon" icon={close} size={35}></Icon>
        </Link>
        <div className="lobbyPin">
          <h2 className="lobbyPinH2">Game PIN</h2>
          <h2 className="lobbyPinH1">{title}</h2>
          <button className="lobbyInvite">
            Invite friends
            <Icon style={{ marginLeft: "10px" }} icon={group} size={15}></Icon>
          </button>
        </div>
        <div className="lobbyPlayers">
          <h3 className="lobbyPlayer  ">{value}</h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
          <h3 className="lobbyPlayer  "> </h3>
        </div>
        <div className="lobbyBtns">
          <button className="lobbyStart">Start game</button>

          <form className="lobbyChat">
            <input className="lobbyChatInput" placeholder="Send a chat"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
