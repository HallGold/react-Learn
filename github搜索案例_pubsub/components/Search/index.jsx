import React, { Component } from 'react'
import PubSub from 'pubsub-js' //引入消息订阅与消息发布库
import axios from 'axios'

export default class Search extends Component {
  Search = () => {
    const {
      Keyword: { value }
    } = this
    // this.props.uploadAppState({ isFrist: false, isLoading: true }) //发送请求前 开启loading
    PubSub.publish('MySubscribe', { isFrist: false, isLoading: true })
    axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(
      Response => {
        // this.props.uploadAppState({ users: Response.data.items, isLoading: false }) // 请求成功并且关闭loading
        PubSub.publish('MySubscribe', { users: Response.data.items, isLoading: false })
      },
      Error => {
        // this.props.uploadAppState({ err: Error.message, isLoading: false })
        PubSub.publish('MySubscribe', { err: Error.message, isLoading: false })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索用户</h3>
        <div>
          <input ref={c => (this.Keyword = c)} type="text" placeholder="输入关键词" />
          &nbsp;<button onClick={this.Search}>搜索</button>
        </div>
      </section>
    )
  }
}
