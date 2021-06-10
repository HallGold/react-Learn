import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFrist, isLoading, err } = this.props
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
