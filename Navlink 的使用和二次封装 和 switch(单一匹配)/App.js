import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
              {/* 导航区  编写路由导航链接  */}
              {/*  <NavLink className="list-group-item" activeClassName="active" to="/about">
                about
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                home
              </NavLink> */}

              {/* 二次封装 navlink */}
              <Mynavlink to="/about">About</Mynavlink>
              <Mynavlink to="/home">home</Mynavlink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 默认的路由是配上了组件之后，还是会继续往下匹配，影响效率，而且如果一个路由对应多个组件，两个组件都会展示出来，
                这样是不合理的，
                Switch组件可以让第一次匹配上路由之后，就不在继续往下匹配了。只需要用Switch组件包裹一下路由就可以了。（单一匹配）
                */}
                {/* exact 开启严格匹配 */}
                <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
