import * as effects from 'redux-saga/effects'
export * as effects from 'redux-saga/effects'
import {fetchReq,fetchRes,fetchParams,showError,showSuccess} from '../middleware'
import * as ModuleRouter from '../router'
const { goBack } = ModuleRouter

export function* fetch(method,action){
  let result
  yield effects.put(fetchParams(action))
  // yield effects.put(fetchReq({type:action.type,payload:true}))
  result = yield effects.call(method,action.payload)
  // yield effects.put(fetchRes({type:action.type,payload:false}))

  return result
}

export function defaultSaga(actions,Api){
  const saga= {
    refreshList:function* (action,namespaceSelector){
      const params = yield effects.select((state)=>{
    //    return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(actions.listAction.toString()))
        return {}
      })
      yield effects.call(saga.fetchList,params)
    },
    fetchItem: function* (action){
      const result = yield fetch(Api.fetchItem, action);
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
      } else {
        yield effects.put(showError(result.message))
      }
    },
    fetchList: function* (action) {
      const result = yield effects.call(Api.fetchList, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveList(result.data));
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchSave: function* (action){
      const result = yield fetch(Api.fetchSave, action);

      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
        yield effects.put(showSuccess())
        yield effects.put(goBack())
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchDelete: function* (action){
      const payload = {ids:[].concat(action.payload)}
      const result = yield fetch(Api.fetchDelete, Object.assign(action,{payload}));
      if(result.code === 0){
        yield saga.refreshList(action)
        yield effects.put(showSuccess())
      }else{
        yield effects.put(showError(result.message))
      }
    }
  }

  return saga
}

export function *takeSagas(sagaTypes,saga,optimize={}){
  for(var s in saga){
    if(optimize[s]){
      yield optimize[s](sagaTypes[s].toString(),saga[s])
    }else{
      yield effects.takeEvery(sagaTypes[s].toString(),saga[s])
    }
  }
}
