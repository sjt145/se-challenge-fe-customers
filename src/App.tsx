import "./scss/app.scss";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {RoutePath} from "@/constants";
import {Home, NotFound} from "@/pages";
import {AuthRoute} from "@/shared/components";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path={RoutePath.home} component={Home}/>
          <Route path={RoutePath.notFound} component={NotFound}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
