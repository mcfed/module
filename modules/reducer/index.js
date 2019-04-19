export { handleActions as reducerCreator } from 'redux-actions'

export function megerActionReducer(reducers,reducerTypes){
  const newReducer={}
  for(var r in reducers){
    newReducer[reducerTypes[r]]=reducers[r]
  }
  return newReducer
}

export const defaultState={
    items: [],
    item: {},
    //page meta
    page:{
      total: 0,
      current: 1
    }
}


export function defaultReducer(){
  return {
    savePage:(state,{payload})=>{
      const pageSize= payload.pageSize|| payload.end+1-payload.start
      return {
        ...state,
        // items:payload.items,
        page:{
          total:payload.totalCount ||payload.total,
          pageSize,
          current:payload.currentPage || Math.ceil((payload.start+1)/pageSize)
        }
      }
    },
    saveList:(state,{payload})=>{
      return {
        ...state,
        // items:payload.items,
        page:{
          total:payload.totalCount,
          current:payload.currentPage
        }
      }
    },
    saveItem:(state,{payload})=>{
      return {
        ...state,
        item:payload
      }
    },
    deleteItem:(state,{payload})=>{
      return {
        ...state,
        item:{}
      }
    }
  }
}
