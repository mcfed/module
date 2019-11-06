const SHOW_SUCCESS = "@@MIDDLEWARE/SHOW_SUCCESS";
const SHOW_ERROR = "@@MIDDLEWARE/SHOW_ERROR";
const SHOW_COMFIRM = "@@MIDDLEWARE/SHOW_COMFIRM";
const SHOW_MESSAGE = "@@MIDDLEWARE/SHOW_MESSAGE";

export function showSuccess(payload) {
  return {
    type: SHOW_SUCCESS,
    payload: payload
  };
}

export function showError(payload) {
  return {
    type: SHOW_ERROR,
    payload: payload
  };
}

export function showComfirm(payload) {
  return {
    type: SHOW_COMFIRM,
    payload: payload
  };
}

export function showMessage(payload) {
  return {
    type: SHOW_MESSAGE,
    payload: payload
  };
}

export default function createMessage(message) {
  return ({ getState, dispatch }) => next => action => {
    if (SHOW_SUCCESS === action.type) {
      message.success(action.payload || "操作成功");
    } else if (SHOW_ERROR === action.type) {
      message.error(action.payload);
    } else if (SHOW_COMFIRM === action.type) {
      message.comfirm(action.payload);
    } else if (SHOW_MESSAGE === action.type) {
      message.message(action.payload);
    }else{
      return next(action)
    }
    return next(action);
  };
}
