import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'
export default class List extends Component {
  // 对接收的props类型和必要性 进行限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    isDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { todos, isDone, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} isDone={isDone} deleteTodo={deleteTodo} />
        })}
      </ul>
    )
  }
}
