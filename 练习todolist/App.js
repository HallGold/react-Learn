import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '打代码',
        done: false
      }
    ]
  }
  // 添加item
  addTodo = todoobj => {
    const { todos } = this.state
    const newTodos = [todoobj, ...todos]
    this.setState({ todos: newTodos })
  }
  // 是否完成
  isDone = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, done }
      else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }
  // 删除item
  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }
  // 全选
  checkedAll = doneAll => {
    const { todos } = this.state
    const newTodos = todos.map(todo => ({ ...todo, done: doneAll }))
    this.setState({ todos: newTodos })
  }
  // 清楚已完成的
  ClearDoneAll = todo => {
    // console.log(todo)
    this.setState({ todos: todo })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} isDone={this.isDone} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkedAll={this.checkedAll} ClearDoneAll={this.ClearDoneAll} />
        </div>
      </div>
    )
  }
}
