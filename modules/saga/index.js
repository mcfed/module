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

export function defaultSaga(actions,Api,namespace){
  const saga= {
    refreshPage:function* (action){
      const params = yield effects.select((state)=>{
       return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(saga.fetchPage.toString()))
        // return {}
      })
      // console.log(saga.fetchList,saga.fetchList())
      //临时方案后续处理
      const pageAction={
        type:[namespace,"fetchPage"].join("/"),
        payload:params,
        meta:{sagaAction:true}
      }
      yield effects.put({type:"@@MIDDLEWARE/FETCH_PARAMS",payload:pageAction,"@@redux-saga/SAGA_ACTION": true})
      yield effects.put({type:"@@MIDDLEWARE/FETCH_REQ",payload:pageAction,"@@redux-saga/SAGA_ACTION": true})
      yield effects.fork(saga.fetchPage,pageAction)
    },
    fetchPage: function* (action) {
      const result = yield effects.call(Api.fetchList, action.payload);
      if(result.code === 0){
        yield effects.put(actions.savePage(result.data));
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchItem: function* (action){
      const result = yield effects.call(Api.fetchItem, action.payload);
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
      const result = yield effects.call(Api.fetchSave, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
        yield effects.put(showSuccess())
        yield effects.put(goBack())
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchSaveUpdate: function* (action){
      let result
      if (action.payload.id) {
        result = yield effects.call(Api.fetchUpdate, action.payload)
      } else {
        result = yield effects.call(Api.fetchSave, action.payload)
      }
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
        yield effects.put(showSuccess())
        yield effects.put(goBack())
      }else{
        yield effects.put(showError(result.message))
      }
    },
    fetchDelete: function* (action){
      // console.log(action.payload)
      const payload = {ids:[].concat(action.payload)}
      const result = yield effects.call(Api.fetchDelete,payload);
      if(result.code === 0){
        yield effects.put(showSuccess())
        yield effects.call(saga.refreshPage)

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
