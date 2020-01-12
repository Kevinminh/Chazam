import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./View/Home/index";
import Create from "./View/Create/index";
import Join from "./View/Join/index";
import Lobby from "./View/Lobby/index";

import Photos from "./View/GameLobbies/RandomPhotos/index";
import RandomFacts from "./View/GameLobbies/RandomFacts/index";
import RandomDares from "./View/GameLobbies/RandomDares/index";
import RandomTruth from "./View/GameLobbies/RandomTruth/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/join" component={Join} />
        <Route path="/game/:id" component={Lobby} />
        <Route exact path="/create/photos" component={Photos} />
        <Route exact path="/create/facts" component={RandomFacts} />
        <Route exact path="/create/dares" component={RandomDares} />
        <Route exact path="/create/truth" component={RandomTruth} />
      </Switch>
    </Router>
  );
}

export default App;
