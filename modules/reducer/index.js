import { handleActions as createReducer} from 'redux-actions'

export function reducerActionCreator(actions){
  const reducerAction={}
    reducerAction[actions.saveParams]=(state,{payload})=>{
      return {
        ...state,
        params:payload
      }
    }
    //保存列表数据和分页信息
    reducerAction[actions.saveList]=(state,{payload})=>{
      return {
        ...state,
        items:payload.items,
        total:payload.totalCount,
        current:payload.currentPage
      }
    }
    //保存单一项数据，不更新 list数据
    reducerAction[actions.saveItem]=(state,{payload})=>{
      return {
        ...state,
        item:payload
      }
    }
  return reducerAction
}
