import {createAction,createActions} from 'redux-actions'

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

export function createDefineActions(actions,namespace){
  return createActions({
    [namespace]:defineActions(actions)
  })[namespace]
}
