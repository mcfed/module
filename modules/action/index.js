
/**
 * @module Action
 */
import {createAction,createActions} from 'redux-actions'

const payloadFn=(payload,meta)=>payload
const metaFN=(payload)=>({sagaAction:true})

/**
 * defineActions - 遍历actions集合json
 *
 * @param  {object} obj actions集合json
 * @return {object}       定义同名的actions集合
 */
export function defineActions(obj){
  var defineObj={}
  for(var o in obj){
    // newObj[o]=payloadFn
    Object.defineProperty(defineObj, o, {
      value:[payloadFn,metaFN]
    })
  }
  return defineObj
}

/**
 * createDefineActions - 创建actions
 *
 * @param  {object} actions   actions集合json
 * @param  {string} namespace 模块命名空间
 * @return {object}           redux-actions创建后的actions
 */
export function createDefineActions(actions,namespace){
  return createActions({
    [namespace]:defineActions(actions)
  })[namespace]
}
