 function fetchingReducer(state = {
   fetching: new Map(),
   params: new Map()
 }, { type, payload }) {
   const { fetching, params } = state
   switch (type) {
     case '@@MIDDLEWARE/FETCH_PARAMS':
       return {
         ...state,
         params: params.set(payload.type, payload.payload)
       }
     case '@@MIDDLEWARE/FETCH_REQ':
       return {
         ...state,
         fetching: new Map(fetching.set(payload.type, payload.payload))
       }
     case '@@MIDDLEWARE/FETCH_RES':
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
