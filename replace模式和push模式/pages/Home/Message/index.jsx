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
                {
                  <Link replace to={{ pathname: '/home/message/details', state: { ...item } }}>
                    {item.title}
                  </Link>
                }
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
      </div>
    )
  }
}
