(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('redux-orm'), require('redux'), require('react-redux'), require('react-intl')) :
  typeof define === 'function' && define.amd ? define(['exports', 'redux-orm', 'redux', 'react-redux', 'react-intl'], factory) :
  (factory((global.CRUD = {}),global.reduxOrm,global.redux,global.reactRedux,global.reactIntl));
}(this, (function (exports,reduxOrm,redux,reactRedux,reactIntl) { 'use strict';

  reduxOrm.ORM.prototype.getDatabase = function getDatabase() {
    this.db = this.createDatabase(this.generateSchemaSpec());
    return this.db;
  };

  var orm = new reduxOrm.ORM({// createDatabase:createDatabase
  });
  var emptyDBState = orm.getEmptyState();
  var session = orm.session(emptyDBState);

  /**
   *   getItem by key
   *
   *
   **/

  function reducerItemSelector$$1(reducer, modelName, key) {
    return reduxOrm.createSelector(orm, function (session$$1) {
      return session$$1[modelName].idExists(key) ? session$$1[modelName].withId(key) : session$$1[modelName].create({});
    })(reducer);
  }
  /**
   *   getList all
   *
   *
   **/

  function reducerListSelector$$1(reducer, modelName) {
    return reduxOrm.createSelector(orm, function (session$$1) {
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
    connect: reactRedux.connect,
    injectIntl: reactIntl.injectIntl,
    reducerListSelector: reducerListSelector$$1,
    reducerItemSelector: reducerItemSelector$$1
  });



  var index$1 = /*#__PURE__*/Object.freeze({

  });

  // export * as actions from './action'

  exports.container = index;
  exports.router = index$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
