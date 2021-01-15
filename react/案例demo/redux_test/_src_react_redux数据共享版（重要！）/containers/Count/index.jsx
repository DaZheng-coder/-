import React, { Component } from 'react'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/action/count'

import {connect} from 'react-redux'

// function mapStateToProps(state) {
//   return {count: state}
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     jia: data => dispatch(createIncrementAction(data)),
//     jian: data => dispatch(createDecrementAction(data)),
//     jiaAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
//   }
// }
class Count extends Component {

  state = {count: 0}

  increment = () => {
    const {value} = this.selectNumber
    // store.dispatch(createIncrementAction(value*1))
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectNumber
    this.props.jian(value*1)
    // store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.props
    if (count % 2 !== 0) {
      this.props.jia(value*1)
      // store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    // setTimeout(() => {
      this.props.jiaAsync(value*1, 500)
      // store.dispatch(createIncrementAsyncAction(value*1, 1000))
    // }, 500)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>人数：{this.props.renshu}</h2>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect( 
  state=>({count:state.he, renshu: state.rens.length}),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count)