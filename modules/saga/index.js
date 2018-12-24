import * as effects from 'redux-saga/effects'
export * as effects from 'redux-saga/effects'

export  function sagaCreator(actions,Api){
  return {
    fetchItem: function* (action){
      const result = yield effects.call(Api.fetchItem, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
      }
    },
    fetchList: function* (action) {
      //yield put(actions.saveParams(action.payload))
      const result = yield effects.call(Api.fetchList, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveList(result.data));
      }
    },
    fetchSave: function* (action){
      const result = yield effects.call(Api.fetchSave, action.payload);

      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
      }
    },
    fetchDelete: function* (action){
      const result = yield effects.call(Api.fetchDelete, {ids:[].concat(action.payload)});
      if(result.code === 0){

      }
    }
  }
}
