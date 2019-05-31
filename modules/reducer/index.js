
/**
 * @module Reducer
 */

export { handleActions as reducerCreator } from 'redux-actions'

/**
 * megerActionReducer - description
 *
 * @param  {type} reducers     description
 * @param  {type} reducerTypes description
 * @return {type}              description
 */
export function megerActionReducer(reducers,reducerTypes){
  const newReducer={}
  for(var r in reducers){
    newReducer[reducerTypes[r]]=reducers[r]
  }
  return newReducer
}

/**
 *默认数据状态
 */
export const defaultState={
    items: [],
    item: {},
    //page meta
    page:{
      total: 0,
      current: 1
    }
}


/**
 * defaultReducer - 默认的reducer
 *
 * @return {type}  包含一些操作的reducer
 */
export function defaultReducer(){
  return {
    /**
     * 返回默认的statr
     */

    inital:(state,{payload})=>{
       return defaultState
    },

    /**
     * 保存list页面分页信息容错
     */
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

    /**
     *  保存list页面分页信息
     */
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

    /**
     * 保存item
     */
    saveItem:(state,{payload})=>{
      return {
        ...state,
        item:payload
      }
    },

    /**
     * 删除item
     */
    deleteItem:(state,{payload})=>{
      return {
        ...state,
        item:{}
      }
    }
  }
}
