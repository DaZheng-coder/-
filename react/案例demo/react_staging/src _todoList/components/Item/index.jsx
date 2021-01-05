import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  handleChange = (id) => {
    return (event) => {
      this.props.todoUpdate(id, event.target.checked)
    }
  }

  handleClick = (id) => {
    if(window.confirm('确定删除吗')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id, content, done} = this.props
    const {mouse} = this.state

    return (
      <div 
        style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className="item border">
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)}/>
          <span>{content}</span>
        </label>
        <button style={{display: mouse? 'block' : 'none'}} onClick={() => this.handleClick(id)}>删除</button>
      </div>
    )
  }
}
