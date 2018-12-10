import types from 'redux-types'
import {createAction} from 'redux-actions'


export const TYPES = types(namespece, [
  "LIST_ACTION", //列表行为
  "SAVE_LIST",  //保存列表
  "SAVE_ACTION", //保存行为
  "SAVE_ITEM",   //保存单一数据
  "DELETE_ACTION", //删除行为
  "DELETE_ITEM",  //删除数据
  "ITEM_ACTION",   //获取信息
  "SAVE_PARAMS"   //保存参数
])

export const actions = actionCreator(TYPES)
export const createAction
