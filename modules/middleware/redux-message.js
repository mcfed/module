const SHOW_SUCCESS="@@MIDDLEWARE/SHOW_SUCCESS"
const SHOW_ERROR="@@MIDDLEWARE/SHOW_ERROR"

export function showSuccess(payload){
  return {
    type:SHOW_SUCCESS,
    payload:payload
  }
}

export function showError(payload){
  return {
    type:SHOW_Error,
    payload:payload
  }
}

export default function createMessage(message) {
  return ({ getState, dispatch }) => (next) =>
    (action) => {
      if (SHOW_SUCCESS===action.type) {
          message.success(action.payload)
      }else if(SHOW_ERROR===action.type){
          message.error(action.payload)
      }
      return next(action);
    };
}
