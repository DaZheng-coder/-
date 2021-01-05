import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

export default class App extends Component {
  state = {
    todos: [
      {
        id: '1',
        content: '吃饭',
        done: true
      },
      {
        id: '2',
        content: '睡觉',
        done: true
      },
      {
        id: '3',
        content: '打豆豆',
        done: true
      },
    ]
  }

  // 添加todo
  headerPushData = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  // 修改todo done
  todoUpdate = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  // 删除todo
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {return !todo.done})
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app border">
        <Header headerPushData={this.headerPushData} />
        <List todoUpdate={this.todoUpdate} todos={todos} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
