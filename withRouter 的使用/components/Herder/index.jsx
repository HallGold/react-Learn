import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {
  go1 = () => {
    this.props.history.go(-1)
  }
  go2 = () => {
    this.props.history.go(1)
  }
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={this.go1}>回退</button>
        <button onClick={this.go2}>前进</button>
      </div>
    )
  }
}
// withRouter 解决一般组件可以使用路由组件的一些API
// withRouter 返回值是一个新的组件
export default withRouter(Header)
