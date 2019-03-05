import {orm,session,createReducer} from '../index'
import BaseModel from '../BaseModel'
import {attr} from '../Attr'

describe('ORM initial', () => {
  //此处MOCK fetch  可以考虑与api  共用
  class TestModel extends BaseModel{
    static modelName="TestModel"
    static fields={}
  }

  Object.assign(TestModel.fields,BaseModel.fields,{
      id: attr(),
      serverName:attr(),
      serverStatus:attr(),
      serverIp:attr({
        get:function(val){
          return "http://"+val
        }
      }),
      serverPort:attr(),
      serverAddress:attr({
        get:function(val,row){
          return [row.serverIp,row.serverPort].join(":")
        }
      }),
      port:attr('serverPort'),
      serverStatusStr:attr({
        fieldName:'serverStatus',
        get:function(val){
          return val==="1"?"启用":"禁用"
        }
      }),
      // serverInfo:attr({
      //   getDefault:{
      //     cpu:{},
      //     memory:{},
      //     disk:{}
      //   }
      // })

  })
  orm.register(TestModel)

  let session = orm.session({
    TestModel:{
      items:[],
      itemsById:{},
      meta:{}
    }
  })
  const Test = session.TestModel
  var testModel=Test.create({
    id:"abc",
    serverName:"abd",
    serverStatus:"1",
    serverIp:"127.0.0.1",
    serverPort:"8080",
    ip:"address"
  })

  it('testModel createModel',(done)=>{

    expect(testModel.serverName).toBe("abd")
    done()
  })

  it("testModel serverStatusStr",(done)=>{
    expect(testModel.serverStatusStr).toBe("启用")
    done()
  })

  it('testModel serverIp has value ',(done)=>{
    // console.log(testModel.serverIp)
    expect(testModel.serverIp).toBe("http://127.0.0.1")
    done()
  })

  it('testModel port <-serverPort ',(done)=>{
    expect(testModel.port).toBe("8080")
    done()
  })

  it('testModel serverAddress = {serverIp}:{serverPort}',(done)=>{
    expect(testModel.serverAddress).toBe("127.0.0.1:8080")
    done()
  })
  it('testModel serverName set',(done)=>{
    testModel.serverName="abc"
    let t1=Test.all().toModelArray()[0]
    // console.log(t1['serverAddress'])
    expect(t1.serverAddress).toBe("127.0.0.1:8080")
    done()
  })
})
