import actionTypes from 'redux-types'
import {createAction} from 'redux-actions'
// import EventEmitter from 'events'
export * from 'redux-actions'

const payloadFn=(payload,meta)=>payload
const metaFN=(payload)=>({sagaAction:true})

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
