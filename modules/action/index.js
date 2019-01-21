import actionTypes from 'redux-types'
import {createAction} from 'redux-actions'
import EventEmitter from 'events'
export * from 'redux-actions'

export const actionEmitter = new EventEmitter()
export const defaultTypes = [
  "LIST_ACTION", //列表行为
  "SAVE_LIST",  //保存列表
  "SAVE_ACTION", //保存行为
  "SAVE_ITEM",   //保存单一数据
  "DELETE_ACTION", //删除行为
  "DELETE_ITEM",  //删除数据
  "ITEM_ACTION"   //获取信息
]
export function actionCreator(TYPES){
  const object=Object.create({})
  for(var key in TYPES){
    object[TYPES[key]]=createAction(TYPES[key])
  }
  return object
  /*
  const result={
    listAction:createAction(TYPES.LIST_ACTION),
    saveList:createAction(TYPES.SAVE_LIST),
    itemAction:createAction(TYPES.ITEM_ACTION),
    saveAction:createAction(TYPES.SAVE_ACTION),
    saveItem:createAction(TYPES.SAVE_ITEM),
    deleteAction:createAction(TYPES.DELETE_ACTION),
    deleteItem:createAction(TYPES.DELETE_ITEM),
    // saveParams:createAction(TYPES.SAVE_PARAMS)
  }

  return result
  */
}

export function createTypes(namespace,typesArray){
  return actionTypes.default(namespace,typesArray)
}

export function typesCreator(namespace,typesArray){
  return actionTypes.default(namespace,typesArray)
}

export function actionsTypeCreator(namespace,typesArray){
  return actionCreator(typesCreator(namespace,typesArray))
}
