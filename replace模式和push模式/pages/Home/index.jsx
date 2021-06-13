import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Mynavlink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <Mynavlink replace to="/home/news">
                News
              </Mynavlink>
            </li>
            <li>
              <Mynavlink replace to="/home/message">
                Message
              </Mynavlink>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
