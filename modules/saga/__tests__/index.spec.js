import {defaultSaga as sagaCreator, takeSagas } from '../index'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import { call, put, takeEvery, select,fork } from 'redux-saga/effects'
import {fetchReq,fetchRes,fetchParams,showError,showSuccess} from '../../middleware'
import * as ModuleAction from '../../action'
import * as ModuleRouter from '../../router'
import { takePolling } from '../effects'
const { goBack } = ModuleRouter
const { createDefineActions } = ModuleAction;

describe("测试sagaCreator", () => {
    const Api={
      fetchItem:jest.fn(),
      fetchList:jest.fn(),
      fetchPage:jest.fn(),
      fetchSave:jest.fn(),
      fetchUpdate:jest.fn(),
      fetchDelete:jest.fn()
    }
    const actions={
      saveItem:function(payload){
        return {
          type:'saveItem',
          payload:payload
        }
      },
      saveList:function(payload){
        return {
          type:'saveItem',
          payload:payload
        }
      },
      savePage:function(payload){
        return {
          type:'saveItem',
          payload:payload
        }
      }
    }
    const saga =sagaCreator(actions,Api,"test")
    it("sagaCreator", (done) => {
      expect(saga).toHaveProperty('fetchItem')
      expect(saga).toHaveProperty('fetchPage')
      expect(saga).toHaveProperty('fetchList')
      expect(saga).toHaveProperty('fetchSave')
      expect(saga).toHaveProperty('fetchDelete')
      expect(saga).toHaveProperty('fetchSaveOrUpdate')
      done()
    });
    it('saga refreshPage success',()=>{
      const pageAction={
        type:'test/fetchPage',
        payload:{a:1},
        meta:{
          sagaAction:true
        }
      }
      const gen = cloneableGenerator(saga.refreshPage)({payload:{}})
      gen.next().value.payload.selector({
        test:{},
        fetchingReducer:{
          params:new Map()
        }
      })
      expect(gen.next({ a: 1 }).value).toEqual(put(fetchParams(pageAction)))
      expect(gen.next({ a: 1 }).value).toEqual(put(fetchReq(pageAction)))
      expect(gen.next({ a: 1 }).value).toEqual(fork(saga.fetchPage,pageAction))
      // expect(gen.next().value).toEqual(select())
    })
    it.skip('saga refreshPage error',(done)=>{

    })
    it('saga fetchPage success',(done)=>{
      const gen = cloneableGenerator(saga.fetchPage)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchList,{}))
      let clone =gen.clone()
      expect(clone.next({code:0,data:{}}).value).toEqual(put(actions.savePage({})))
      done()
    })

    it('saga fetchPage error',(done)=>{
      const gen = cloneableGenerator(saga.fetchPage)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchList,{}))
      let clone =gen.clone()
      expect(clone.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })

    it('saga fetchItem success',(done)=>{
      const gen = cloneableGenerator(saga.fetchItem)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchItem,{}))
      let clone =gen.clone()
      expect(clone.next({code:0,data:{}}).value).toEqual(put(actions.saveItem({})))
      done()
    })

    it('saga fetchItem error',(done)=>{
      const gen = cloneableGenerator(saga.fetchItem)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchItem,{}))
      let clone =gen.clone()
      expect(clone.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })

    it('saga fetchList success',(done)=>{
      const gen = cloneableGenerator(saga.fetchList)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchList,{}))
      let clone =gen.clone()
      expect(clone.next({code:0,data:{}}).value).toEqual(put(actions.saveList({})))
      done()
    })

    it('saga fetchList error',(done)=>{
      const gen = cloneableGenerator(saga.fetchList)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchList,{}))
      let clone =gen.clone()
      expect(clone.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })

    it('saga fetchSave success',(done)=>{
      const gen = cloneableGenerator(saga.fetchSave)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchSave,{}))
      let clone =gen.clone()
      expect(clone.next({code:0,data:{}}).value).toEqual(put(actions.saveItem({})))
      expect(clone.next().value).toEqual(put(showSuccess()))
      expect(clone.next().value).toEqual(put(goBack()))
      done()
    })

    it('saga fetchSave error',(done)=>{
      const gen = cloneableGenerator(saga.fetchSave)({payload:{}})
      expect(gen.next().value).toEqual(call(Api.fetchSave,{}))
      let clone =gen.clone()
      expect(clone.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })

    it('saga fetchDelete success',(done)=>{
      const gen = cloneableGenerator(saga.fetchDelete)({payload:[]})
      expect(gen.next().value).toEqual(call(Api.fetchDelete,{ids:[]}))
      let clone =gen.clone()
      expect(clone.next({code:0,data:{}}).value).toEqual(put(showSuccess()))
      expect(clone.next().value).toEqual(call(saga.refreshPage))
      done()
    })

    it('saga fetchDelete error',(done)=>{
      const gen = cloneableGenerator(saga.fetchDelete)({payload:[]})
      expect(gen.next().value).toEqual(call(Api.fetchDelete,{ids:[]}))
      expect(gen.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })


    it('saga fetchSaveOrUpdate save success',(done)=>{
      const gen = cloneableGenerator(saga.fetchSaveOrUpdate)({payload:{id:undefined}})
      expect(gen.next().value).toEqual(call(Api.fetchSave,{}))
      expect(gen.next({code:0,data:{}}).value).toEqual(put(actions.saveItem({})))
      expect(gen.next().value).toEqual(put(showSuccess()))
      expect(gen.next().value).toEqual(put(goBack()))
      done()
    })

    it('saga fetchSaveOrUpdate save error',(done)=>{
      const gen = cloneableGenerator(saga.fetchSaveOrUpdate)({payload:{id:undefined}})
      expect(gen.next().value).toEqual(call(Api.fetchSave,{}))
      expect(gen.next({code:500,data:{}}).value).toEqual(put(showError()))
      done()
    })

    it('saga fetchSaveOrUpdate update success',(done)=>{
      const gen = cloneableGenerator(saga.fetchSaveOrUpdate)({payload:{id:1}})
      expect(gen.next().value).toEqual(call(Api.fetchUpdate,{id:1}))
      expect(gen.next({code:0,data:{}}).value).toEqual(put(actions.saveItem({})))
      expect(gen.next().value).toEqual(put(showSuccess()))
      expect(gen.next().value).toEqual(put(goBack()))
      done()
    })

    it('saga fetchSaveOrUpdate update error',(done)=>{
      const gen = cloneableGenerator(saga.fetchSaveOrUpdate)({payload:{id:1}})
      let clone =gen.clone()
      expect(clone.next().value).toEqual(call(Api.fetchUpdate,{id:1}))
      expect(clone.next({code:500,data:{}}).value).toEqual(put(showError()))
      done()
    })

    it('takeSagas',()=>{
      const sagaTypes=createDefineActions(saga,"test")
      const gen = cloneableGenerator(takeSagas)(sagaTypes,saga)
      expect(gen.next().value).toEqual(takeEvery('test/refreshPage',saga.refreshPage))
      expect(gen.next().value).toEqual(takeEvery('test/fetchPage',saga.fetchPage))
    })

    it('takeSagas with optimize',()=>{
      const sagaTypes=createDefineActions(saga,"test")
      const gen = cloneableGenerator(takeSagas)(sagaTypes,saga,{fetchPage:takePolling})
      expect(gen.next().value).toEqual(takeEvery('test/refreshPage',saga.refreshPage))
      expect(gen.next().value).toEqual(takePolling('test/fetchPage',saga.fetchPage))
    })
});
