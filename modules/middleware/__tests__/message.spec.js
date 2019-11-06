
import * as message from '../message';

describe('test action type', () => {
  it('showSuccess', () => {
    const expected = {
      type: "@@MIDDLEWARE/SHOW_SUCCESS",
      payload: {}
    };
    expect(message.showSuccess({})).toEqual(expected);
  });

  it('showError', () => {
    const expected = {
      type: "@@MIDDLEWARE/SHOW_ERROR",
      payload: {}
    };
    expect(message.showError({})).toEqual(expected);
  });
  it('showComfirm', () => {
    const expected = {
      type: "@@MIDDLEWARE/SHOW_COMFIRM",
      payload: {}
    };
    expect(message.showComfirm({})).toEqual(expected);
  });
  it('showMessage', () => {
    const expected = {
      type: "@@MIDDLEWARE/SHOW_MESSAGE",
      payload: {}
    };
    expect(message.showMessage({})).toEqual(expected);
  });
});
describe('middleware run  type', () => {
  const initialState = {};
  const next = jest.fn();
  const mockStore = {
    getState: jest.fn(() => initialState),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  };
  const messageMock = {
    success:jest.fn(),
    error:jest.fn(),
    comfirm:jest.fn(),
    message:jest.fn(),
  }

  it('middleware showSuccess', () => {
    message.default(messageMock)(mockStore)(next)(message.showSuccess())
    expect(messageMock.success).toHaveBeenCalled()
  });



  it('middleware showError', () => {
    message.default(messageMock)(mockStore)(next)(message.showError())
    expect(messageMock.error).toHaveBeenCalled()
  });
  it('middleware showConfirm', () => {
    message.default(messageMock)(mockStore)(next)(message.showComfirm())
    expect(messageMock.comfirm).toHaveBeenCalled()
  });
  it('middleware showMessage', () => {
    message.default(messageMock)(mockStore)(next)(message.showMessage())
    expect(messageMock.message).toHaveBeenCalled()
  });

  it('middleware showMessage', () => {
    message.default(messageMock)(mockStore)(next)({type:undefined})
    expect(next).toHaveBeenCalled()
  })
});
