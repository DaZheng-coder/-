/*
 * @Author: DaZheng
 * @Date: 2021-01-09 22:09:46
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 22:09:47
 * @Description: file content
 */
import {createStore, applyMiddleware,combineReducers} from 'redux'

import countReducer from './reducer/count'
import personReducer from './reducer/person'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))