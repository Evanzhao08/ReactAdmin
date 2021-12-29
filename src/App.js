/* 
应用的根组件
*/

import React, { Component } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login/login";
import admin from "./pages/admin/admin";

//import { Button } from 'antd';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> {/* 只匹配其中一个 */}
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
