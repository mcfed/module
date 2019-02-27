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
      return {
        ...state,
        // items:payload.items,
        total:payload.totalCount,
        current:payload.currentPage
      }
    },
    saveList:(state,{payload})=>{
      return {
        ...state,
        // items:payload.items,
        total:payload.totalCount,
        current:payload.currentPage
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
