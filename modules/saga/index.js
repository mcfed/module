import * as effects from 'redux-saga/effects'
export * as effects from 'redux-saga/effects'
import {fetchReq,fetchRes,fetchParams,showError,showSuccess} from '../middleware'

export function* fetch(method,action){
  let result
  yield effects.put(fetchParams(action))
  yield effects.put(fetchReq({type:action.type,payload:true}))
  result = yield effects.call(method,action.payload)
  yield effects.put(fetchRes({type:action.type,payload:false}))

  return result
}

export function sagaCreator(actions,Api,emitter){
  const saga= {
    refreshList:function* ({TYPES,Api,namespace},action){
      // console.log(TYPES,Api,namespace)
      const params = yield effects.select((state)=>{
        return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(actions.listAction.toString()))
      })
      yield effects.call(saga.fetchList,{TYPES,Api,namespace},{type:TYPES.LIST_ACTION,payload:params})
    },
    fetchItem: function* ({TYPES,Api,namespace},action){
      const result = yield fetch(Api.fetchItem, action);
      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_ITEM,payload:result.data});
        // yield effects.put({type:"@@MIDDLEWARE/SHOW_SUCCESS",payload:"操作成功"})
      } else {
        yield effects.put(showError(result.message))
      }
    },
    fetchList: function* ({TYPES,Api,namespace},action) {
      const result = yield fetch(Api.fetchList, action);
      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_LIST,payload:result.data});
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchSave: function* ({TYPES,Api,namespace},action){
      const result = yield fetch(Api.fetchSave, action);

      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_ITEM,payload:result.data});
        yield effects.put(showSuccess("操作成功"))
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchDelete: function* ({TYPES,Api,namespace},action){
      const payload = {ids:[].concat(action.payload)}
      const result = yield fetch(Api.fetchDelete, Object.assign(action,{payload}));
      if(result.code === 0){
        yield saga.refreshList({TYPES,Api,namespace},action)
        yield effects.put(showSuccess("操作成功"))
      }else{
        yield effects.put(showError(result.message))
      }
    }
  }

  return saga
}
