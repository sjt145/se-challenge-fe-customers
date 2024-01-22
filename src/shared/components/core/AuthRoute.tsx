import React from "react";
import {Redirect, Route} from "react-router-dom";

const DefaultPath = "/";

type Props = {
  component: any,
  authenticate?: () => any,
  redirectOnFailure?: string,
  [key: string]: any
}

export const AuthRoute = ({component: Component, authenticate, redirectOnFailure, ...rest}: Props) => (
  <Route {...rest}
         render={props => {
           const redirect = redirectOnFailure ? redirectOnFailure : DefaultPath;
           return !authenticate || authenticate() ? <Component {...props} />
             : <Redirect to={{
               pathname: redirect,
               state: {from: props.location}
             }}/>
         }}
  />
);
