import {Model} from 'redux-orm'
import {attr} from './Attr'

export default class BaseModel extends Model {

  _initFields(props) {
      var _this = this;
      // this._fields = Object.assign({}, props);
      this._fields = Object.assign({}, props);
      for (var p in props)  {
        let fieldName = p
          // console.log(fieldName,!(fieldName in _this),!(fieldName in this.getClass().fields))
          if (!(fieldName in _this)=== false && !(fieldName in this.getClass().fields)=== false) {
              Object.defineProperty(_this, fieldName, {
                  get: function get() {
                      return _this._fields[fieldName];
                  },
                  set: function set(value) {
                      return _this.set(fieldName, value);
                  },
                  configurable: true,
                  enumerable: true
              });
          }else{
            Object.defineProperty(_this, fieldName, {
                get: function get() {
                    return `please register the property before using：${fieldName} -->${this.getClass().modelName}`
                },
                set: function set(value) {
                    console.info( `please register the property before using：${fieldName} -->${this.getClass().modelName}`)
                    // return _this.set(fieldName, value);
                    return null
                },
                configurable: true,
                enumerable: true
            });
          }
      }
      // });
  };
  toData(){
    return this._fields
  }
}

BaseModel.reducer=function(action, modelClass, session) {
    const modelName=modelClass.modelName
     switch (action.type) {
     case `${modelName}/newItem`:
        modelClass.create(action.payload);
        break;

     case `${modelName}/savePage`:
        modelClass.all().toModelArray().forEach((model)=>model.delete())
        action.payload.items.map((m)=>modelClass.create(m))
        break;
     case `${modelName}/saveList`:
        action.payload.items.map((m)=>modelClass.create(m))
        break;
     case `${modelName}/updateItem`:
        modelClass.withId(action.payload.id).update(action.payload);
        break;
     case `${modelName}/saveItem`:
        modelClass.upsert(action.payload);
        break;
     case `${modelName}/deleteItem`:
        const model = modelClass.withId(action.payload);
        model.delete();
        break;
      default:
      //  console.log(modelClass,action.type)
     }
     return session.state;
 }
BaseModel.modelName='BaseModel'
BaseModel.fields={
  id: attr(),
}
