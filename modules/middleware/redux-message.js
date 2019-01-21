import {message} from 'antd'
export default function createMessage() {
  return ({ getState, dispatch }) => (next) =>
    (action) => {
      if ("@@MIDDLEWARE/SHOW_SUCCESS"===action.type) {
          message.success(action.payload)
      }else if("@@MIDDLEWARE/SHOW_ERROR"===action.type){
          message.error(action.payload)
      }
      return next(action);
    };
}
