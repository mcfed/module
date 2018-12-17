import { ORM, createSelector } from 'redux-orm';
import 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

ORM.prototype.getDatabase = function getDatabase() {
  this.db = this.createDatabase(this.generateSchemaSpec());
  return this.db;
};

var orm = new ORM({// createDatabase:createDatabase
});
var emptyDBState = orm.getEmptyState();
var session = orm.session(emptyDBState);

/**
 *   getItem by key
 *
 *
 **/

function reducerItemSelector$$1(reducer, modelName, key) {
  return createSelector(orm, function (session$$1) {
    return session$$1[modelName].idExists(key) ? session$$1[modelName].withId(key) : session$$1[modelName].create({});
  })(reducer);
}
/**
 *   getList all
 *
 *
 **/

function reducerListSelector$$1(reducer, modelName) {
  return createSelector(orm, function (session$$1) {
    return session$$1[modelName].all().filter(function (model) {
      return !(JSON.stringify(model) === "{}" || model.id === "");
    }).toModelArray(); // return session[modelName].all().toModelArray()
  })(reducer);
}

/*
export const function connectContainer({mapStateToProps,mapDispatchToProps},component){
  return connect(Object.assgin({},defaultMapStateToProps,mapStateToProps},
    Object.assgin({},defaultMapDispatchToProps,mapDispatchToProps}
    )(component)
}
*/

var index = /*#__PURE__*/Object.freeze({
  connect: connect,
  injectIntl: injectIntl,
  reducerListSelector: reducerListSelector$$1,
  reducerItemSelector: reducerItemSelector$$1
});



var index$1 = /*#__PURE__*/Object.freeze({

});

// export * as actions from './action'

export { index as container, index$1 as router };
