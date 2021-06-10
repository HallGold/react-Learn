import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选
  handleChecAll = event => {
    this.props.checkedAll(event.target.checked)
  }
  // 清楚已完成的
  handleClearAll = todos => {
    if (window.confirm('是否删除已完成的内容?')) {
      const doneCount = todos.filter(todo => !todo.done)
      this.props.ClearDoneAll(doneCount)
    }
  }
  render() {
    const { todos } = this.props
    //总数
    const total = todos.length
    // 已完成的的数量
    const doneCount = todos.reduce((pre, ct) => pre + (ct.done ? 1 : 0), 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleChecAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button
          onClick={() => {
            this.handleClearAll(todos)
          }}
          className="btn btn-danger"
        >
          清除已完成任务
        </button>
      </div>
    )
  }
}
