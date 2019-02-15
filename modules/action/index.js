import actionTypes from 'redux-types'
import {createAction} from 'redux-actions'
// import EventEmitter from 'events'
export * from 'redux-actions'

// export const actionEmitter = new EventEmitter()
export const defaultTypes = [
  "fetchList", //列表行为
  "SAVE_LIST",  //保存列表
  "SAVE_ACTION", //保存行为
  "SAVE_ITEM",   //保存单一数据
  "DELETE_ACTION", //删除行为
  "DELETE_ITEM",  //删除数据
  "ITEM_ACTION"   //获取信息
]
export function actionCreator(actionTypes){
  const object=Object.create({})
  for(var key in actionTypes){
    object[actionTypes[key]]=createAction(actionTypes[key])
  }
  return object
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
