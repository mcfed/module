import {defaultReducer,defaultState,reducerCreator,megerActionReducer} from '../index'

import {createDefineActions} from '../../action'

describe("reducerActionCreator", () => {
  let reducer;
  const reducerActions =createDefineActions(defaultReducer(),"test")
  beforeEach(() => {
    reducer = reducerCreator(megerActionReducer(defaultReducer(),reducerActions),defaultState)
  })

  it("reducerActionCreator", (done) => {
    // expect(defaultReducer()).toHaveProperty('saveParams')
    // console.log(reducerActions)
    expect(defaultReducer()).toHaveProperty('savePage')
    expect(defaultReducer()).toHaveProperty('saveList')
    expect(defaultReducer()).toHaveProperty('saveItem')
    expect(defaultReducer()).toHaveProperty('deleteItem')
    done()
  });

  it('savePage method 传统分页页码',(done)=>{
    const payload={
      pageSize:10,
      totalCount:101,
      currentPage:2,
    }
    expect(reducer(defaultState,reducerActions.savePage(payload)))
      .toEqual(Object.assign({},defaultState,{
        page:{
          total:payload.totalCount,
          pageSize:payload.pageSize,
          current:payload.currentPage
        }
      })
      )
    done()
  })

  it('savePage method 区间分页',(done)=>{
    const payload={
      start:10,
      end:19,
      total:30,
    }
    const pageSize= payload.end+1-payload.start
    expect(reducer(defaultState,reducerActions.savePage(payload)))
      .toEqual(Object.assign({},defaultState,{
        page:{
          total:payload.total,
          pageSize:pageSize,
          current:Math.ceil(payload.start/pageSize)
        }
      })
      )
    done()
  })

  it('saveList method 区间分页',(done)=>{
    const payload={
      totalCount:10,
      currentPage:1
    }

    expect(reducer(defaultState,reducerActions.saveList(payload)))
      .toEqual(Object.assign({},defaultState,{
        page:{
          total:payload.totalCount,
          current:payload.currentPage
        }
      }))
    done()
  })

  it('saveItem method 保存item',(done)=>{
    const payload={}
    expect(reducer(defaultState,reducerActions.saveItem(payload)))
      .toEqual(Object.assign({},defaultState,{
        item:payload
      }))
    done()
  })

  it('saveItem method deleteItem',(done)=>{
    const payload={}
    expect(reducer(defaultState,reducerActions.deleteItem(payload)))
      .toEqual(Object.assign({},defaultState,{
        item:payload
      }))
    done()
  })

});
