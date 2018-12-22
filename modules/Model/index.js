import {ORM} from 'redux-orm'

export {ORM,createReducer } from 'redux-orm'

ORM.prototype.getDatabase = function getDatabase() {
  this.db = this.createDatabase(this.generateSchemaSpec());
  return this.db;
};

export const orm = new ORM()
export const session = orm.session(orm.getEmptyState())

export default orm
