import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    todoUpdate: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos, todoUpdate, deleteTodo} = this.props

    return (
      <div className="list">
        {
          todos.map(todo => {
            return (
              <Item key={todo.id} {...todo} todoUpdate={todoUpdate} deleteTodo={deleteTodo}/>
            )
          })
        }
      </div>
    )
  }
}
