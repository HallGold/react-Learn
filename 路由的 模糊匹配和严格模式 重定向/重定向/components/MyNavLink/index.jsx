import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <NavLink className="list-group-item" activeClassName="active" {...this.props} />
      </div>
    )
  }
}
