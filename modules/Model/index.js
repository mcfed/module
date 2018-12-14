import { ORM,createReducer } from 'redux-orm'
import {reducerItemSelector,reducerListSelector} from './reducerSelector'

ORM.prototype.getDatabase = function getDatabase() {
  this.db = this.createDatabase(this.generateSchemaSpec());
  return this.db;
};

const orm = new ORM({
  // createDatabase:createDatabase
})

const emptyDBState = orm.getEmptyState()
const session = orm.session(emptyDBState)


export {orm,session,reducerItemSelector,reducerListSelector,createReducer}
export default orm
