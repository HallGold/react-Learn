import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  inputValue = event => {
    if (event.keyCode !== 13) return
    if (event.target.value.trim() === '') {
      return alert('输入的类容不能为空!')
    }
    const todo = { id: nanoid(), name: event.target.value, done: false }
    this.props.addTodo(todo)
    event.target.value = ''
  }

  // 对接收的props类型和必要性 进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.inputValue} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
