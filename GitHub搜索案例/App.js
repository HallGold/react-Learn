import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [],
    isFrist: true,
    isLoading: false,
    err: ''
  }
  uploadAppState = data => {
    this.setState(data)
  }
  render() {
    return (
      <div className="container">
        <Search uploadAppState={this.uploadAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
