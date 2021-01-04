import {nanoid} from 'nanoid'
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  
  handleKeyUp = (event) => {
    const {keyCode, target} = event
    if (keyCode !== 13) return 
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = {id: nanoid(), content: target.value, done: false}
    this.props.headerPushData(todoObj)
    target.value = ''
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
