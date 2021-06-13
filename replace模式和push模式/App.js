import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Abuot'
import Header from './components/Herder'
import Mynavlink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Mynavlink replace to="/about">
                About
              </Mynavlink>
              <Mynavlink replace to="/home">
                home
              </Mynavlink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
