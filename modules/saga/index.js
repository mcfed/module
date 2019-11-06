
/**
 * @module Saga
 */

import * as effects from 'redux-saga/effects'
export * as effects from 'redux-saga/effects'
import {fetchReq,fetchRes,fetchParams,showError,showSuccess} from '../middleware'
import * as ModuleRouter from '../router'
export { takePolling, takeLoading} from './effects'
const { goBack } = ModuleRouter


/**
 * defaultSaga - 通用saga方法，扩充原有的actions
 *
 * @param  {object} actions   原有的actions
 * @param  {object} Api       请求层
 * @param  {string} namespace 命名空间
 * @return {object}           扩充后的actions
 */
export function defaultSaga(actions,Api,namespace){
  const saga= {
    /**
     * refreshPage - 刷新页面方法
     *
     * @param  {object} action action对象
     * @return {object}        ----
     */

    refreshPage:function* (action){
      const actionType=[namespace,"fetchPage"].join("/")
      const params = yield effects.select((state)=>{
       return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(actionType))
      })
      // console.log(saga.fetchList,saga.fetchList())
      //临时方案后续处理
      const pageAction={
        type:actionType,
        payload:params,
        meta:{sagaAction:true}
      }
      yield effects.put(fetchParams(pageAction))
      yield effects.put(fetchReq(pageAction))
      yield effects.fork(saga.fetchPage,pageAction)
    },
    /**
     * fetchPage - 请求列表数据方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchPage: function* (action) {
      const result = yield effects.call(Api.fetchList, action.payload);
      if(result.code === 0){
        yield effects.put(actions.savePage(result.data));
      }else{
        yield effects.put(showError(result.message))
      }
    },
    /**
     * fetchItem - 请求item数据方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchItem: function* (action){
      const result = yield effects.call(Api.fetchItem, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
      } else {
        yield effects.put(showError(result.message))
      }
    },
    /**
     * fetchList - 同fetchPage方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchList: function* (action) {
      const result = yield effects.call(Api.fetchList, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveList(result.data));
      }else{
        yield effects.put(showError(result.message))
      }
    },
    /**
     * fetchSave - 表单提交保存方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchSave: function* (action){
      const result = yield effects.call(Api.fetchSave, action.payload);
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
        yield effects.put(showSuccess())
        yield effects.put(goBack())
      }else{
        yield effects.put(showError(result.message))
      }
    },
    /**
     * fetchSaveOrUpdate - 表单保存或更新方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchSaveOrUpdate: function* (action){
      let result
      if (action.payload.id) {
        result = yield effects.call(Api.fetchUpdate, action.payload)
      } else {
        result = yield effects.call(Api.fetchSave, action.payload)
      }
      if(result.code === 0){
        yield effects.put(actions.saveItem(result.data));
        yield effects.put(showSuccess())
        yield effects.put(goBack())
      }else{
        yield effects.put(showError(result.message))
      }
    },
    /**
     * fetchDelete - 删除方法
     *
     * @param  {object} action action对象
     * @return {type}        ----
     */

    fetchDelete: function* (action){
      // console.log(action.payload)
      const payload = {ids:[].concat(action.payload)}
      const result = yield effects.call(Api.fetchDelete,payload);
      if(result.code === 0){
        yield effects.put(showSuccess())
        yield effects.call(saga.refreshPage)

      }else{
        yield effects.put(showError(result.message))
      }
    }
  }

  return saga
}

/**
 * anonymous function - 监听未来的actions
 *
 * @param  {object} sagaTypes   redux-actions创建后的actions（带命名空间）
 * @param  {object} saga        actions对象（默认saga方法和页面个性化saga集合）
 * @param  {type} optimize={} description
 * @return {type}             ----
 */
export function *takeSagas(sagaTypes,saga,optimize={}){
  for(var s in saga){
    if(optimize[s]){
      yield optimize[s](sagaTypes[s].toString(),saga[s])
    }else{
      yield effects.takeEvery(sagaTypes[s].toString(),saga[s])
    }
  }
}
