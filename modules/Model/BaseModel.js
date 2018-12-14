import {Model} from 'redux-orm'
import {attr} from './Attr'

export default class BaseModel extends Model {
  toJSON(){
    return this._fields
  }
}

BaseModel.reducer=function(action, modelClass, session) {
    const modelName=modelClass.modelName.toUpperCase()
     switch (action.type) {
     case `${modelName}/CREATE_ITEM`:
        modelClass.create(action.payload);
        break;
     case `${modelName}/SAVE_LIST`:
        modelClass.all().toModelArray().forEach((model)=>model.delete())
        action.payload.items.map((m)=>modelClass.create(m))
        // console.dir(modelClass)
        break;
     case `${modelName}/UPDATE_ITEM`:
        modelClass.withId(action.payload.id).update(action.payload);
        break;
     case `${modelName}/UPSERT_ITEM`:
        modelClass.upsert(action.payload);
        break;
     case `${modelName}/REMOVE_ITEM`:
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
