import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Details from './Details'

export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: '01',
        title: '消息1'
      },
      {
        id: '02',
        title: '消息2'
      },
      {
        id: '03',
        title: '消息3'
      }
    ]
  }
  // 编程式路由导航 push跳转
  pushShow = item => {
    // // params 传参
    // this.props.history.push(`/home/message/details/${item.id}/${item.title}`)

    // // search传参
    // this.props.history.push(`/home/message/details?id=${item.id}&title=${item.title}`)
    //state 传参
    this.props.history.push(`/home/message/details`, { id: item.id, title: item.title })
  }
  // 编程式路由导航 replace跳转
  replaceShow = item => {
    // // params 传参
    // this.props.history.replace(`/home/message/details/${item.id}/${item.title}`)
    // // search传参
    // this.props.history.replace(`/home/message/details?id=${item.id}&title=${item.title}`)
    //state 传参
    this.props.history.replace(`/home/message/details`, { id: item.id, title: item.title })
  }
  go1 = () => {
    this.props.history.go(-1)
  }
  go2 = () => {
    this.props.history.go(1)
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map(item => {
            return (
              <li key={item.id}>
                {/* params 传参 */}
                {/* <Link to={`/home/message/details/${item.id}/${item.title}`}>{item.title}</Link> */}
                {/* search 传参 */}
                {/* {<Link to={`/home/message/details?id=${item.id}&title=${item.title}`}>{item.title}</Link>} */}
                {/* state 传参 */}
                {<Link to={{ pathname: '/home/message/details', state: { ...item } }}>{item.title}</Link>}
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(item)
                  }}
                >
                  push跳转
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(item)
                  }}
                >
                  replace跳转
                </button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/details/:id/:title" component={Details}></Route> */}

        {/* search 无需声明接收 */}
        {/* <Route path="/home/message/details" component={Details}></Route> */}

        {/* state 无需声明接收 */}
        <Route path="/home/message/details" component={Details}></Route>

        <button onClick={this.go1}>回退</button>
        <button onClick={this.go2}>前进</button>
      </div>
    )
  }
}
