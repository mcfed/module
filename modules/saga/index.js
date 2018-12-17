import { call, put, takeEvery } from 'redux-saga/effects'

export function sagaCreator(actions,Api){
  return {
    fetchItem: function* fetchItem(action){
      const result = yield call(Api.fetchItem, action.payload);
      yield put(actions.saveItem(result));
    },
    fetchList: function* fetchList(action) {
      //yield put(actions.saveParams(action.payload))
      const result = yield call(Api.fetchList, action.payload);
      yield put(actions.saveList(result));
    },
    fetchSave: function* fetchSave(action){
      const result = yield call(Api.fetchSave, action.payload);
      yield put(actions.saveItem(result));
    },
    fetchDelete: function* fetchDelete(action){
      const result = yield call(Api.fetchDelete, {ids:[].concat(action.payload)});
    }
  }
}
export default call 
