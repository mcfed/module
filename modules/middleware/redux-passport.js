const FETCH_LOGINING="@@MIDDLEWARE/FETCH_LOGINING"
const FETCH_LOGOUTING="@@MIDDLEWARE/FETCH_LOGOUTING"
const FETCH_CONFIG="@@MIDDLEWARE/FETCH_CONFIG"

export function fetchLogining(payload){

  return {
    type:FETCH_LOGINING,
    payload:payload
  }
}

export function fetchLogouting(payload){
  return {
    type:FETCH_LOGOUTING,
    payload:payload
  }
}

export function fetchConfig(payload){
  return {
    type:FETCH_CONFIG,
    payload:payload
  }
}

export default function createMessage({loginingProcess,logoutingProcess,globalProcess}) {
  return ({ getState, dispatch }) => (next) =>
    (action) => {
      if (FETCH_LOGINING===action.type) {
        loginingProcess && loginingProcess.call(this,dispatch,action.payload)
      }else if(FETCH_LOGOUTING===action.type){
        logoutingProcess && logoutingProcess.call(this,dispatch,action.payload)
      }else if(FETCH_CONFIG ==action.type){
        // console.log("globalProcess",globalProcess)
        globalProcess && globalProcess.call(this,dispatch,action.payload)
      }
      return next(action);
    };
}
