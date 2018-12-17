export types from 'redux-types'
export {createAction} from 'redux-actions'


export const defaultType = [
  "LIST_ACTION", //列表行为
  "SAVE_LIST",  //保存列表
  "SAVE_ACTION", //保存行为
  "SAVE_ITEM",   //保存单一数据
  "DELETE_ACTION", //删除行为
  "DELETE_ITEM",  //删除数据
  "ITEM_ACTION",   //获取信息
  "SAVE_PARAMS"   //保存参数
]
export const TYPES = types(namespece, defaultType)


export function actionCreator(TYPES){
  return {
    listAction:createAction(TYPES.LIST_ACTION),
    saveList:createAction(TYPES.SAVE_LIST),
    itemAction:createAction(TYPES.ITEM_ACTION),
    saveAction:createAction(TYPES.SAVE_ACTION),
    saveItem:createAction(TYPES.SAVE_ITEM),
    deleteAction:createAction(TYPES.DELETE_ACTION),
    deleteItem:createAction(TYPES.DELETE_ITEM),
    saveParams:createAction(TYPES.SAVE_PARAMS)
  }
}

export function createTypes (namespece,typesArray){
  return types(namespece,typesArray)
}

export function createActions(types){
  return actionCreator(types)
}


/*
import {defaultType,createTypes} from 'mcf-module'

let types = createTypes(defaultType)
let actions = createAction(types)
*/
