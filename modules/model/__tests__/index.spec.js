import orm,{session,createReducer} from '../index'
import BaseModel from '../BaseModel'
import {attr} from '../Attr'

describe('ORM initial', () => {
  //此处MOCK fetch  可以考虑与api  共用
  it('should be listAction',(done)=>{

    class TestModel extends BaseModel{
      static modelName="TestModel"
      static fields={}
    }

    Object.assign(TestModel.fields,BaseModel.fields,{
        id: attr(),
        serverName:attr(),
        serverStatus:attr(),
        serverIp:attr(),
        serverPort:attr()
    })
    orm.register(TestModel)

    let session = orm.session({
      TestModel:{
        items:[],
        itemsById:{},
        meta:{}
      }
    })
    const testModel = session.TestModel
    testModel.create({
      id:"abc",
      serverName:"abd",
      serverStatus:"1",
      serverIp:"127.0.0.1",
      serverPort:"8080"
    })
    console.log(testModel.withId("abc").serverStatus)
    // console.log(testModel.all().toModelArray())
    // console.log(test.serverName)
    done()
  })
})
