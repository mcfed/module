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
}

export function createTypes(namespace,typesArray){
  console.log(actionTypes)
  return actionTypes.default(namespace,typesArray)
}

export function typesCreator(namespace,typesArray){

  console.log(actionTypes)
  return actionTypes.default(namespace,typesArray)
}

export function actionsTypeCreator(namespace,typesArray){
  return actionCreator(actionTypes(namespace,typesArray))
}
