import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HAT PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={HatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
