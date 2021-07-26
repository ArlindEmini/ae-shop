import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components.jsx";

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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
