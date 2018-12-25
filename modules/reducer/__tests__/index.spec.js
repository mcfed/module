import {reducerActionCreator} from '../index'

describe("reducerActionCreator", () => {
  const actions={
    saveParams:"saveParams",
    saveList:"saveList",
    saveItem:"saveItem",
    deleteItem:"deleteItem"
  }
  it("reducerActionCreator", (done) => {
    expect(reducerActionCreator(actions)).toHaveProperty('saveParams')
    expect(reducerActionCreator(actions)).toHaveProperty('saveList')
    expect(reducerActionCreator(actions)).toHaveProperty('saveItem')
    expect(reducerActionCreator(actions)).toHaveProperty('deleteItem')
    done()
  });
});
