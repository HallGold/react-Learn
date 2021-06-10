import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  Search = () => {
    const {
      Keyword: { value }
    } = this
    this.props.uploadAppState({ isFrist: false, isLoading: true })
    axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(
      Response => {
        this.props.uploadAppState({ users: Response.data.items, isLoading: false })
      },
      Error => {
        this.props.uploadAppState({ err: Error.message, isLoading: false })
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
