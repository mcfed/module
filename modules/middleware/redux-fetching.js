const FETCH_PARAMS="@@MIDDLEWARE/FETCH_PARAMS"
const FETCH_REQ="@@MIDDLEWARE/FETCH_REQ"
const FETCH_RES="@@MIDDLEWARE/FETCH_RES"


export function fetchReq(payload){
  return{
    type:FETCH_REQ,
    payload:payload
  }
}

export function fetchRes(payload){
  return{
    type:FETCH_RES,
    payload:payload
  }
}

export function fetchParams(payload){
  return{
    type:FETCH_PARAMS,
    payload:payload
  }
}


 function fetchingReducer(state = {
   fetching: new Map(),
   params: new Map()
 }, { type, payload }) {
   const { fetching, params } = state
   switch (type) {
     case FETCH_PARAMS:
       return {
         ...state,
         params: params.set(payload.type, payload.payload)
       }
     case FETCH_REQ:
       return {
         ...state,
         fetching: new Map(fetching.set(payload.type, payload.payload))
       }
     case FETCH_RES:
       return {
         ...state,
         fetching: new Map(fetching.set(payload.type, payload.payload))
       }
     default:
       return state
   }
   //  return state
 }

 export default function createFetching({ fetchRegexp, paramsRegexp } /*fetchRegexp:regexp,paramsRegexp:regexp */ ) {
   return ({ getState, dispatch }) => (next) =>
     (action) => {
       /*
       if (new RegExp(paramsRegexp).test(action.type)) {
         dispatch({ type: 'FETCH_PARAMS', payload: action })
       }
       */
       // if (new RegExp(fetchRegexp).test(action.type)) {
       //   setTimeout(function(){
       //     dispatch({ type: '@@MIDDLEWARE/FETCH_REQ', payload: { type: action.type, payload: true } })
       //   },0)
       //   //const returnValue = next(action);
       //   next(action);
       //   setTimeout(function(){
       //     dispatch({ type: "@@MIDDLEWARE/FETCH_SUCCESS", payload: { type: action.type, payload: false } });
       //   },0)
       // } else {
         return next(action)
       // }

     };
 }

 export { fetchingReducer }
