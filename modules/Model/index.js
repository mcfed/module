export ORM,{createReducer } from 'redux-orm'

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
export default orm
