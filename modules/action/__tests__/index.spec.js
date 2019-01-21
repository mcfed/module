import { actionCreator,typesCreator,defaultTypes,actionsTypeCreator,createAction} from '../index'

describe("actions", () => {

  const namespace="test"
  it.skip("createTypes create custom type",()=>{
    const types=typesCreator(namespace,["CUSTOM_ACTION"])
    expect(types).toHaveProperty("CUSTOM_ACTION",[namespace,"CUSTOM_ACTION"].join("/"))
  })

  it.skip("createTypes create defaultTypes",()=>{
    const types=typesCreator(namespace,defaultTypes)
    expect(types).toHaveProperty("LIST_ACTION",[namespace,"LIST_ACTION"].join("/"))
    expect(types).toHaveProperty("SAVE_ITEM",[namespace,"SAVE_ITEM"].join("/"))
    expect(types).toHaveProperty("SAVE_ACTION",[namespace,"SAVE_ACTION"].join("/"))
    expect(types).toHaveProperty("SAVE_ITEM",[namespace,"SAVE_ITEM"].join("/"))
    expect(types).toHaveProperty("DELETE_ACTION",[namespace,"DELETE_ACTION"].join("/"))
    expect(types).toHaveProperty("DELETE_ITEM",[namespace,"DELETE_ITEM"].join("/"))
  })


  it.skip("actionsTypeCreator create custom type",()=>{
    const actions = actionsTypeCreator(namespace,["CUSTOM_ACTION"])
    expect(actions).toHaveProperty([namespace,"CUSTOM_ACTION"].join("/"))
    // expect(actions).toHaveProperty([namespace,"CUSTOM_ACTION"].join("/"),createAction([namespace,"CUSTOM_ACTION"].join("/")))
  })

  it.skip("actionCreator",()=>{
        const types=typesCreator(namespace,["CUSTOM_ACTION"])
        expect(actionCreator(types)).toHaveProperty([namespace,"CUSTOM_ACTION"].join("/"))
  })
});
