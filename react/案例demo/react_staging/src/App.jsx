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

  headerPushData = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app border">
        <Header headerPushData={this.headerPushData} />
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}
