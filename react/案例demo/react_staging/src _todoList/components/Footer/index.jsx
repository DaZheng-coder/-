import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const todosNum = todos.length
    const todosDone = todos.reduce((pre,todo)=>{return pre+(todo.done ? 1: 0)},0)
    return (
      <div className="footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={todosNum === todosDone && todosNum !== 0 ? true : false}/>
          <span>已完成{todosDone} / 全部{todosNum}</span>
        </label>
        <button onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
