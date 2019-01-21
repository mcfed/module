 function globalReducer(state = {
   dicts: {},
   bizCodes: {}
 }, { type, payload }) {
   const { fetching, params } = state
   switch (type) {
     case '@@MIDDLEWARE/UPGRADE_DICT':
       return {
         ...state,
         dicts: payload
       }
     case '@@MIDDLEWARE/UPGRADE_BIZCODE':
       return {
         ...state,
         bizCodes: payload
       }
     case '@@MIDDLEWARE/UPGRADE_USER':
       return {
         ...state,
         // fetching: new Map(fetching.set(payload.type, payload.payload))
       }
     case '@@MIDDLEWARE/UPGRADE_AUTHS':
       return {
         ...state,
         // fetching: new Map(fetching.set(payload.type, payload.payload))
       }
     default:
       return state
   }
   //  return state
 }

 export default function moduleMiddleware() {
   return ({ getState, dispatch }) => (next) =>
     (action) => {
       next(action)
     };
 }

 export { globalReducer }