import {defaultSaga as sagaCreator } from '../index'
import { cloneableGenerator } from 'redux-saga/utils'
import { call,put } from 'redux-saga/effects'
import {fetchReq,fetchRes,fetchParams,showError,showSuccess} from '../../middleware'
import * as ModuleRouter from '../../router'
const { goBack } = ModuleRouter

describe("测试sagaCreator", () => {
    const Api={
      fetchItem:jest.fn(),
      fetchList:jest.fn(),
      fetchPage:jest.fn(),
      fetchSave:jest.fn(),
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
    const saga =sagaCreator(actions,Api)
    it("sagaCreator", (done) => {
      expect(saga).toHaveProperty('fetchItem')
      expect(saga).toHaveProperty('fetchPage')
      expect(saga).toHaveProperty('fetchList')
      expect(saga).toHaveProperty('fetchSave')
      expect(saga).toHaveProperty('fetchDelete')
      done()
    });
    it.skip('saga refreshPage success',(done)=>{

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
      let clone =gen.clone()
      expect(clone.next({code:500,message:undefined}).value).toEqual(put(showError()))
      done()
    })

});
