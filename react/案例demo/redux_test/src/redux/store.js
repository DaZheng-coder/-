/*
 * @Author: DaZheng
 * @Date: 2021-01-09 22:09:46
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 22:09:47
 * @Description: file content
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducer from './reducer'

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))