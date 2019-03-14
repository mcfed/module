import { ORM } from 'redux-orm'
export { createReducer } from 'redux-orm'
export {reducerItemSelector,reducerListSelector} from './reducerSelector'
export BaseModel from './BaseModel'
export Attr,{attr} from './Attr'

ORM.prototype.getDatabase = function getDatabase() {
  this.db = this.createDatabase(this.generateSchemaSpec());
  return this.db;
};
const orm = new ORM({
  // createDatabase:createDatabase
})
const emptyDBState = orm.getEmptyState()
const session = orm.session(emptyDBState)

export {orm,session}
