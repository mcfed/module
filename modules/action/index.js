import actionTypes from 'redux-types/src/action-types'
import createAction from 'redux-actions/es/createAction'
import EventEmitter from 'events'

export const eventEmitter = new EventEmitter()

export * from 'redux-actions'


export const defaultTypes = [
  "LIST_ACTION", //列表行为
  "SAVE_LIST",  //保存列表
  "SAVE_ACTION", //保存行为
  "SAVE_ITEM",   //保存单一数据
  "DELETE_ACTION", //删除行为
  "DELETE_ITEM",  //删除数据
  "ITEM_ACTION",   //获取信息
  "SAVE_PARAMS"   //保存参数
]

export function actionCreator(TYPES){
  const result={
    listAction:createAction(TYPES.LIST_ACTION),
    saveList:createAction(TYPES.SAVE_LIST),
    itemAction:createAction(TYPES.ITEM_ACTION),
    saveAction:createAction(TYPES.SAVE_ACTION),
    saveItem:createAction(TYPES.SAVE_ITEM),
    deleteAction:createAction(TYPES.DELETE_ACTION),
    deleteItem:createAction(TYPES.DELETE_ITEM),
    saveParams:createAction(TYPES.SAVE_PARAMS)
  }

  return result
}

export function createTypes (namespece,typesArray){
  return actionTypes(namespece,typesArray)
}
