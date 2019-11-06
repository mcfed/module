
import { takeLoading, takePolling, polling, takeAction, forkPolling, forkLoading} from '../index'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import createSagaMiddleware  from 'redux-saga'
import { actionChannel, take,put,call,fork, cancel,delay,cancelled} from 'redux-saga/effects'

import { fetchReq,fetchRes,fetchParams} from '../../../middleware/fetching'

const sagaMiddleware = createSagaMiddleware()

describe("takeLoading generator", () => {

    const action={
      type:"actionType",
      payload:{
        a:1
      }
    }
    function* generator(action){
      console.log(1)
    }
  it('forkLoading',()=>{
    const gen = cloneableGenerator(forkLoading)(action.type, generator)
    expect(gen.next().value).toEqual(actionChannel(action.type))
    expect(gen.next(action.type).value).toEqual(take(action.type))
    expect(gen.next(action).value).toEqual(put(fetchParams(action)))
    expect(gen.next(action).value).toEqual(put(fetchReq(action)))
    expect(gen.next(action).value).toEqual(call(generator,action))
    expect(gen.next(action).value).toEqual(put(fetchRes(action)))
  })

  it('takeLoading',()=>{
    const result=takeLoading(action.type, generator)
    expect(result).toEqual({
      '@@redux-saga/IO': true,
      combinator: false,
      type: 'FORK',
      payload: {
        context: null,
        fn: forkLoading,
        args: ['actionType', generator]
      }
    })
  })

  it('takePolling',()=>{
    const result=takePolling(10, action.type, generator)
    expect(result).toEqual({
      '@@redux-saga/IO': true,
      combinator: false,
      type: 'FORK',
      payload: {
        context: null,
        fn: forkPolling,
        args: [10, 'actionType', generator]
      }
    })
  })

  it('forkPolling',()=>{
    const gen = cloneableGenerator(forkPolling)(10, action.type, generator)
    expect(gen.next().value).toEqual(actionChannel(action.type))
    expect(gen.next(action.type).value).toEqual(take(action.type))
    expect(gen.next(action.type).value).toEqual(fork(polling,action.type,generator,[],10))
    expect(gen.next().value).toEqual(take(takeAction))
    expect(gen.next().value).toEqual(cancel())
  })

  it('polling',()=>{
    const gen = cloneableGenerator(polling)(action,generator,[],10)
    expect(gen.next().value).toEqual(call(generator,action))
    expect(gen.next().value).toEqual(delay(10))
    // expect(gen.next().value).toEqual(cancelled())
  })

  it('takeAction',()=>{
    const gen = cloneableGenerator(takeAction)(action,action.payload)
    expect(gen.next().value).toEqual(true)
  })

})
