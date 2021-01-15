// 该文件用于汇总所有的reducer为一个总的reducer
import count from './count'
import persons from './person'

import {combineReducers} from 'redux'

export default combineReducers({
  count,
  persons
})
