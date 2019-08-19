import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import MediaContainer from "./selic/MediaContainer";
import HistoricoContainer from "./selic/HistoricoContainer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/historico" component={HistoricoContainer} />
        <Route path="/media" component={MediaContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
