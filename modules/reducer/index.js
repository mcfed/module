export { handleActions as reducerCreator } from 'redux-actions'

export const defaultState={
    items: [],
    item: {},
    //page meta
    page:{
      total: 0,
      current: 1
    }
}


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

    reducerAction[actions.deleteItem]=(state,{payload})=>{
      return {
        ...state,
        item:{}
      }
    }
  return reducerAction
}
