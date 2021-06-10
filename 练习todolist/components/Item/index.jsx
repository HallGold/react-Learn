import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { flag: false }

  // 鼠标移入移出回调
  handleMouse = flag => {
    return () => {
      this.setState({ flag: flag })
    }
  }
  // 是否完成任务的状态
  handlechange = id => {
    return event => {
      //   console.log(id, event.target.checked)
      this.props.isDone(id, event.target.checked)
    }
  }
  // 删除回调
  handledelete = id => {
    if (window.confirm('是否删除?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { flag } = this.state
    return (
      <li style={{ backgroundColor: flag ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handlechange(id)} />
          <span>{name}</span>
        </label>
        <button
          onClick={() => {
            this.handledelete(id)
          }}
          className="btn btn-danger"
          style={{ display: flag ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
