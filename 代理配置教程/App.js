import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getData = () => {
      console.log(process.env.REACT_APP_BASE_URL1)
    axios.get(process.env.REACT_APP_BASE_URL1 + '/students').then(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>点击请求数据</button>
      </div>
    )
  }
}
