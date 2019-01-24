import * as effects from 'redux-saga/effects'
export * as effects from 'redux-saga/effects'


const FETCH_REQ="@@MIDDLEWARE/FETCH_REQ"
const FETCH_RES="@@MIDDLEWARE/FETCH_RES"

export function* fetch(method,action){
  let result
  yield effects.put({type:"@@MIDDLEWARE/FETCH_PARAMS",payload:action})
  yield effects.put({type:"@@MIDDLEWARE/FETCH_REQ",payload:{type:action.type,payload:true}})
  result = yield effects.call(method,action.payload)
  yield effects.put({type:"@@MIDDLEWARE/FETCH_RES",payload:{type:action.type,payload:false}})

  return result
}

export function sagaCreator(actions,Api,emitter){
  const saga= {
    refreshList:function* ({TYPES,Api,namespace},action){
      console.log(TYPES,Api,namespace)
      const params = yield effects.select((state)=>{
        return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(actions.listAction.toString()))
      })
      yield effects.call(saga.fetchList,{TYPES,Api,namespace},{type:TYPES.LIST_ACTION,payload:params})
    },
    fetchItem: function* ({TYPES,Api,namespace},action){
      const result = yield fetch(Api.fetchItem, action);
      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_ITEM,payload:result.data});
        yield put({type:"@@MIDDLEWARE/SHOW_SUCCESS",payload:"操作成功"})
      } else {
        yield put({type:"@@MIDDLEWARE/SHOW_ERROR",payload:"操作失败"})
      }
    },
    fetchList: function* ({TYPES,Api,namespace},action) {
      const result = yield fetch(Api.fetchList, action);
      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_LIST,payload:result.data});
      }else{
        yield effects.put({type:"@@MIDDLEWARE/SHOW_ERROR",payload:result.message})
      }
    },
    fetchSave: function* ({TYPES,Api,namespace},action){
      const result = yield fetch(Api.fetchSave, action);

      if(result.code === 0){
        yield effects.put({type:TYPES.SAVE_ITEM,payload:result.data});
        yield effects.put({type:"@@MIDDLEWARE/SHOW_SUCCESS",payload:"操作成功"})
      }else{
        yield put({type:"@@MIDDLEWARE/SHOW_ERROR",payload:result.message})
      }
    },
    fetchDelete: function* ({TYPES,Api,namespace},action){
      const payload = {ids:[].concat(action.payload)}
      const result = yield fetch(Api.fetchDelete, Object.assign(action,{payload}));
      if(result.code === 0){
        yield saga.refreshList({TYPES,Api,namespace},action)
        yield effects.put({type:"@@MIDDLEWARE/SHOW_SUCCESS",payload:"操作成功"})
      }else{
        yield effects.put({type:"@@MIDDLEWARE/SHOW_ERROR",payload:result.message})
      }
    }
  }

  return saga
}
