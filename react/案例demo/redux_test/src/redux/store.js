/*
 * @Author: DaZheng
 * @Date: 2021-01-09 22:09:46
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-09 22:09:47
 * @Description: file content
 */
import {createStore} from 'redux'

import countReducer from './count_reducer'

export default createStore(countReducer)