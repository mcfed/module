import { actionChannel,take, put, call, fork, cancel, cancelled } from 'redux-saga/effects'
import { fetchReq,fetchRes,fetchParams} from '../../middleware/fetching'
import delay from '@redux-saga/delay-p'


export function* polling(action,saga,args,time){
  try{
    while(true){
      yield call(saga,...args.concat(action))
      yield call(delay,time)
    }
  } finally {
    // if (yield cancelled())
    //   console.log("cancelled")
  }
}
export function* takeAction(action,pattern){
  return action.payload===pattern
}

export function* forkPolling(time, pattern, saga, ...args) {
  const pollingChannel = yield actionChannel(pattern)
  while ( true ) {
    const action = yield take(pollingChannel)
    const pollingTask = yield fork(polling,action,saga,args,time)
    yield take(takeAction,pattern)
    yield cancel(pollingTask)
  }
}


export function* forkLoading(pattern, saga, ...args){
  const channel = yield actionChannel(pattern)
  while ( true ) {
    const action = yield take(channel)
    yield put(fetchParams(action))
    yield put(fetchReq(action))
    yield call(saga,...args.concat(action))
    yield put(fetchRes(action))
  }
}

export const takePolling = (time,pattern, saga, ...args) => fork(forkPolling,time,pattern,saga,...args)
export const takeLoading = (pattern, saga, ...args) => fork(forkLoading,pattern,saga,...args)
