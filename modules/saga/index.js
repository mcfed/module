export * as effects from 'redux-saga/effects'

export function sagaCreator(actions,Api){
  // console.log(Object.)
  return {
    fetchItem: function* (action){
      const result = yield effects.call(Api.fetchItem, action.payload);
      yield put(actions.saveItem(result));
    },
    fetchList: function* (action) {
      //yield put(actions.saveParams(action.payload))
      const result = yield effects.call(Api.fetchList, action.payload);
      yield put(actions.saveList(result));
    },
    fetchSave: function* (action){
      const result = yield effects.call(Api.fetchSave, action.payload);
      yield put(actions.saveItem(result));
    },
    fetchDelete: function* (action){
      const result = yield effects.call(Api.fetchDelete, {ids:[].concat(action.payload)});
    }
  }
}
