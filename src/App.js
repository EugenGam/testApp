import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import PhotoPage from "./components/PhotoPage";
import "./sass/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/:topicId"}>
          <PhotoPage />
        </Route>
        <Route path="/">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
