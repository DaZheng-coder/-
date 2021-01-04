import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  render() {
    const {content, done} = this.props
    const {mouse} = this.state

    return (
      <div 
        style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className="item border">
        <label>
          <input type="checkbox" defaultChecked={done}/>
          <span>{content}</span>
        </label>
        <button style={{display: mouse? 'block' : 'none'}}>删除</button>
      </div>
    )
  }
}
