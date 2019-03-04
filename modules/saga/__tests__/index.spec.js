import {defaultSaga as sagaCreator } from '../index'

describe("测试sagaCreator", () => {
    const Api={
      fetchItem:jest.fn(),
      fetchList:jest.fn(),
      fetchPage:jest.fn(),
      fetchSave:jest.fn(),
      fetchDelete:jest.fn()
    }
    const actions={
      saveItem:jest.fn(),
      saveList:jest.fn(),
      deleteItem:jest.fn(),
    }
    it("sagaCreator", (done) => {
      expect(sagaCreator(actions,Api)).toHaveProperty('fetchItem')
      expect(sagaCreator(actions,Api)).toHaveProperty('fetchPage')
      expect(sagaCreator(actions,Api)).toHaveProperty('fetchList')
      expect(sagaCreator(actions,Api)).toHaveProperty('fetchSave')
      expect(sagaCreator(actions,Api)).toHaveProperty('fetchDelete')
      done()
    });
});
