import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./Components/English/Navbar/Navbar";
import FrontPage from "./Components/English/FrontPage/FrontPage";
import Gallery from "./Components/English/Gallery";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { list } from './Components/util/galleriesList';
import Pictures from './Components/English/Pictures';

function App(props) {
  const [langSelection, setLang] = useState(0);
  const locationHistory = props.location.pathname;

  const changeLang = (num) => {
    // 0 = English; 1 = Spanish
    setLang(num);
  };

  const englishSelection = () => {
    console.log(list);
    return (
      <>
        <>
          <NavbarHeader changeLang={changeLang} location={props.location} />
          <Switch>
            {list.map((item, key) => Object.keys(item).map(function (keyName, keyIndex) {
              <Link to={`/gallery/${item.id}`} />
            }))}
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="/gallery/:id" component={Pictures} />
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
    <SimpleReactLightbox>
      <div className="App">
        {langSelection == 0 ? englishSelection() : spanishSelection()}
      </div>
    </SimpleReactLightbox>
  );
}

export default withRouter(App);
