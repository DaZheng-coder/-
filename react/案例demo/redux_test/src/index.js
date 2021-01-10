/*
 * @Author: DaZheng
 * @Date: 2021-01-09 21:40:05
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 21:42:10
 * @Description: file content
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
ReactDOM.render(<App />, document.getElementById('root'))
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
