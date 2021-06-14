import React, { Component } from 'react'
import PubSub from 'pubsub-js' //引入消息订阅与消息发布库
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFrist: true,
    isLoading: false,
    err: ''
  }

  // 页面加载完成之后
  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('MySubscribe', (msg, data) => {
      this.setState(data)
    })
  }
  // 卸载组件前
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFrist, isLoading, err } = this.state
    return (
      <div className="row">
        {isFrist ? (
          <h1>点击搜索按钮,获取信息</h1>
        ) : isLoading ? (
          <h1>搜索中.....</h1>
        ) : err ? (
          <h1 style={{ color: 'red' }}>{err}</h1>
        ) : (
          users.map(user => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{ width: '100px' }} alt="head" />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
