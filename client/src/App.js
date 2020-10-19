import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./Components/English/Navbar/Navbar";
import FrontPage from "./Components/English/FrontPage";
import Gallery from "./Components/English/Gallery";

function App(props) {
  const [langSelection, setLang] = useState(0);
  const locationHistory = props.location.pathname;

  const changeLang = (num) => {
    // 0 = English; 1 = Spanish
    setLang(num);
  };

  const englishSelection = () => {
    console.log(locationHistory);
    return (
      <>
        <>
          <NavbarHeader changeLang={changeLang} location={props.location} />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/gallery" component={Gallery} />
          </Switch>
        </>
      </>
    );
  };

  const spanishSelection = () => {
    return (
      <>
        <p>Spanish</p>
      </>
    );
  };

  return (
    <div className="App">
      {langSelection == 0 ? englishSelection() : spanishSelection()}
    </div>
  );
}

export default withRouter(App);
