import { actionChannel,take, put, call, fork, cancel, cancelled } from 'redux-saga/effects'
import {CANCEL_TASK} from '../../middleware/redux-module'
import { delay } from 'redux-saga'


function* polling(action,saga,args,time){
  try{
    while(true){
      yield call(saga,...args.concat(action))
      yield call(delay,time)
    }
  } finally {
    // if (yield cancelled())
      // console.log("cancelled")
  }
}

export const takePolling = (time,pattern, saga, ...args) => fork(function*() {
  const pollingChannel = yield actionChannel(pattern)
  // console.log(pollingChannel)
  while ( true ) {
    const action = yield take(pollingChannel)
    const pollingTask = yield fork(polling,action,saga,args,time)

    yield take(action =>{
      return action.payload===pattern
    })
    yield cancel(pollingTask)
  }
})
