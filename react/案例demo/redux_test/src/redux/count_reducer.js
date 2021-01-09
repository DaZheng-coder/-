/*
 * @Author: DaZheng
 * @Date: 2021-01-09 22:09:58
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 22:37:38
 * @Description: file content
 */
const initState = 0
export default function countReducer(preState=initState, action) {
  const {type, data} = action
  switch(type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}