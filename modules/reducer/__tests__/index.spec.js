import {defaultReducer} from '../index'

describe("reducerActionCreator", () => {
  const actions={
    saveParams:"saveParams",
    saveList:"saveList",
    saveItem:"saveItem",
    deleteItem:"deleteItem"
  }
  it("reducerActionCreator", (done) => {
    // expect(defaultReducer()).toHaveProperty('saveParams')
    expect(defaultReducer()).toHaveProperty('saveList')
    expect(defaultReducer()).toHaveProperty('saveItem')
    expect(defaultReducer()).toHaveProperty('deleteItem')
    done()
  });
});
