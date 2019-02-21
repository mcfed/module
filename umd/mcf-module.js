(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
	(factory((global.module = {}),global.PropTypes,global.React));
}(this, (function (exports,PropTypes,React) { 'use strict';

	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
	var React__default = 'default' in React ? React['default'] : React;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n.default || n;
	}

	var actions = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

	var onLocationChanged = exports.onLocationChanged = function onLocationChanged(location, action) {
	  return {
	    type: _get__('LOCATION_CHANGE'),
	    payload: {
	      location: location,
	      action: action
	    }
	  };
	};

	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

	var updateLocation = function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: _get__('CALL_HISTORY_METHOD'),
	      payload: {
	        method: method,
	        args: args
	      }
	    };
	  };
	};

	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = _get__('updateLocation')('push');
	var replace = exports.replace = _get__('updateLocation')('replace');
	var go = exports.go = _get__('updateLocation')('go');
	var goBack = exports.goBack = _get__('updateLocation')('goBack');
	var goForward = exports.goForward = _get__('updateLocation')('goForward');

	var routerActions = exports.routerActions = { push: _get__('push'), replace: _get__('replace'), go: _get__('go'), goBack: _get__('goBack'), goForward: _get__('goForward') };

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'LOCATION_CHANGE':
	      return LOCATION_CHANGE;

	    case 'CALL_HISTORY_METHOD':
	      return CALL_HISTORY_METHOD;

	    case 'updateLocation':
	      return updateLocation;

	    case 'push':
	      return push;

	    case 'replace':
	      return replace;

	    case 'go':
	      return go;

	    case 'goBack':
	      return goBack;

	    case 'goForward':
	      return goForward;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;
	});

	unwrapExports(actions);
	var actions_1 = actions.LOCATION_CHANGE;
	var actions_2 = actions.onLocationChanged;
	var actions_3 = actions.CALL_HISTORY_METHOD;
	var actions_4 = actions.push;
	var actions_5 = actions.replace;
	var actions_6 = actions.go;
	var actions_7 = actions.goBack;
	var actions_8 = actions.goForward;
	var actions_9 = actions.routerActions;
	var actions_10 = actions.__get__;
	var actions_11 = actions.__GetDependency__;
	var actions_12 = actions.__Rewire__;
	var actions_13 = actions.__set__;
	var actions_14 = actions.__ResetDependency__;
	var actions_15 = actions.__RewireAPI__;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var subscriptionShape = PropTypes.shape({
	  trySubscribe: PropTypes.func.isRequired,
	  tryUnsubscribe: PropTypes.func.isRequired,
	  notifyNestedSubs: PropTypes.func.isRequired,
	  isSubscribed: PropTypes.func.isRequired
	});
	var storeShape = PropTypes.shape({
	  subscribe: PropTypes.func.isRequired,
	  dispatch: PropTypes.func.isRequired,
	  getState: PropTypes.func.isRequired
	});

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	}

	var didWarnAboutReceivingStore = false;

	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }

	  didWarnAboutReceivingStore = true;
	  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	function createProvider(storeKey) {
	  var _Provider$childContex;

	  if (storeKey === void 0) {
	    storeKey = 'store';
	  }

	  var subscriptionKey = storeKey + "Subscription";

	  var Provider =
	  /*#__PURE__*/
	  function (_Component) {
	    _inheritsLoose(Provider, _Component);

	    var _proto = Provider.prototype;

	    _proto.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };

	    function Provider(props, context) {
	      var _this;

	      _this = _Component.call(this, props, context) || this;
	      _this[storeKey] = props.store;
	      return _this;
	    }

	    _proto.render = function render() {
	      return React.Children.only(this.props.children);
	    };

	    return Provider;
	  }(React.Component);

	  {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }

	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: PropTypes.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);
	  return Provider;
	}
	var Provider = createProvider();

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextType: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromError: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var FORWARD_REF_STATICS = {
	    '$$typeof': true,
	    render: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true
	};

	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
	        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try {
	                    // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	var invariant_1 = invariant;

	var reactIs_production_min$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.concurrent_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):60115,r=b?Symbol.for("react.lazy"):
	60116;function t(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}function u(a){return t(a)===l}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;
	exports.StrictMode=f;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return u(a)};exports.isConcurrentMode=u;exports.isContextConsumer=function(a){return t(a)===k};exports.isContextProvider=function(a){return t(a)===h};
	exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===m};exports.isFragment=function(a){return t(a)===e};exports.isProfiler=function(a){return t(a)===g};exports.isPortal=function(a){return t(a)===d};exports.isStrictMode=function(a){return t(a)===f};
	});

	unwrapExports(reactIs_production_min$2);
	var reactIs_production_min_1$1 = reactIs_production_min$2.typeOf;
	var reactIs_production_min_2$1 = reactIs_production_min$2.AsyncMode;
	var reactIs_production_min_3$1 = reactIs_production_min$2.ConcurrentMode;
	var reactIs_production_min_4$1 = reactIs_production_min$2.ContextConsumer;
	var reactIs_production_min_5$1 = reactIs_production_min$2.ContextProvider;
	var reactIs_production_min_6$1 = reactIs_production_min$2.Element;
	var reactIs_production_min_7$1 = reactIs_production_min$2.ForwardRef;
	var reactIs_production_min_8$1 = reactIs_production_min$2.Fragment;
	var reactIs_production_min_9$1 = reactIs_production_min$2.Profiler;
	var reactIs_production_min_10$1 = reactIs_production_min$2.Portal;
	var reactIs_production_min_11$1 = reactIs_production_min$2.StrictMode;
	var reactIs_production_min_12$1 = reactIs_production_min$2.isValidElementType;
	var reactIs_production_min_13$1 = reactIs_production_min$2.isAsyncMode;
	var reactIs_production_min_14$1 = reactIs_production_min$2.isConcurrentMode;
	var reactIs_production_min_15$1 = reactIs_production_min$2.isContextConsumer;
	var reactIs_production_min_16$1 = reactIs_production_min$2.isContextProvider;
	var reactIs_production_min_17$1 = reactIs_production_min$2.isElement;
	var reactIs_production_min_18$1 = reactIs_production_min$2.isForwardRef;
	var reactIs_production_min_19$1 = reactIs_production_min$2.isFragment;
	var reactIs_production_min_20$1 = reactIs_production_min$2.isProfiler;
	var reactIs_production_min_21$1 = reactIs_production_min$2.isPortal;
	var reactIs_production_min_22$1 = reactIs_production_min$2.isStrictMode;

	var reactIs_development$2 = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode alias is deprecated along with isAsyncMode
	var AsyncMode = REACT_CONCURRENT_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object);
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Profiler = Profiler;
	exports.Portal = Portal;
	exports.StrictMode = StrictMode;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isProfiler = isProfiler;
	exports.isPortal = isPortal;
	exports.isStrictMode = isStrictMode;
	  })();
	}
	});

	unwrapExports(reactIs_development$2);
	var reactIs_development_1$1 = reactIs_development$2.typeOf;
	var reactIs_development_2$1 = reactIs_development$2.AsyncMode;
	var reactIs_development_3$1 = reactIs_development$2.ConcurrentMode;
	var reactIs_development_4$1 = reactIs_development$2.ContextConsumer;
	var reactIs_development_5$1 = reactIs_development$2.ContextProvider;
	var reactIs_development_6$1 = reactIs_development$2.Element;
	var reactIs_development_7$1 = reactIs_development$2.ForwardRef;
	var reactIs_development_8$1 = reactIs_development$2.Fragment;
	var reactIs_development_9$1 = reactIs_development$2.Profiler;
	var reactIs_development_10$1 = reactIs_development$2.Portal;
	var reactIs_development_11$1 = reactIs_development$2.StrictMode;
	var reactIs_development_12$1 = reactIs_development$2.isValidElementType;
	var reactIs_development_13$1 = reactIs_development$2.isAsyncMode;
	var reactIs_development_14$1 = reactIs_development$2.isConcurrentMode;
	var reactIs_development_15$1 = reactIs_development$2.isContextConsumer;
	var reactIs_development_16$1 = reactIs_development$2.isContextProvider;
	var reactIs_development_17$1 = reactIs_development$2.isElement;
	var reactIs_development_18$1 = reactIs_development$2.isForwardRef;
	var reactIs_development_19$1 = reactIs_development$2.isFragment;
	var reactIs_development_20$1 = reactIs_development$2.isProfiler;
	var reactIs_development_21$1 = reactIs_development$2.isPortal;
	var reactIs_development_22$1 = reactIs_development$2.isStrictMode;

	var reactIs$1 = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development$2;
	}
	});
	var reactIs_1 = reactIs$1.isValidElementType;

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;

	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(store, parentSub, onStateChange) {
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  var _proto = Subscription.prototype;

	  _proto.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  _proto.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  _proto.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  _proto.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	      this.listeners = createListenerCollection();
	    }
	  };

	  _proto.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	var hotReloadingVersion = 0;
	var dummyState = {};

	function noop() {}

	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);

	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  var _contextTypes, _childContextTypes;

	  if (_ref === void 0) {
	    _ref = {};
	  }

	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
	  return function wrapWithConnect(WrappedComponent) {
	    invariant_1(reactIs_1(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

	      /* eslint-disable react/no-deprecated */

	    });

	    var Connect =
	    /*#__PURE__*/
	    function (_Component) {
	      _inheritsLoose(Connect, _Component);

	      function Connect(props, context) {
	        var _this;

	        _this = _Component.call(this, props, context) || this;
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_assertThisInitialized(_assertThisInitialized(_this)));
	        invariant_1(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

	        _this.initSelector();

	        _this.initSubscription();

	        return _this;
	      }

	      var _proto = Connect.prototype;

	      _proto.getChildContext = function getChildContext() {
	        var _ref3;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
	      };

	      _proto.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.

	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      _proto.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      _proto.getWrappedInstance = function getWrappedInstance() {
	        invariant_1(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
	        return this.wrappedInstance;
	      };

	      _proto.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      _proto.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      _proto.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.

	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.

	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      _proto.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      _proto.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      _proto.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad

	        var withExtras = _extends({}, props);

	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      _proto.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return React.createElement(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(React.Component);
	    /* eslint-enable react/no-deprecated */


	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;

	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.

	          var oldListeners = [];

	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }

	          this.initSubscription();

	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }

	    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
	  };
	}

	var hasOwn = Object.prototype.hasOwnProperty;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

	/* global window */

	var root;

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = symbolObservablePonyfill(root);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$1(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty

	}

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */


	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];

	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }

	  return boundActionCreators;
	}

	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */

	function isCrushed() {}

	if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  warning$1('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$1(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject$1(value)) {
	    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }

	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..

	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    

	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps


	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      verifyPlainObject(props, displayName, methodName);
	      return props;
	    };

	    return proxy;
	  };
	}

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
	    return bindActionCreators(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
	}
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? wrapMapToPropsConstant(function () {
	    return {};
	  }) : undefined;
	}
	var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        verifyPlainObject(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  {
	    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios


	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }

	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
	        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	var connect = createConnect();



	var es = /*#__PURE__*/Object.freeze({
		Provider: Provider,
		createProvider: createProvider,
		connectAdvanced: connectAdvanced,
		connect: connect
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var warning$2 = function() {};

	{
	  var printWarning = function printWarning(format, args) {
	    var len = arguments.length;
	    args = new Array(len > 1 ? len - 1 : 0);
	    for (var key = 1; key < len; key++) {
	      args[key - 1] = arguments[key];
	    }
	    var argIndex = 0;
	    var message = 'Warning: ' +
	      format.replace(/%s/g, function() {
	        return args[argIndex++];
	      });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning$2 = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	          '`warning(condition, format, ...args)` requires a warning ' +
	          'message argument'
	      );
	    }
	    if (!condition) {
	      printWarning.apply(null, [format].concat(args));
	    }
	  };
	}

	var warning_1 = warning$2;

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	var warning$3 = function() {};

	{
	  warning$3 = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	var warning_1$1 = warning$3;

	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	var parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

	var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends$1({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
	};

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    warning_1$1(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          warning_1$1(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


	  var transitionManager = createTransitionManager();

	  var setState = function setState(nextState) {
	    _extends$4(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = createPath;

	  var push = function push(path, state) {
	    warning_1$1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    warning_1$1(!((typeof path === 'undefined' ? 'undefined' : _typeof$2(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for putting history on context.
	 */

	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);

	  function Router() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Router);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends$5({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: "/",
	      url: "/",
	      params: {},
	      isExact: pathname === "/"
	    };
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;


	    invariant_1(children == null || React__default.Children.count(children) === 1, "A <Router> may have only one child element");

	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    warning_1(this.props.history === nextProps.history, "You cannot change <Router history>");
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };

	  Router.prototype.render = function render() {
	    var children = this.props.children;

	    return children ? React__default.Children.only(children) : null;
	  };

	  return Router;
	}(React__default.Component);

	Router.propTypes = {
	  history: PropTypes.object.isRequired,
	  children: PropTypes.node
	};
	Router.contextTypes = {
	  router: PropTypes.object
	};
	Router.childContextTypes = {
	  router: PropTypes.object.isRequired
	};

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that stores location in memory.
	 */

	var MemoryRouter = function (_React$Component) {
	  _inherits$1(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$1(this, MemoryRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createMemoryHistory(_this.props), _temp), _possibleConstructorReturn$1(_this, _ret);
	  }

	  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
	  };

	  MemoryRouter.prototype.render = function render() {
	    return React__default.createElement(Router, { history: this.history, children: this.props.children });
	  };

	  return MemoryRouter;
	}(React__default.Component);

	MemoryRouter.propTypes = {
	  initialEntries: PropTypes.array,
	  initialIndex: PropTypes.number,
	  getUserConfirmation: PropTypes.func,
	  keyLength: PropTypes.number,
	  children: PropTypes.node
	};

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */

	var Prompt = function (_React$Component) {
	  _inherits$2(Prompt, _React$Component);

	  function Prompt() {
	    _classCallCheck$2(this, Prompt);

	    return _possibleConstructorReturn$2(this, _React$Component.apply(this, arguments));
	  }

	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  };

	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };

	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    invariant_1(this.context.router, "You should not use <Prompt> outside a <Router>");

	    if (this.props.when) this.enable(this.props.message);
	  };

	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };

	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };

	  Prompt.prototype.render = function render() {
	    return null;
	  };

	  return Prompt;
	}(React__default.Component);

	Prompt.propTypes = {
	  when: PropTypes.bool,
	  message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: PropTypes.shape({
	    history: PropTypes.shape({
	      block: PropTypes.func.isRequired
	    }).isRequired
	  }).isRequired
	};

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compileGenerator = function compileGenerator(pattern) {
	  var cacheKey = pattern;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var compiledGenerator = pathToRegexp_1.compile(pattern);

	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledGenerator;
	    cacheCount++;
	  }

	  return compiledGenerator;
	};

	/**
	 * Public API for generating a URL pathname from a pattern and parameters.
	 */
	var generatePath = function generatePath() {
	  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (pattern === "/") {
	    return pattern;
	  }
	  var generator = compileGenerator(pattern);
	  return generator(params, { pretty: true });
	};

	var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for updating the location programmatically
	 * with a component.
	 */

	var Redirect = function (_React$Component) {
	  _inherits$3(Redirect, _React$Component);

	  function Redirect() {
	    _classCallCheck$3(this, Redirect);

	    return _possibleConstructorReturn$3(this, _React$Component.apply(this, arguments));
	  }

	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };

	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    invariant_1(this.context.router, "You should not use <Redirect> outside a <Router>");

	    if (this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var prevTo = createLocation(prevProps.to);
	    var nextTo = createLocation(this.props.to);

	    if (locationsAreEqual(prevTo, nextTo)) {
	      warning_1(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
	      return;
	    }

	    this.perform();
	  };

	  Redirect.prototype.computeTo = function computeTo(_ref) {
	    var computedMatch = _ref.computedMatch,
	        to = _ref.to;

	    if (computedMatch) {
	      if (typeof to === "string") {
	        return generatePath(to, computedMatch.params);
	      } else {
	        return _extends$6({}, to, {
	          pathname: generatePath(to.pathname, computedMatch.params)
	        });
	      }
	    }

	    return to;
	  };

	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var push = this.props.push;

	    var to = this.computeTo(this.props);

	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };

	  Redirect.prototype.render = function render() {
	    return null;
	  };

	  return Redirect;
	}(React__default.Component);

	Redirect.propTypes = {
	  computedMatch: PropTypes.object, // private, from <Switch>
	  push: PropTypes.bool,
	  from: PropTypes.string,
	  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: PropTypes.shape({
	    history: PropTypes.shape({
	      push: PropTypes.func.isRequired,
	      replace: PropTypes.func.isRequired
	    }).isRequired,
	    staticContext: PropTypes.object
	  }).isRequired
	};

	var patternCache$1 = {};
	var cacheLimit$1 = 10000;
	var cacheCount$1 = 0;

	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = "" + options.end + options.strict + options.sensitive;
	  var cache = patternCache$1[cacheKey] || (patternCache$1[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var keys = [];
	  var re = pathToRegexp_1(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };

	  if (cacheCount$1 < cacheLimit$1) {
	    cache[pattern] = compiledPattern;
	    cacheCount$1++;
	  }

	  return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var parent = arguments[2];

	  if (typeof options === "string") options = { path: options };

	  var _options = options,
	      path = _options.path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


	  if (path == null) return parent;

	  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;

	  var match = re.exec(pathname);

	  if (!match) return null;

	  var url = match[0],
	      values = match.slice(1);

	  var isExact = pathname === url;

	  if (exact && !isExact) return null;

	  return {
	    path: path, // the path pattern used to match
	    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};

	var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isEmptyChildren = function isEmptyChildren(children) {
	  return React__default.Children.count(children) === 0;
	};

	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route = function (_React$Component) {
	  _inherits$4(Route, _React$Component);

	  function Route() {
	    var _temp, _this, _ret;

	    _classCallCheck$4(this, Route);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn$4(_this, _ret);
	  }

	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends$7({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Route.prototype.computeMatch = function computeMatch(_ref, router) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact,
	        sensitive = _ref.sensitive;

	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

	    invariant_1(router, "You should not use <Route> or withRouter() outside a <Router>");

	    var route = router.route;

	    var pathname = (location || route.location).pathname;

	    return matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
	  };

	  Route.prototype.componentWillMount = function componentWillMount() {
	    warning_1(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

	    warning_1(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

	    warning_1(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
	  };

	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    warning_1(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    warning_1(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };

	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props = this.props,
	        children = _props.children,
	        component = _props.component,
	        render = _props.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;

	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };

	    if (component) return match ? React__default.createElement(component, props) : null;

	    if (render) return match ? render(props) : null;

	    if (typeof children === "function") return children(props);

	    if (children && !isEmptyChildren(children)) return React__default.Children.only(children);

	    return null;
	  };

	  return Route;
	}(React__default.Component);

	Route.propTypes = {
	  computedMatch: PropTypes.object, // private, from <Switch>
	  path: PropTypes.string,
	  exact: PropTypes.bool,
	  strict: PropTypes.bool,
	  sensitive: PropTypes.bool,
	  component: PropTypes.func,
	  render: PropTypes.func,
	  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
	  location: PropTypes.object
	};
	Route.contextTypes = {
	  router: PropTypes.shape({
	    history: PropTypes.object.isRequired,
	    route: PropTypes.object.isRequired,
	    staticContext: PropTypes.object
	  })
	};
	Route.childContextTypes = {
	  router: PropTypes.object.isRequired
	};

	var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var addLeadingSlash$1 = function addLeadingSlash(path) {
	  return path.charAt(0) === "/" ? path : "/" + path;
	};

	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;

	  return _extends$8({}, location, {
	    pathname: addLeadingSlash$1(basename) + location.pathname
	  });
	};

	var stripBasename$1 = function stripBasename(basename, location) {
	  if (!basename) return location;

	  var base = addLeadingSlash$1(basename);

	  if (location.pathname.indexOf(base) !== 0) return location;

	  return _extends$8({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};

	var createURL = function createURL(location) {
	  return typeof location === "string" ? location : createPath(location);
	};

	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    invariant_1(false, "You cannot %s with <StaticRouter>", methodName);
	  };
	};

	var noop$1 = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter = function (_React$Component) {
	  _inherits$5(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck$5(this, StaticRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return addLeadingSlash$1(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;

	      context.action = "PUSH";
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;

	      context.action = "REPLACE";
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop$1;
	    }, _this.handleBlock = function () {
	      return noop$1;
	    }, _temp), _possibleConstructorReturn$5(_this, _ret);
	  }

	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };

	  StaticRouter.prototype.componentWillMount = function componentWillMount() {
	    warning_1(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
	  };

	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

	    var history = {
	      createHref: this.createHref,
	      action: "POP",
	      location: stripBasename$1(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler("go"),
	      goBack: staticHandler("goBack"),
	      goForward: staticHandler("goForward"),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };

	    return React__default.createElement(Router, _extends$8({}, props, { history: history }));
	  };

	  return StaticRouter;
	}(React__default.Component);

	StaticRouter.propTypes = {
	  basename: PropTypes.string,
	  context: PropTypes.object.isRequired,
	  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	};
	StaticRouter.defaultProps = {
	  basename: "",
	  location: "/"
	};
	StaticRouter.childContextTypes = {
	  router: PropTypes.object.isRequired
	};

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for rendering the first <Route> that matches.
	 */

	var Switch = function (_React$Component) {
	  _inherits$6(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck$6(this, Switch);

	    return _possibleConstructorReturn$6(this, _React$Component.apply(this, arguments));
	  }

	  Switch.prototype.componentWillMount = function componentWillMount() {
	    invariant_1(this.context.router, "You should not use <Switch> outside a <Router>");
	  };

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    warning_1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    warning_1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };

	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;

	    var location = this.props.location || route.location;

	    var match = void 0,
	        child = void 0;
	    React__default.Children.forEach(children, function (element) {
	      if (match == null && React__default.isValidElement(element)) {
	        var _element$props = element.props,
	            pathProp = _element$props.path,
	            exact = _element$props.exact,
	            strict = _element$props.strict,
	            sensitive = _element$props.sensitive,
	            from = _element$props.from;

	        var path = pathProp || from;

	        child = element;
	        match = matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
	      }
	    });

	    return match ? React__default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };

	  return Switch;
	}(React__default.Component);

	Switch.contextTypes = {
	  router: PropTypes.shape({
	    route: PropTypes.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: PropTypes.node,
	  location: PropTypes.object
	};

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS$1 = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS$1 = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var defineProperty$1 = Object.defineProperty;
	var getOwnPropertyNames$1 = Object.getOwnPropertyNames;
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var getPrototypeOf$1 = Object.getPrototypeOf;
	var objectPrototype$1 = getPrototypeOf$1 && getPrototypeOf$1(Object);

	function hoistNonReactStatics$1(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype$1) {
	            var inheritedComponent = getPrototypeOf$1(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype$1) {
	                hoistNonReactStatics$1(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames$1(sourceComponent);

	        if (getOwnPropertySymbols$1) {
	            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS$1[key] && !KNOWN_STATICS$1[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor$1(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty$1(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs$1 = hoistNonReactStatics$1;

	var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties$1(props, ["wrappedComponentRef"]);

	    return React__default.createElement(Route, {
	      children: function children(routeComponentProps) {
	        return React__default.createElement(Component, _extends$9({}, remainingProps, routeComponentProps, {
	          ref: wrappedComponentRef
	        }));
	      }
	    });
	  };

	  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: PropTypes.func
	  };

	  return hoistNonReactStatics_cjs$1(C, Component);
	};



	var es$1 = /*#__PURE__*/Object.freeze({
		MemoryRouter: MemoryRouter,
		Prompt: Prompt,
		Redirect: Redirect,
		Route: Route,
		Router: Router,
		StaticRouter: StaticRouter,
		Switch: Switch,
		generatePath: generatePath,
		matchPath: matchPath,
		withRouter: withRouter
	});

	var _reactRouter = getCjsExportFromNamespace(es$1);

	var ConnectedRouter = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(PropTypes);







	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createConnectedRouter = function createConnectedRouter(structure) {
	  var getIn = structure.getIn,
	      toJS = structure.toJS;
	  /*
	   * ConnectedRouter listens to a history object passed from props.
	   * When history is changed, it dispatches action to redux store.
	   * Then, store will pass props to component to render.
	   * This creates uni-directional flow from history->store->router->components.
	   */

	  var ConnectedRouter = function (_get__2) {
	    _inherits(ConnectedRouter, _get__2);

	    function ConnectedRouter(props, context) {
	      _classCallCheck(this, ConnectedRouter);

	      var _this = _possibleConstructorReturn(this, (ConnectedRouter.__proto__ || Object.getPrototypeOf(ConnectedRouter)).call(this, props));

	      _this.inTimeTravelling = false;

	      // Subscribe to store changes
	      _this.unsubscribe = context.store.subscribe(function () {
	        // Extract store's location
	        var _toJS = toJS(getIn(context.store.getState(), ['router', 'location'])),
	            pathnameInStore = _toJS.pathname,
	            searchInStore = _toJS.search,
	            hashInStore = _toJS.hash;
	        // Extract history's location


	        var _props$history$locati = props.history.location,
	            pathnameInHistory = _props$history$locati.pathname,
	            searchInHistory = _props$history$locati.search,
	            hashInHistory = _props$history$locati.hash;

	        // If we do time travelling, the location in store is changed but location in history is not changed

	        if (pathnameInHistory !== pathnameInStore || searchInHistory !== searchInStore || hashInHistory !== hashInStore) {
	          _this.inTimeTravelling = true;
	          // Update history's location to match store's location
	          props.history.push({
	            pathname: pathnameInStore,
	            search: searchInStore,
	            hash: hashInStore
	          });
	        }
	      });

	      var handleLocationChange = function handleLocationChange(location, action) {
	        // Dispatch onLocationChanged except when we're in time travelling
	        if (!_this.inTimeTravelling) {
	          props.onLocationChanged(location, action);
	        } else {
	          _this.inTimeTravelling = false;
	        }
	      };

	      // Listen to history changes
	      _this.unlisten = props.history.listen(handleLocationChange);
	      // Dispatch a location change action for the initial location
	      handleLocationChange(props.history.location, props.history.action);
	      return _this;
	    }

	    _createClass(ConnectedRouter, [{
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.unlisten();
	        this.unsubscribe();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props = this.props,
	            history = _props.history,
	            children = _props.children;


	        return _get__('React').createElement(
	          _get__('Router'),
	          { history: history },
	          children
	        );
	      }
	    }]);

	    return ConnectedRouter;
	  }(_get__('Component'));

	  ConnectedRouter.contextTypes = {
	    store: _get__('PropTypes').shape({
	      getState: _get__('PropTypes').func.isRequired,
	      subscribe: _get__('PropTypes').func.isRequired
	    }).isRequired
	  };

	  ConnectedRouter.propTypes = {
	    history: _get__('PropTypes').shape({
	      action: _get__('PropTypes').string.isRequired,
	      listen: _get__('PropTypes').func.isRequired,
	      location: _get__('PropTypes').object.isRequired,
	      push: _get__('PropTypes').func.isRequired
	    }).isRequired,
	    location: _get__('PropTypes').oneOfType([_get__('PropTypes').object, _get__('PropTypes').string]).isRequired,
	    action: _get__('PropTypes').string.isRequired,
	    basename: _get__('PropTypes').string,
	    children: _get__('PropTypes').oneOfType([_get__('PropTypes').func, _get__('PropTypes').node]),
	    onLocationChanged: _get__('PropTypes').func.isRequired
	  };

	  var mapStateToProps = function mapStateToProps(state) {
	    return {
	      action: getIn(state, ['router', 'action']),
	      location: getIn(state, ['router', 'location'])
	    };
	  };

	  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	      onLocationChanged: function onLocationChanged(location, action) {
	        return dispatch(_get__('onLocationChanged')(location, action));
	      }
	    };
	  };

	  return _get__('connect')(mapStateToProps, mapDispatchToProps)(ConnectedRouter);
	};

	exports.default = _get__('createConnectedRouter');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'Component':
	      return React__default.Component;

	    case 'PropTypes':
	      return _propTypes2.default;

	    case 'onLocationChanged':
	      return actions.onLocationChanged;

	    case 'connect':
	      return es.connect;

	    case 'createConnectedRouter':
	      return createConnectedRouter;

	    case 'React':
	      return _react2.default;

	    case 'Router':
	      return _reactRouter.Router;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createConnectedRouter === 'undefined' ? 'undefined' : _typeof(createConnectedRouter);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createConnectedRouter, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createConnectedRouter)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(ConnectedRouter);
	var ConnectedRouter_1 = ConnectedRouter.__RewireAPI__;
	var ConnectedRouter_2 = ConnectedRouter.__ResetDependency__;
	var ConnectedRouter_3 = ConnectedRouter.__set__;
	var ConnectedRouter_4 = ConnectedRouter.__Rewire__;
	var ConnectedRouter_5 = ConnectedRouter.__GetDependency__;
	var ConnectedRouter_6 = ConnectedRouter.__get__;

	var reducer = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;



	var createConnectRouter = function createConnectRouter(structure) {
	  var fromJS = structure.fromJS,
	      merge = structure.merge;


	  var createRouterReducer = function createRouterReducer(history) {
	    var initialRouterState = fromJS({
	      location: history.location,
	      action: history.action
	    });

	    /*
	    * This reducer will update the state with the most recent location history
	    * has transitioned to.
	    */
	    return function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRouterState;

	      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          type = _ref.type,
	          payload = _ref.payload;

	      if (type === _get__('LOCATION_CHANGE')) {
	        return merge(state, payload);
	      }

	      return state;
	    };
	  };

	  return createRouterReducer;
	};

	exports.default = _get__('createConnectRouter');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'LOCATION_CHANGE':
	      return actions.LOCATION_CHANGE;

	    case 'createConnectRouter':
	      return createConnectRouter;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createConnectRouter === 'undefined' ? 'undefined' : _typeof(createConnectRouter);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createConnectRouter, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createConnectRouter)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(reducer);
	var reducer_1 = reducer.__RewireAPI__;
	var reducer_2 = reducer.__ResetDependency__;
	var reducer_3 = reducer.__set__;
	var reducer_4 = reducer.__Rewire__;
	var reducer_5 = reducer.__GetDependency__;
	var reducer_6 = reducer.__get__;

	var middleware = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;



	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	var routerMiddleware = function routerMiddleware(history) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        // eslint-disable-line no-unused-vars
	        if (action.type !== _get__('CALL_HISTORY_METHOD')) {
	          return next(action);
	        }

	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;

	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	};

	exports.default = _get__('routerMiddleware');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'CALL_HISTORY_METHOD':
	      return actions.CALL_HISTORY_METHOD;

	    case 'routerMiddleware':
	      return routerMiddleware;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof routerMiddleware === 'undefined' ? 'undefined' : _typeof(routerMiddleware);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(routerMiddleware, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(routerMiddleware)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(middleware);
	var middleware_1 = middleware.__RewireAPI__;
	var middleware_2 = middleware.__ResetDependency__;
	var middleware_3 = middleware.__set__;
	var middleware_4 = middleware.__Rewire__;
	var middleware_5 = middleware.__GetDependency__;
	var middleware_6 = middleware.__get__;

	var selectors = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;



	var createSelectors = function createSelectors(structure) {
	  var getIn = structure.getIn,
	      toJS = structure.toJS;

	  var getLocation = function getLocation(state) {
	    return toJS(getIn(state, ['router', 'location']));
	  };
	  var getAction = function getAction(state) {
	    return toJS(getIn(state, ['router', 'action']));
	  };

	  // It only makes sense to recalculate the `matchPath` whenever the pathname
	  // of the location changes. That's why `createMatchSelector` memoizes
	  // the latest result based on the location's pathname.
	  var createMatchSelector = function createMatchSelector(path) {
	    var lastPathname = null;
	    var lastMatch = null;

	    return function (state) {
	      var _ref = getLocation(state) || {},
	          pathname = _ref.pathname;

	      if (pathname === lastPathname) {
	        return lastMatch;
	      }
	      lastPathname = pathname;
	      var match = _get__('matchPath')(pathname, path);
	      if (!match || !lastMatch || match.url !== lastMatch.url) {
	        lastMatch = match;
	      }

	      return lastMatch;
	    };
	  };

	  return { getLocation: getLocation, getAction: getAction, createMatchSelector: createMatchSelector };
	};

	exports.default = _get__('createSelectors');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'matchPath':
	      return _reactRouter.matchPath;

	    case 'createSelectors':
	      return createSelectors;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createSelectors === 'undefined' ? 'undefined' : _typeof(createSelectors);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createSelectors, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createSelectors)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(selectors);
	var selectors_1 = selectors.__RewireAPI__;
	var selectors_2 = selectors.__ResetDependency__;
	var selectors_3 = selectors.__set__;
	var selectors_4 = selectors.__Rewire__;
	var selectors_5 = selectors.__GetDependency__;
	var selectors_6 = selectors.__get__;

	var createAll_1 = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var actions$$1 = _interopRequireWildcard(actions);



	var _ConnectedRouter2 = _interopRequireDefault(ConnectedRouter);



	var _reducer2 = _interopRequireDefault(reducer);



	var _middleware2 = _interopRequireDefault(middleware);



	var _selectors2 = _interopRequireDefault(selectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var createAll = function createAll(structure) {
	  return _extends({}, _get__('actions'), _get__('createSelectors')(structure), {
	    ConnectedRouter: _get__('createConnectedRouter')(structure),
	    connectRouter: _get__('createConnectRouter')(structure),
	    routerMiddleware: _get__('routerMiddleware')
	  });
	};

	exports.default = _get__('createAll');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'actions':
	      return _filterWildcardImport__(actions$$1);

	    case 'createSelectors':
	      return _selectors2.default;

	    case 'createConnectedRouter':
	      return _ConnectedRouter2.default;

	    case 'createConnectRouter':
	      return _reducer2.default;

	    case 'routerMiddleware':
	      return _middleware2.default;

	    case 'createAll':
	      return createAll;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createAll === 'undefined' ? 'undefined' : _typeof(createAll);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createAll, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createAll)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	function _filterWildcardImport__() {
	  var wildcardImport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var validPropertyNames = Object.keys(wildcardImport).filter(function (propertyName) {
	    return propertyName !== '__get__' && propertyName !== '__set__' && propertyName !== '__reset__' && propertyName !== '__with__' && propertyName !== '__GetDependency__' && propertyName !== '__Rewire__' && propertyName !== '__ResetDependency__' && propertyName !== '__RewireAPI__';
	  });
	  return validPropertyNames.reduce(function (filteredWildcardImport, propertyName) {
	    filteredWildcardImport[propertyName] = wildcardImport[propertyName];
	    return filteredWildcardImport;
	  }, {});
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(createAll_1);
	var createAll_2 = createAll_1.__RewireAPI__;
	var createAll_3 = createAll_1.__ResetDependency__;
	var createAll_4 = createAll_1.__set__;
	var createAll_5 = createAll_1.__Rewire__;
	var createAll_6 = createAll_1.__GetDependency__;
	var createAll_7 = createAll_1.__get__;

	var getIn_1 = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* Code from github.com/erikras/redux-form by Erik Rasmussen */

	var getIn = function getIn(state, path) {
	  if (!state) {
	    return state;
	  }

	  var length = path.length;
	  if (!length) {
	    return undefined;
	  }

	  var result = state;
	  for (var i = 0; i < length && !!result; ++i) {
	    result = result[path[i]];
	  }

	  return result;
	};

	exports.default = _get__("getIn");

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case "getIn":
	      return getIn;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === "undefined" ? "undefined" : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof getIn === "undefined" ? "undefined" : _typeof(getIn);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(getIn, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(getIn)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(getIn_1);
	var getIn_2 = getIn_1.__get__;
	var getIn_3 = getIn_1.__GetDependency__;
	var getIn_4 = getIn_1.__Rewire__;
	var getIn_5 = getIn_1.__set__;
	var getIn_6 = getIn_1.__ResetDependency__;
	var getIn_7 = getIn_1.__RewireAPI__;

	var plain = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _getIn2 = _interopRequireDefault(getIn_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var structure = {
	  fromJS: function fromJS(value) {
	    return value;
	  },
	  getIn: _get__('getIn'),
	  merge: function merge(state, payload) {
	    return _extends({}, state, payload);
	  },
	  toJS: function toJS(value) {
	    return value;
	  }
	};

	exports.default = _get__('structure');

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'getIn':
	      return _getIn2.default;

	    case 'structure':
	      return structure;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof structure === 'undefined' ? 'undefined' : _typeof(structure);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(structure, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(structure)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	});

	unwrapExports(plain);
	var plain_1 = plain.__RewireAPI__;
	var plain_2 = plain.__ResetDependency__;
	var plain_3 = plain.__set__;
	var plain_4 = plain.__Rewire__;
	var plain_5 = plain.__GetDependency__;
	var plain_6 = plain.__get__;

	var lib = createCommonjsModule(function (module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.createMatchSelector = exports.getAction = exports.getLocation = exports.routerMiddleware = exports.connectRouter = exports.ConnectedRouter = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.LOCATION_CHANGE = undefined;



	var _createAll2 = _interopRequireDefault(createAll_1);



	var _plain2 = _interopRequireDefault(plain);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _get__2 = _get__('createAll')(_get__('plainStructure'));

	var LOCATION_CHANGE = _get__2.LOCATION_CHANGE,
	    CALL_HISTORY_METHOD = _get__2.CALL_HISTORY_METHOD,
	    push = _get__2.push,
	    replace = _get__2.replace,
	    go = _get__2.go,
	    goBack = _get__2.goBack,
	    goForward = _get__2.goForward,
	    routerActions = _get__2.routerActions,
	    ConnectedRouter = _get__2.ConnectedRouter,
	    connectRouter = _get__2.connectRouter,
	    routerMiddleware = _get__2.routerMiddleware,
	    getLocation = _get__2.getLocation,
	    getAction = _get__2.getAction,
	    createMatchSelector = _get__2.createMatchSelector;
	exports.LOCATION_CHANGE = LOCATION_CHANGE;
	exports.CALL_HISTORY_METHOD = CALL_HISTORY_METHOD;
	exports.push = push;
	exports.replace = replace;
	exports.go = go;
	exports.goBack = goBack;
	exports.goForward = goForward;
	exports.routerActions = routerActions;
	exports.ConnectedRouter = ConnectedRouter;
	exports.connectRouter = connectRouter;
	exports.routerMiddleware = routerMiddleware;
	exports.getLocation = getLocation;
	exports.getAction = getAction;
	exports.createMatchSelector = createMatchSelector;

	function _getGlobalObject() {
	  try {
	    if (!!commonjsGlobal) {
	      return commonjsGlobal;
	    }
	  } catch (e) {
	    try {
	      if (!!window) {
	        return window;
	      }
	    } catch (e) {
	      return this;
	    }
	  }
	}
	var _RewireModuleId__ = null;

	function _getRewireModuleId__() {
	  if (_RewireModuleId__ === null) {
	    var globalVariable = _getGlobalObject();

	    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
	      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
	    }

	    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	  }

	  return _RewireModuleId__;
	}

	function _getRewireRegistry__() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
	    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	  }

	  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
	}

	function _getRewiredData__() {
	  var moduleId = _getRewireModuleId__();

	  var registry = _getRewireRegistry__();

	  var rewireData = registry[moduleId];

	  if (!rewireData) {
	    registry[moduleId] = Object.create(null);
	    rewireData = registry[moduleId];
	  }

	  return rewireData;
	}

	(function registerResetAll() {
	  var theGlobalVariable = _getGlobalObject();

	  if (!theGlobalVariable['__rewire_reset_all__']) {
	    theGlobalVariable['__rewire_reset_all__'] = function () {
	      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	    };
	  }
	})();

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  var rewireData = _getRewiredData__();

	  if (rewireData[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = rewireData[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'createAll':
	      return _createAll2.default;

	    case 'plainStructure':
	      return _plain2.default;
	  }

	  return undefined;
	}

	function _set__(variableName, value) {
	  var rewireData = _getRewiredData__();

	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      rewireData[name] = variableName[name];
	    });
	    return function () {
	      Object.keys(variableName).forEach(function (name) {
	        _reset__(variableName);
	      });
	    };
	  } else {
	    if (value === undefined) {
	      rewireData[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      rewireData[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  var rewireData = _getRewiredData__();

	  delete rewireData[variableName];

	  if (Object.keys(rewireData).length == 0) {
	    delete _getRewireRegistry__()[_getRewireModuleId__];
	  }
	}

	function _with__(object) {
	  var rewireData = _getRewiredData__();

	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      rewireData[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = rewireData[variableName];
	      rewireData[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;
	});

	unwrapExports(lib);
	var lib_1 = lib.__RewireAPI__;
	var lib_2 = lib.__ResetDependency__;
	var lib_3 = lib.__set__;
	var lib_4 = lib.__Rewire__;
	var lib_5 = lib.__GetDependency__;
	var lib_6 = lib.__get__;
	var lib_7 = lib.createMatchSelector;
	var lib_8 = lib.getAction;
	var lib_9 = lib.getLocation;
	var lib_10 = lib.routerMiddleware;
	var lib_11 = lib.connectRouter;
	var lib_12 = lib.ConnectedRouter;
	var lib_13 = lib.routerActions;
	var lib_14 = lib.goForward;
	var lib_15 = lib.goBack;
	var lib_16 = lib.go;
	var lib_17 = lib.replace;
	var lib_18 = lib.push;
	var lib_19 = lib.CALL_HISTORY_METHOD;
	var lib_20 = lib.LOCATION_CHANGE;



	var index$2 = /*#__PURE__*/Object.freeze({
		__moduleExports: lib,
		__RewireAPI__: lib_1,
		__ResetDependency__: lib_2,
		__set__: lib_3,
		__Rewire__: lib_4,
		__GetDependency__: lib_5,
		__get__: lib_6,
		createMatchSelector: lib_7,
		getAction: lib_8,
		getLocation: lib_9,
		routerMiddleware: lib_10,
		connectRouter: lib_11,
		ConnectedRouter: lib_12,
		routerActions: lib_13,
		goForward: lib_14,
		goBack: lib_15,
		go: lib_16,
		replace: lib_17,
		push: lib_18,
		CALL_HISTORY_METHOD: lib_19,
		LOCATION_CHANGE: lib_20
	});

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty$2 = _defineProperty$1;

	var isFunction = (function (value) {
	  return typeof value === 'function';
	});

	var isEmpty = (function (value) {
	  return value.length === 0;
	});

	var toString = (function (value) {
	  return value.toString();
	});

	var isString = (function (value) {
	  return typeof value === 'string';
	});

	var DEFAULT_NAMESPACE = '/';
	var ACTION_TYPE_DELIMITER = '||';

	var identity = (function (value) {
	  return value;
	});

	var isNull = (function (value) {
	  return value === null;
	});

	function createAction(type, payloadCreator, metaCreator) {
	  if (payloadCreator === void 0) {
	    payloadCreator = identity;
	  }

	  invariant_1(isFunction(payloadCreator) || isNull(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
	  var finalPayloadCreator = isNull(payloadCreator) || payloadCreator === identity ? identity : function (head) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
	  };
	  var hasMeta = isFunction(metaCreator);
	  var typeString = type.toString();

	  var actionCreator = function actionCreator() {
	    var payload = finalPayloadCreator.apply(void 0, arguments);
	    var action = {
	      type: type
	    };

	    if (payload instanceof Error) {
	      action.error = true;
	    }

	    if (payload !== undefined) {
	      action.payload = payload;
	    }

	    if (hasMeta) {
	      action.meta = metaCreator.apply(void 0, arguments);
	    }

	    return action;
	  };

	  actionCreator.toString = function () {
	    return typeString;
	  };

	  return actionCreator;
	}

	var isPlainObject$2 = (function (value) {
	  if (typeof value !== 'object' || value === null) return false;
	  var proto = value;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(value) === proto;
	});

	var isArray = (function (value) {
	  return Array.isArray(value);
	});

	var isNil = (function (value) {
	  return value === null || value === undefined;
	});

	var getLastElement = (function (array) {
	  return array[array.length - 1];
	});

	/**
	 * Export.
	 */

	var toNoCase_1 = toNoCase;

	/**
	 * Test whether a string is camel-case.
	 */

	var hasSpace = /\s/;
	var hasSeparator = /(_|-|\.|:)/;
	var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

	/**
	 * Remove any starting case from a `string`, like camel or snake, but keep
	 * spaces and punctuation that may be important otherwise.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toNoCase(string) {
	  if (hasSpace.test(string)) return string.toLowerCase()
	  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
	  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
	  return string.toLowerCase()
	}

	/**
	 * Separator splitter.
	 */

	var separatorSplitter = /[\W_]+(.|$)/g;

	/**
	 * Un-separate a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function unseparate(string) {
	  return string.replace(separatorSplitter, function (m, next) {
	    return next ? ' ' + next : ''
	  })
	}

	/**
	 * Camelcase splitter.
	 */

	var camelSplitter = /(.)([A-Z]+)/g;

	/**
	 * Un-camelcase a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function uncamelize(string) {
	  return string.replace(camelSplitter, function (m, previous, uppers) {
	    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
	  })
	}

	/**
	 * Export.
	 */

	var toSpaceCase_1 = toSpaceCase;

	/**
	 * Convert a `string` to space case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toSpaceCase(string) {
	  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
	    return match ? ' ' + match : ''
	  }).trim()
	}

	/**
	 * Export.
	 */

	var toCamelCase_1 = toCamelCase;

	/**
	 * Convert a `string` to camel case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toCamelCase(string) {
	  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
	    return letter.toUpperCase()
	  })
	}

	var namespacer = '/';
	var camelCase = (function (type) {
	  return type.includes(namespacer) ? type.split(namespacer).map(toCamelCase_1).join(namespacer) : toCamelCase_1(type);
	});

	var arrayToObject = (function (array, callback) {
	  return array.reduce(function (partialObject, element) {
	    return callback(partialObject, element);
	  }, {});
	});

	var isMap = (function (value) {
	  return typeof Map !== 'undefined' && value instanceof Map;
	});

	function ownKeys(object) {
	  if (isMap(object)) {
	    // We are using loose transforms in babel. Here we are trying to convert an
	    // interable to an array. Loose mode expects everything to already be an
	    // array. The problem is that our eslint rules encourage us to prefer
	    // spread over Array.from.
	    //
	    // Instead of disabling loose mode we simply disable the warning.
	    // eslint-disable-next-line unicorn/prefer-spread
	    return Array.from(object.keys());
	  }

	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	function get(key, x) {
	  return isMap(x) ? x.get(key) : x[key];
	}

	var flattenWhenNode = (function (predicate) {
	  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
	    var _ref = _temp === void 0 ? {} : _temp,
	        _ref$namespace = _ref.namespace,
	        namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
	        prefix = _ref.prefix;

	    if (partialFlatMap === void 0) {
	      partialFlatMap = {};
	    }

	    if (partialFlatActionType === void 0) {
	      partialFlatActionType = '';
	    }

	    function connectNamespace(type) {
	      var _ref2;

	      if (!partialFlatActionType) return type;
	      var types = type.toString().split(ACTION_TYPE_DELIMITER);
	      var partials = partialFlatActionType.split(ACTION_TYPE_DELIMITER);
	      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
	        return types.map(function (t) {
	          return "" + p + namespace + t;
	        });
	      })).join(ACTION_TYPE_DELIMITER);
	    }

	    function connectPrefix(type) {
	      if (partialFlatActionType || !prefix) {
	        return type;
	      }

	      return "" + prefix + namespace + type;
	    }

	    ownKeys(map).forEach(function (type) {
	      var nextNamespace = connectPrefix(connectNamespace(type));
	      var mapValue = get(type, map);

	      if (predicate(mapValue)) {
	        flatten(mapValue, {
	          namespace: namespace,
	          prefix: prefix
	        }, partialFlatMap, nextNamespace);
	      } else {
	        partialFlatMap[nextNamespace] = mapValue;
	      }
	    });
	    return partialFlatMap;
	  };
	});

	var flattenActionMap = flattenWhenNode(isPlainObject$2);

	function unflattenActionCreators(flatActionCreators, _temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$namespace = _ref.namespace,
	      namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
	      prefix = _ref.prefix;

	  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
	    var nextNamespace = camelCase(partialFlatActionTypePath.shift());

	    if (isEmpty(partialFlatActionTypePath)) {
	      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
	    } else {
	      if (!partialNestedActionCreators[nextNamespace]) {
	        partialNestedActionCreators[nextNamespace] = {};
	      }

	      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
	    }
	  }

	  var nestedActionCreators = {};
	  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
	    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
	    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
	  });
	  return nestedActionCreators;
	}

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

	function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function createActions(actionMap) {
	  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    identityActions[_key - 1] = arguments[_key];
	  }

	  var options = isPlainObject$2(getLastElement(identityActions)) ? identityActions.pop() : {};
	  invariant_1(identityActions.every(isString) && (isString(actionMap) || isPlainObject$2(actionMap)), 'Expected optional object followed by string action types');

	  if (isString(actionMap)) {
	    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
	  }

	  return _objectSpread$1({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
	}

	function actionCreatorsFromActionMap(actionMap, options) {
	  var flatActionMap = flattenActionMap(actionMap, options);
	  var flatActionCreators = actionMapToActionCreators(flatActionMap);
	  return unflattenActionCreators(flatActionCreators, options);
	}

	function actionMapToActionCreators(actionMap, _temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      prefix = _ref.prefix,
	      _ref$namespace = _ref.namespace,
	      namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace;

	  function isValidActionMapValue(actionMapValue) {
	    if (isFunction(actionMapValue) || isNil(actionMapValue)) {
	      return true;
	    }

	    if (isArray(actionMapValue)) {
	      var _actionMapValue$ = actionMapValue[0],
	          payload = _actionMapValue$ === void 0 ? identity : _actionMapValue$,
	          meta = actionMapValue[1];
	      return isFunction(payload) && isFunction(meta);
	    }

	    return false;
	  }

	  return arrayToObject(Object.keys(actionMap), function (partialActionCreators, type) {
	    var _objectSpread2;

	    var actionMapValue = actionMap[type];
	    invariant_1(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
	    var prefixedType = prefix ? "" + prefix + namespace + type : type;
	    var actionCreator = isArray(actionMapValue) ? createAction.apply(void 0, [prefixedType].concat(actionMapValue)) : createAction(prefixedType, actionMapValue);
	    return _objectSpread$1({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
	  });
	}

	function actionCreatorsFromIdentityActions(identityActions, options) {
	  var actionMap = arrayToObject(identityActions, function (partialActionMap, type) {
	    var _objectSpread3;

	    return _objectSpread$1({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = identity, _objectSpread3));
	  });
	  var actionCreators = actionMapToActionCreators(actionMap, options);
	  return arrayToObject(Object.keys(actionCreators), function (partialActionCreators, type) {
	    var _objectSpread4;

	    return _objectSpread$1({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[camelCase(type)] = actionCreators[type], _objectSpread4));
	  });
	}

	var isUndefined = (function (value) {
	  return value === undefined;
	});

	function handleAction(type, reducer, defaultState) {
	  if (reducer === void 0) {
	    reducer = identity;
	  }

	  var types = toString(type).split(ACTION_TYPE_DELIMITER);
	  invariant_1(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
	  invariant_1(isFunction(reducer) || isPlainObject$2(reducer), 'Expected reducer to be a function or object with next and throw reducers');

	  var _ref = isFunction(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
	    return isNil(aReducer) ? identity : aReducer;
	  }),
	      nextReducer = _ref[0],
	      throwReducer = _ref[1];

	  return function (state, action) {
	    if (state === void 0) {
	      state = defaultState;
	    }

	    var actionType = action.type;

	    if (!actionType || types.indexOf(toString(actionType)) === -1) {
	      return state;
	    }

	    return (action.error === true ? throwReducer : nextReducer)(state, action);
	  };
	}

	var reduceReducers = (function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
	  var reducers = args;

	  if (typeof initialState === 'undefined') {
	    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
	  }

	  return function (prevState, value) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      args[_key2 - 2] = arguments[_key2];
	    }

	    var prevStateIsUndefined = typeof prevState === 'undefined';
	    var valueIsUndefined = typeof value === 'undefined';

	    if (prevStateIsUndefined && valueIsUndefined && initialState) {
	      return initialState;
	    }

	    return reducers.reduce(function (newState, reducer) {
	      return reducer.apply(undefined, [newState, value].concat(args));
	    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
	  };
	});

	function hasGeneratorInterface(handler) {
	  var keys = ownKeys(handler);
	  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
	    return ownKey === 'next' || ownKey === 'throw';
	  });
	  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
	}

	var flattenReducerMap = flattenWhenNode(function (node) {
	  return (isPlainObject$2(node) || isMap(node)) && !hasGeneratorInterface(node);
	});

	function handleActions(handlers, defaultState, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  invariant_1(isPlainObject$2(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
	  var flattenedReducerMap = flattenReducerMap(handlers, options);
	  var reducers = ownKeys(flattenedReducerMap).map(function (type) {
	    return handleAction(type, get(type, flattenedReducerMap), defaultState);
	  });
	  var reducer = reduceReducers.apply(void 0, reducers.concat([defaultState]));
	  return function (state, action) {
	    if (state === void 0) {
	      state = defaultState;
	    }

	    return reducer(state, action);
	  };
	}

	var payloadFn = function payloadFn(payload, meta) {
	  return payload;
	};

	var metaFN = function metaFN(payload) {
	  return {
	    sagaAction: true
	  };
	};

	function defineActions(obj) {
	  var defineObj = {};

	  for (var o in obj) {
	    // newObj[o]=payloadFn
	    Object.defineProperty(defineObj, o, {
	      value: [payloadFn, metaFN]
	    });
	  }

	  return defineObj;
	}
	function createDefineActions(actions, namespace) {
	  return createActions(defineProperty$2({}, namespace, defineActions(actions)))[namespace];
	}

	var index$3 = /*#__PURE__*/Object.freeze({
		defineActions: defineActions,
		createDefineActions: createDefineActions
	});

	function _objectSpread$2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty$2(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread$2;

	function megerActionReducer(reducers, reducerTypes) {
	  var newReducer = {};

	  for (var r in reducers) {
	    newReducer[reducerTypes[r]] = reducers[r];
	  }

	  return newReducer;
	}
	var defaultState = {
	  items: [],
	  item: {},
	  //page meta
	  page: {
	    total: 0,
	    current: 1
	  }
	};
	function defaultReducer() {
	  return {
	    saveList: function saveList(state, _ref) {
	      var payload = _ref.payload;
	      return objectSpread({}, state, {
	        items: payload.items,
	        total: payload.totalCount,
	        current: payload.currentPage
	      });
	    },
	    saveItem: function saveItem(state, _ref2) {
	      var payload = _ref2.payload;
	      return objectSpread({}, state, {
	        item: payload
	      });
	    },
	    deleteItem: function deleteItem(state, _ref3) {
	      var payload = _ref3.payload;
	      return objectSpread({}, state, {
	        item: {}
	      });
	    }
	  };
	}

	var index$4 = /*#__PURE__*/Object.freeze({
		megerActionReducer: megerActionReducer,
		defaultState: defaultState,
		defaultReducer: defaultReducer,
		reducerCreator: handleActions
	});

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() {
	    return this || (typeof self === "object" && self);
	  })() || Function("return this")()
	);
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() {
	  return this || (typeof self === "object" && self);
	})() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = runtime;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var regenerator = runtimeModule;

	var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var sym = function sym(id) {
	  return '@@redux-saga/' + id;
	};

	var TASK = /*#__PURE__*/sym('TASK');
	var HELPER = /*#__PURE__*/sym('HELPER');
	var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
	var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
	var konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = /*#__PURE__*/konst(true);
	var noop$2 = function noop() {};
	var ident = function ident(v) {
	  return v;
	};

	function check(value, predicate, error) {
	  if (!predicate(value)) {
	    log('error', 'uncaught at check', error);
	    throw new Error(error);
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn$1(object, property) {
	  return is$1.notUndef(object) && hasOwnProperty.call(object, property);
	}

	var is$1 = {
	  undef: function undef(v) {
	    return v === null || v === undefined;
	  },
	  notUndef: function notUndef(v) {
	    return v !== null && v !== undefined;
	  },
	  func: function func(f) {
	    return typeof f === 'function';
	  },
	  number: function number(n) {
	    return typeof n === 'number';
	  },
	  string: function string(s) {
	    return typeof s === 'string';
	  },
	  array: Array.isArray,
	  object: function object(obj) {
	    return obj && !is$1.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof$3(obj)) === 'object';
	  },
	  promise: function promise(p) {
	    return p && is$1.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is$1.func(it.next) && is$1.func(it.throw);
	  },
	  iterable: function iterable(it) {
	    return it && is$1.func(Symbol) ? is$1.func(it[Symbol.iterator]) : is$1.array(it);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is$1.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is$1.func(buf.isEmpty) && is$1.func(buf.take) && is$1.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (is$1.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof$3(pat)) === 'symbol' || is$1.func(pat) || is$1.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is$1.func(ch.take) && is$1.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  },
	  stringableFunc: function stringableFunc(f) {
	    return is$1.func(f) && hasOwn$1(f, 'toString');
	  }
	};

	function delay(ms) {
	  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  var timeoutId = void 0;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(function () {
	      return resolve(val);
	    }, ms);
	  });

	  promise[CANCEL] = function () {
	    return clearTimeout(timeoutId);
	  };

	  return promise;
	}

	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return { value: value, done: true };
	};
	function makeIterator(next) {
	  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var isHelper = arguments[3];

	  var iterator = { name: name, next: next, throw: thro, return: kReturn };

	  if (isHelper) {
	    iterator[HELPER] = true;
	  }
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}

	/**
	  Print error in a useful way whether in a browser environment
	  (with expandable error stack traces), or in a node.js environment
	  (text-only log output)
	 **/
	function log(level, message) {
	  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	  /*eslint-disable no-console*/
	  if (typeof window === 'undefined') {
	    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
	  } else {
	    console[level](message, error);
	  }
	}

	function deprecate(fn, deprecationWarning) {
	  return function () {
	    log('warn', deprecationWarning);
	    return fn.apply(undefined, arguments);
	  };
	}

	var updateIncentive = function updateIncentive(deprecated, preferred) {
	  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
	};

	var createSetContextWarning = function createSetContextWarning(ctx, props) {
	  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
	};

	var IO = /*#__PURE__*/sym('IO');
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var ALL = 'ALL';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL$1 = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED = 'CANCELLED';
	var FLUSH = 'FLUSH';
	var GET_CONTEXT = 'GET_CONTEXT';
	var SET_CONTEXT = 'SET_CONTEXT';

	var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

	var effect = function effect(type, payload) {
	  var _ref;

	  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
	};

	var detach = function detach(eff) {
	  check(asEffect.fork(eff), is$1.object, 'detach(eff): argument must be a fork effect');
	  eff[FORK].detached = true;
	  return eff;
	};

	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

	  if (arguments.length) {
	    check(arguments[0], is$1.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (is$1.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (is$1.channel(patternOrChannel)) {
	    return effect(TAKE, { channel: patternOrChannel });
	  }
	  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
	}

	take.maybe = function () {
	  var eff = take.apply(undefined, arguments);
	  eff[TAKE].maybe = true;
	  return eff;
	};

	var takem = /*#__PURE__*/deprecate(take.maybe, /*#__PURE__*/updateIncentive('takem', 'take.maybe'));

	function put(channel, action) {
	  if (arguments.length > 1) {
	    check(channel, is$1.notUndef, 'put(channel, action): argument channel is undefined');
	    check(channel, is$1.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    check(action, is$1.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    check(channel, is$1.notUndef, 'put(action): argument action is undefined');
	    action = channel;
	    channel = null;
	  }
	  return effect(PUT, { channel: channel, action: action });
	}

	put.resolve = function () {
	  var eff = put.apply(undefined, arguments);
	  eff[PUT].resolve = true;
	  return eff;
	};

	put.sync = /*#__PURE__*/deprecate(put.resolve, /*#__PURE__*/updateIncentive('put.sync', 'put.resolve'));

	function all(effects) {
	  return effect(ALL, effects);
	}

	function race(effects) {
	  return effect(RACE, effects);
	}

	function getFnCallDesc(meth, fn, args) {
	  check(fn, is$1.notUndef, meth + ': argument fn is undefined');

	  var context = null;
	  if (is$1.array(fn)) {
	    var _fn = fn;
	    context = _fn[0];
	    fn = _fn[1];
	  } else if (fn.fn) {
	    var _fn2 = fn;
	    context = _fn2.context;
	    fn = _fn2.fn;
	  }
	  if (context && is$1.string(fn) && is$1.func(context[fn])) {
	    fn = context[fn];
	  }
	  check(fn, is$1.func, meth + ': argument ' + fn + ' is not a function');

	  return { context: context, fn: fn, args: args };
	}

	function call(fn) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return effect(CALL, getFnCallDesc('call', fn, args));
	}

	function apply(context, fn) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
	}

	function cps(fn) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }

	  return effect(CPS, getFnCallDesc('cps', fn, args));
	}

	function fork(fn) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }

	  return effect(FORK, getFnCallDesc('fork', fn, args));
	}

	function spawn(fn) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }

	  return detach(fork.apply(undefined, [fn].concat(args)));
	}

	function join() {
	  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    tasks[_key5] = arguments[_key5];
	  }

	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return join(t);
	    }));
	  }
	  var task = tasks[0];
	  check(task, is$1.notUndef, 'join(task): argument task is undefined');
	  check(task, is$1.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  return effect(JOIN, task);
	}

	function cancel() {
	  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tasks[_key6] = arguments[_key6];
	  }

	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return cancel(t);
	    }));
	  }
	  var task = tasks[0];
	  if (tasks.length === 1) {
	    check(task, is$1.notUndef, 'cancel(task): argument task is undefined');
	    check(task, is$1.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  }
	  return effect(CANCEL$1, task || SELF_CANCELLATION);
	}

	function select(selector) {
	  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    args[_key7 - 1] = arguments[_key7];
	  }

	  if (arguments.length === 0) {
	    selector = ident;
	  } else {
	    check(selector, is$1.notUndef, 'select(selector,[...]): argument selector is undefined');
	    check(selector, is$1.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}

	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  check(pattern, is$1.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    check(buffer, is$1.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    check(buffer, is$1.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}

	function cancelled() {
	  return effect(CANCELLED, {});
	}

	function flush(channel) {
	  check(channel, is$1.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}

	function getContext(prop) {
	  check(prop, is$1.string, 'getContext(prop): argument ' + prop + ' is not a string');
	  return effect(GET_CONTEXT, prop);
	}

	function setContext(props) {
	  check(props, is$1.object, createSetContextWarning(null, props));
	  return effect(SET_CONTEXT, props);
	}

	var createAsEffectType = function createAsEffectType(type) {
	  return function (effect) {
	    return effect && effect[IO] && effect[type];
	  };
	};

	var asEffect = {
	  take: /*#__PURE__*/createAsEffectType(TAKE),
	  put: /*#__PURE__*/createAsEffectType(PUT),
	  all: /*#__PURE__*/createAsEffectType(ALL),
	  race: /*#__PURE__*/createAsEffectType(RACE),
	  call: /*#__PURE__*/createAsEffectType(CALL),
	  cps: /*#__PURE__*/createAsEffectType(CPS),
	  fork: /*#__PURE__*/createAsEffectType(FORK),
	  join: /*#__PURE__*/createAsEffectType(JOIN),
	  cancel: /*#__PURE__*/createAsEffectType(CANCEL$1),
	  select: /*#__PURE__*/createAsEffectType(SELECT),
	  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
	  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
	  flush: /*#__PURE__*/createAsEffectType(FLUSH),
	  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
	  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
	};

	var done = { done: true, value: undefined };
	var qEnd = {};

	function safeName(patternOrChannel) {
	  if (is$1.channel(patternOrChannel)) {
	    return 'channel';
	  } else if (Array.isArray(patternOrChannel)) {
	    return String(patternOrChannel.map(function (entry) {
	      return String(entry);
	    }));
	  } else {
	    return String(patternOrChannel);
	  }
	}

	function fsmIterator(fsm, q0) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

	  var updateState = void 0,
	      qNext = q0;

	  function next(arg, error) {
	    if (qNext === qEnd) {
	      return done;
	    }

	    if (error) {
	      qNext = qEnd;
	      throw error;
	    } else {
	      updateState && updateState(arg);

	      var _fsm$qNext = fsm[qNext](),
	          q = _fsm$qNext[0],
	          output = _fsm$qNext[1],
	          _updateState = _fsm$qNext[2];

	      qNext = q;
	      updateState = _updateState;
	      return qNext === qEnd ? done : output;
	    }
	  }

	  return makeIterator(next, function (error) {
	    return next(null, error);
	  }, name, true);
	}

	var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_DROP = 2;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;

	var zeroBuffer = { isEmpty: kTrue, put: noop$2, take: noop$2 };

	function ringBuffer() {
	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var overflowAction = arguments[1];

	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;

	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };

	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };

	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };

	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit = void 0;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;

	            arr = flush();

	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;

	            arr.length = doubledLimit;
	            limit = doubledLimit;

	            push(it);
	            break;
	          default:
	          // DROP
	        }
	      }
	    },
	    take: take,
	    flush: flush
	  };
	}

	var buffers = {
	  none: function none() {
	    return zeroBuffer;
	  },
	  fixed: function fixed(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_THROW);
	  },
	  dropping: function dropping(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_DROP);
	  },
	  sliding: function sliding(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
	  },
	  expanding: function expanding(initialSize) {
	    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	  }
	};

	var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
	var END = { type: CHANNEL_END_TYPE };

	function takeEvery(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var yTake = { done: false, value: take(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
	  };

	  var action = void 0,
	      setAction = function setAction(ac) {
	    return action = ac;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === END ? [qEnd] : ['q1', yFork(action)];
	    }
	  }, 'q1', 'takeEvery(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
	}

	function takeLatest(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var yTake = { done: false, value: take(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yCancel = function yCancel(task) {
	    return { done: false, value: cancel(task) };
	  };

	  var task = void 0,
	      action = void 0;
	  var setTask = function setTask(t) {
	    return task = t;
	  };
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === END ? [qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
	    },
	    q3: function q3() {
	      return ['q1', yFork(action), setTask];
	    }
	  }, 'q1', 'takeLatest(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
	}

	function throttle(delayLength, pattern, worker) {
	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }

	  var action = void 0,
	      channel$$1 = void 0;

	  var yActionChannel = { done: false, value: actionChannel(pattern, buffers.sliding(1)) };
	  var yTake = function yTake() {
	    return { done: false, value: take(channel$$1) };
	  };
	  var yFork = function yFork(ac) {
	    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yDelay = { done: false, value: call(delay, delayLength) };

	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	  var setChannel = function setChannel(ch) {
	    return channel$$1 = ch;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yActionChannel, setChannel];
	    },
	    q2: function q2() {
	      return ['q3', yTake(), setAction];
	    },
	    q3: function q3() {
	      return action === END ? [qEnd] : ['q4', yFork(action)];
	    },
	    q4: function q4() {
	      return ['q2', yDelay];
	    }
	  }, 'q1', 'throttle(' + safeName(pattern) + ', ' + worker.name + ')');
	}

	function takeEvery$2(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  return fork.apply(undefined, [takeEvery, patternOrChannel, worker].concat(args));
	}

	function takeLatest$2(patternOrChannel, worker) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    args[_key2 - 2] = arguments[_key2];
	  }

	  return fork.apply(undefined, [takeLatest, patternOrChannel, worker].concat(args));
	}

	function throttle$2(ms, pattern, worker) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    args[_key3 - 3] = arguments[_key3];
	  }

	  return fork.apply(undefined, [throttle, ms, pattern, worker].concat(args));
	}



	var effects = /*#__PURE__*/Object.freeze({
		take: take,
		takem: takem,
		put: put,
		all: all,
		race: race,
		call: call,
		apply: apply,
		cps: cps,
		fork: fork,
		spawn: spawn,
		join: join,
		cancel: cancel,
		select: select,
		actionChannel: actionChannel,
		cancelled: cancelled,
		flush: flush,
		getContext: getContext,
		setContext: setContext,
		takeEvery: takeEvery$2,
		takeLatest: takeLatest$2,
		throttle: throttle$2
	});

	var FETCH_PARAMS = "@@MIDDLEWARE/FETCH_PARAMS";
	var FETCH_REQ = "@@MIDDLEWARE/FETCH_REQ";
	var FETCH_RES = "@@MIDDLEWARE/FETCH_RES";
	function fetchReq(payload) {
	  return {
	    type: FETCH_REQ,
	    payload: payload
	  };
	}
	function fetchRes(payload) {
	  return {
	    type: FETCH_RES,
	    payload: payload
	  };
	}
	function fetchParams(payload) {
	  return {
	    type: FETCH_PARAMS,
	    payload: payload
	  };
	}

	function fetchingReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    fetching: new Map(),
	    params: new Map()
	  };

	  var _ref = arguments.length > 1 ? arguments[1] : undefined,
	      type = _ref.type,
	      payload = _ref.payload;

	  var fetching = state.fetching,
	      params = state.params;

	  switch (type) {
	    case FETCH_PARAMS:
	      return objectSpread({}, state, {
	        params: params.set(payload.type, payload.payload)
	      });

	    case FETCH_REQ:
	      return objectSpread({}, state, {
	        fetching: new Map(fetching.set(payload.type, true))
	      });

	    case FETCH_RES:
	      return objectSpread({}, state, {
	        fetching: new Map(fetching.set(payload.type, false))
	      });

	    default:
	      return state;
	  } //  return state

	}

	function createFetching(_ref2
	/*fetchRegexp:regexp,paramsRegexp:regexp */
	) {
	  var fetchRegexp = _ref2.fetchRegexp,
	      paramsRegexp = _ref2.paramsRegexp;
	  return function (_ref3) {
	    var getState = _ref3.getState,
	        dispatch = _ref3.dispatch;
	    return function (next) {
	      return function (action) {
	        /*
	        if (new RegExp(paramsRegexp).test(action.type)) {
	          dispatch({ type: 'FETCH_PARAMS', payload: action })
	        }
	        */
	        // if (new RegExp(fetchRegexp).test(action.type)) {
	        //   setTimeout(function(){
	        //     dispatch({ type: '@@MIDDLEWARE/FETCH_REQ', payload: { type: action.type, payload: true } })
	        //   },0)
	        //   //const returnValue = next(action);
	        //   next(action);
	        //   setTimeout(function(){
	        //     dispatch({ type: "@@MIDDLEWARE/FETCH_SUCCESS", payload: { type: action.type, payload: false } });
	        //   },0)
	        // } else {
	        return next(action); // }
	      };
	    };
	  };
	}

	var SHOW_SUCCESS = "@@MIDDLEWARE/SHOW_SUCCESS";
	var SHOW_ERROR = "@@MIDDLEWARE/SHOW_ERROR";
	function showSuccess(payload) {
	  return {
	    type: SHOW_SUCCESS,
	    payload: payload
	  };
	}
	function showError(payload) {
	  return {
	    type: SHOW_ERROR,
	    payload: payload
	  };
	}
	function createMessage(message) {
	  return function (_ref) {
	    var getState = _ref.getState,
	        dispatch = _ref.dispatch;
	    return function (next) {
	      return function (action) {
	        if (SHOW_SUCCESS === action.type) {
	          message.success(action.payload);
	        } else if (SHOW_ERROR === action.type) {
	          message.error(action.payload);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	function globalReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    dicts: {},
	    bizCodes: {},
	    config: {}
	  };

	  var _ref = arguments.length > 1 ? arguments[1] : undefined,
	      type = _ref.type,
	      payload = _ref.payload;

	  var fetching = state.fetching,
	      params = state.params;

	  switch (type) {
	    case '@@MIDDLEWARE/UPGRADE_DICT':
	      return objectSpread({}, state, {
	        dicts: payload
	      });

	    case '@@MIDDLEWARE/UPGRADE_BIZCODE':
	      return objectSpread({}, state, {
	        bizCodes: payload
	      });

	    case '@@MIDDLEWARE/UPGRADE_CONFIG':
	      return objectSpread({}, state, {
	        config: Object.assign({}, state.config, payload)
	      });

	    case '@@MIDDLEWARE/UPGRADE_USER':
	      return objectSpread({}, state);

	    case '@@MIDDLEWARE/UPGRADE_AUTHS':
	      return objectSpread({}, state);

	    default:
	      return state;
	  } //  return state

	}

	function createModule() {
	  return function (_ref2) {
	    var getState = _ref2.getState,
	        dispatch = _ref2.dispatch;
	    return function (next) {
	      return function (action) {
	        next(action);
	      };
	    };
	  };
	}



	var index$5 = /*#__PURE__*/Object.freeze({
		createFetching: createFetching,
		fetchingReducer: fetchingReducer,
		fetchReq: fetchReq,
		fetchRes: fetchRes,
		fetchParams: fetchParams,
		createMessage: createMessage,
		showSuccess: showSuccess,
		showError: showError,
		createModule: createModule,
		globalReducer: globalReducer
	});

	var _marked =
	/*#__PURE__*/
	regenerator.mark(fetch),
	    _marked2 =
	/*#__PURE__*/
	regenerator.mark(takeSagas);
	var goBack = lib_15;
	function fetch(method, action) {
	  var result;
	  return regenerator.wrap(function fetch$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return put(fetchParams(action));

	        case 2:
	          _context.next = 4;
	          return call(method, action.payload);

	        case 4:
	          result = _context.sent;
	          return _context.abrupt("return", result);

	        case 6:
	        case "end":
	          return _context.stop();
	      }
	    }
	  }, _marked, this);
	}
	function defaultSaga(actions, Api) {
	  var saga = {
	    refreshList:
	    /*#__PURE__*/
	    regenerator.mark(function refreshList(action, namespaceSelector) {
	      var params;
	      return regenerator.wrap(function refreshList$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return select(function (state) {
	                //    return Object.assign({},state[namespace].page,state.fetchingReducer.params.get(actions.listAction.toString()))
	                return {};
	              });

	            case 2:
	              params = _context2.sent;
	              _context2.next = 5;
	              return call(saga.fetchList, params);

	            case 5:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, refreshList, this);
	    }),
	    fetchItem:
	    /*#__PURE__*/
	    regenerator.mark(function fetchItem(action) {
	      var result;
	      return regenerator.wrap(function fetchItem$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.next = 2;
	              return fetch(Api.fetchItem, action);

	            case 2:
	              result = _context3.sent;

	              if (!(result.code === 0)) {
	                _context3.next = 8;
	                break;
	              }

	              _context3.next = 6;
	              return put(actions.saveItem(result.data));

	            case 6:
	              _context3.next = 10;
	              break;

	            case 8:
	              _context3.next = 10;
	              return put(showError(result.message));

	            case 10:
	            case "end":
	              return _context3.stop();
	          }
	        }
	      }, fetchItem, this);
	    }),
	    fetchList:
	    /*#__PURE__*/
	    regenerator.mark(function fetchList(action) {
	      var result;
	      return regenerator.wrap(function fetchList$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.next = 2;
	              return call(Api.fetchList, action.payload);

	            case 2:
	              result = _context4.sent;

	              if (!(result.code === 0)) {
	                _context4.next = 8;
	                break;
	              }

	              _context4.next = 6;
	              return put(actions.saveList(result.data));

	            case 6:
	              _context4.next = 10;
	              break;

	            case 8:
	              _context4.next = 10;
	              return put(showError(result.message));

	            case 10:
	            case "end":
	              return _context4.stop();
	          }
	        }
	      }, fetchList, this);
	    }),
	    fetchSave:
	    /*#__PURE__*/
	    regenerator.mark(function fetchSave(action) {
	      var result;
	      return regenerator.wrap(function fetchSave$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              _context5.next = 2;
	              return fetch(Api.fetchSave, action);

	            case 2:
	              result = _context5.sent;

	              if (!(result.code === 0)) {
	                _context5.next = 12;
	                break;
	              }

	              _context5.next = 6;
	              return put(actions.saveItem(result.data));

	            case 6:
	              _context5.next = 8;
	              return put(showSuccess());

	            case 8:
	              _context5.next = 10;
	              return put(goBack());

	            case 10:
	              _context5.next = 14;
	              break;

	            case 12:
	              _context5.next = 14;
	              return put(showError(result.message));

	            case 14:
	            case "end":
	              return _context5.stop();
	          }
	        }
	      }, fetchSave, this);
	    }),
	    fetchDelete:
	    /*#__PURE__*/
	    regenerator.mark(function fetchDelete(action) {
	      var payload, result;
	      return regenerator.wrap(function fetchDelete$(_context6) {
	        while (1) {
	          switch (_context6.prev = _context6.next) {
	            case 0:
	              payload = {
	                ids: [].concat(action.payload)
	              };
	              _context6.next = 3;
	              return fetch(Api.fetchDelete, Object.assign(action, {
	                payload: payload
	              }));

	            case 3:
	              result = _context6.sent;

	              if (!(result.code === 0)) {
	                _context6.next = 11;
	                break;
	              }

	              _context6.next = 7;
	              return saga.refreshList(action);

	            case 7:
	              _context6.next = 9;
	              return put(showSuccess());

	            case 9:
	              _context6.next = 13;
	              break;

	            case 11:
	              _context6.next = 13;
	              return put(showError(result.message));

	            case 13:
	            case "end":
	              return _context6.stop();
	          }
	        }
	      }, fetchDelete, this);
	    })
	  };
	  return saga;
	}
	function takeSagas(sagaTypes, saga) {
	  var optimize,
	      s,
	      _args7 = arguments;
	  return regenerator.wrap(function takeSagas$(_context7) {
	    while (1) {
	      switch (_context7.prev = _context7.next) {
	        case 0:
	          optimize = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
	          _context7.t0 = regenerator.keys(saga);

	        case 2:
	          if ((_context7.t1 = _context7.t0()).done) {
	            _context7.next = 13;
	            break;
	          }

	          s = _context7.t1.value;

	          if (!optimize[s]) {
	            _context7.next = 9;
	            break;
	          }

	          _context7.next = 7;
	          return optimize[s](sagaTypes[s].toString(), saga[s]);

	        case 7:
	          _context7.next = 11;
	          break;

	        case 9:
	          _context7.next = 11;
	          return takeEvery$2(sagaTypes[s].toString(), saga[s]);

	        case 11:
	          _context7.next = 2;
	          break;

	        case 13:
	        case "end":
	          return _context7.stop();
	      }
	    }
	  }, _marked2, this);
	}

	var index$6 = /*#__PURE__*/Object.freeze({
		effects: effects,
		fetch: fetch,
		defaultSaga: defaultSaga,
		takeSagas: takeSagas
	});

	// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"

	var defaultMergeProps$1 = function defaultMergeProps(state, dispatch, ownProps) {
	  return Object.assign({}, ownProps, state, dispatch, {
	    spins: function spins(type) {
	      return state.fetchingReducer.fetching.get(type.toString ? type.toString() : type);
	    },
	    querys: function querys(type) {
	      return state.fetchingReducer.params.get(type.toString ? type.toString() : type) || {};
	    },
	    locale: function locale(type, value) {
	      if (state.intl) {
	        if (state.messages[type]) {
	          return state.intl.formatMessage(state.messages[type], value);
	        } else {
	          return state.intl.formatMessage({
	            id: type
	          });
	        }
	      }

	      return "";
	    }
	  });
	};
	function bindActionCreators$1(actions, dispatch) {
	  var newActions = bindActionCreators(actions, dispatch);

	  for (var a in actions) {
	    // console.log(actions[a])
	    newActions[a].toString = actions[a].toString;
	  } // console.log(newActions)


	  return newActions;
	}
	/*
	export const mapActionDispatchToProps = (dispatch,props,action)=>{
	  console.log(arguments)
	  console.log(action)
	  const { TYPES, actions } =action
	  return (dispatch,props) => {
	    return {
	      types: TYPES,
	      actions: bindActionCreators(actions, dispatch),
	      dispatch
	    };
	  }
	}
	*/

	/*
	export function connectContainer(component,mapStateToProps,mapDispatchToProps,defaultMergeProps){
	  console.log(connect)
	  console.log("component",component,mapStateToProps,mapDispatchToProps,defaultMergeProps)
	  return injectIntl(connect(mapStateToProps,mapDispatchToProps,defaultMergeProps)(component))
	}
	*/

	var index$7 = /*#__PURE__*/Object.freeze({
		defaultMergeProps: defaultMergeProps$1,
		bindActionCreators: bindActionCreators$1,
		connect: connect
	});

	// export * as router from './router'

	exports.ModuleRouter = index$2;
	exports.ModuleAction = index$3;
	exports.ModuleReducer = index$4;
	exports.ModuleSaga = index$6;
	exports.ModuleContainer = index$7;
	exports.ModuleMiddleware = index$5;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
