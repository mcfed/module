export {effects} from 'redux-saga'

export function sagaCreator(actions,Api){
  return {
    fetchItem: function* fetchItem(action){
      const result = yield effects.call(Api.fetchItem, action.payload);
      yield effects.put(actions.saveItem(result));
    },
    fetchList: function* fetchList(action) {
      //yield put(actions.saveParams(action.payload))
      const result = yield effects.call(Api.fetchList, action.payload);
      yield effects.put(actions.saveList(result));
    },
    fetchSave: function* fetchSave(action){
      const result = yield effects.call(Api.fetchSave, action.payload);
      yield effects.put(actions.saveItem(result));
    },
    fetchDelete: function* fetchDelete(action){
      const result = yield effects.call(Api.fetchDelete, {ids:[].concat(action.payload)});
    }
  }
}
