/*
 * @Author: DaZheng
 * @Date: 2021-01-09 22:09:58
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 22:37:38
 * @Description: file content
 */
 import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState=initState, action) {
  const {type, data} = action
  switch(type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}