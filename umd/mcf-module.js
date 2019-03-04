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
	      return es$1.Router;
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
	      return es$1.matchPath;

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
	    savePage: function savePage(state, _ref) {
	      var payload = _ref.payload;
	      return objectSpread({}, state, {
	        // items:payload.items,
	        total: payload.totalCount,
	        current: payload.currentPage
	      });
	    },
	    saveList: function saveList(state, _ref2) {
	      var payload = _ref2.payload;
	      return objectSpread({}, state, {
	        items: payload.items,
	        total: payload.totalCount,
	        current: payload.currentPage
	      });
	    },
	    saveItem: function saveItem(state, _ref3) {
	      var payload = _ref3.payload;
	      return objectSpread({}, state, {
	        item: payload
	      });
	    },
	    deleteItem: function deleteItem(state, _ref4) {
	      var payload = _ref4.payload;
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
	          message.success(action.payload || "操作成功");
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
	function defaultSaga(actions, Api, namespace) {
	  var saga = {
	    refreshList:
	    /*#__PURE__*/
	    regenerator.mark(function refreshList(action) {
	      var params, listAction;
	      return regenerator.wrap(function refreshList$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return select(function (state) {
	                return Object.assign({}, state[namespace].page, state.fetchingReducer.params.get(saga.fetchList.toString())); // return {}
	              });

	            case 2:
	              params = _context2.sent;
	              // console.log(saga.fetchList,saga.fetchList())
	              //临时方案后续处理
	              listAction = {
	                type: [namespace, "fetchList"].join("/"),
	                payload: params,
	                meta: {
	                  sagaAction: true
	                }
	              };
	              _context2.next = 6;
	              return put({
	                type: "@@MIDDLEWARE/FETCH_PARAMS",
	                payload: listAction,
	                "@@redux-saga/SAGA_ACTION": true
	              });

	            case 6:
	              _context2.next = 8;
	              return put({
	                type: "@@MIDDLEWARE/FETCH_REQ",
	                payload: listAction,
	                "@@redux-saga/SAGA_ACTION": true
	              });

	            case 8:
	              _context2.next = 10;
	              return fork(saga.fetchList, listAction);

	            case 10:
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
	              return put(showSuccess());

	            case 7:
	              _context6.next = 9;
	              return saga.refreshList(action);

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

	function getDictList(dictData, dicName) {
	  // console.log(dictData)
	  return dictData[dicName] || [];
	}
	function getDictLabel(dictData, dicName, value) {
	  var label = '';

	  try {
	    var map = getDictList(dictData, dicName);
	    map.forEach(function (arr) {
	      if (arr.value === value) {
	        label = arr.label; // throw 'Finish and value = ' + label 
	      }
	    });
	  } catch (e) {
	    console.log(e);
	  } // console.log(label)


	  return label;
	}

	// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"

	var defaultMergeProps$1 = function defaultMergeProps(state, dispatch, ownProps) {
	  return Object.assign({}, ownProps, state, dispatch, {
	    spins: function spins(type) {
	      return state.fetchingReducer.fetching.get(type.toString ? type.toString() : type);
	    },
	    querys: function querys(type) {
	      return state.fetchingReducer.params.get(type.toString ? type.toString() : type) || {};
	    },
	    dicts: function dicts(type, value) {
	      if (arguments.length > 1) {
	        return getDictLabel(state.appReducer, type, value);
	      } else if (arguments.legnth == 1) {
	        return getDictList(state.appReducer, type);
	      }

	      return "";
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

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _library = true;

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is$2 = _isObject(document) && _isObject(document.createElement);
	var _domCreate = function (it) {
	  return is$2 ? document.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _redefine = _hide;

	var _iterators = {};

	var toString$1 = {}.toString;

	var _cof = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'pure',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$1 = _global.document;
	var _html = document$1 && document$1.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	var TO_STRING_TAG = _wks('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	var f$1 = _wks;

	var _wksExt = {
		f: f$1
	};

	var iterator = _wksExt.f('iterator');

	var iterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": iterator, __esModule: true };
	});

	unwrapExports(iterator$1);

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var defineProperty$3 = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$3($Symbol, name, { value: _wksExt.f(name) });
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$2 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$2.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol$1 = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol$1(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var symbol = _core.Symbol;

	var symbol$1 = createCommonjsModule(function (module) {
	module.exports = { "default": symbol, __esModule: true };
	});

	unwrapExports(symbol$1);

	var _typeof_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(iterator$1);



	var _symbol2 = _interopRequireDefault(symbol$1);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	var _typeof$4 = unwrapExports(_typeof_1);

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	var assign$1 = createCommonjsModule(function (module) {
	module.exports = { "default": assign, __esModule: true };
	});

	var _Object$assign = unwrapExports(assign$1);

	var classCallCheck = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck$7 = unwrapExports(classCallCheck);

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	var $Object = _core.Object;
	var defineProperty$4 = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty$5 = createCommonjsModule(function (module) {
	module.exports = { "default": defineProperty$4, __esModule: true };
	});

	var _Object$defineProperty = unwrapExports(defineProperty$5);

	var createClass = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	});

	var _createClass = unwrapExports(createClass);

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$1 = _freeGlobal || freeSelf || Function('return this')();

	var _root = root$1;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$2.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$1(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$1;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	var defineProperty$6 = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty$3 = defineProperty$6;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty$3) {
	    _defineProperty$3(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = _createBaseFor();

	var _baseFor = baseFor;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray$1 = Array.isArray;

	var isArray_1 = isArray$1;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$4.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$5.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && _baseFor(object, iteratee, keys_1);
	}

	var _baseForOwn = baseForOwn;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$8.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$8.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag$1:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$1:
	      var convert = _mapToArray;

	    case setTag$1:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$9.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$2 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$2 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
	    (_Map && getTag(new _Map) != mapTag$2) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$2) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$2;
	        case mapCtorString: return mapTag$2;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$2;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    objectTag$2 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$b.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$1 : _getTag(object),
	      othTag = othIsArr ? arrayTag$1 : _getTag(other);

	  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
	  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

	  var objIsObj = objTag == objectTag$2,
	      othIsObj = othTag == objectTag$2,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$a.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$a.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new _Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject_1(value);
	}

	var _isStrictComparable = isStrictComparable;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys_1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, _isStrictComparable(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = _getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || _baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$2(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol$2;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol_1(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = _MapCache;

	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize_1(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = _memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$3(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString$3;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }
	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = _castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get$1(object, path, defaultValue) {
	  var result = object == null ? undefined : _baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get$1;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) &&
	    (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (_isKey(path) && _isStrictComparable(srcValue)) {
	    return _matchesStrictComparable(_toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get_1(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn_1(object, path)
	      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity$1(value) {
	  return value;
	}

	var identity_1 = identity$1;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return _baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
	}

	var property_1 = property;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity_1;
	  }
	  if (typeof value == 'object') {
	    return isArray_1(value)
	      ? _baseMatchesProperty(value[0], value[1])
	      : _baseMatches(value);
	  }
	  return property_1(value);
	}

	var _baseIteratee = baseIteratee;

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = _baseIteratee(iteratee, 3);

	  _baseForOwn(object, function(value, key, object) {
	    _baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}

	var mapValues_1 = mapValues;

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	var keys$1 = _core.Object.keys;

	var keys$2 = createCommonjsModule(function (module) {
	module.exports = { "default": keys$1, __esModule: true };
	});

	var _Object$keys = unwrapExports(keys$2);

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

	var $getOwnPropertyDescriptor$1 = _objectGopd.f;

	_objectSap('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
	  };
	});

	var $Object$1 = _core.Object;
	var getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(it, key) {
	  return $Object$1.getOwnPropertyDescriptor(it, key);
	};

	var getOwnPropertyDescriptor$3 = createCommonjsModule(function (module) {
	module.exports = { "default": getOwnPropertyDescriptor$2, __esModule: true };
	});

	var _Object$getOwnPropertyDescriptor = unwrapExports(getOwnPropertyDescriptor$3);

	// 19.1.2.9 Object.getPrototypeOf(O)



	_objectSap('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return _objectGpo(_toObject(it));
	  };
	});

	var getPrototypeOf$2 = _core.Object.getPrototypeOf;

	var getPrototypeOf$3 = createCommonjsModule(function (module) {
	module.exports = { "default": getPrototypeOf$2, __esModule: true };
	});

	var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$3);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity_1;
	}

	var _castFunction = castFunction;

	/**
	 * Iterates over own enumerable string keyed properties of an object and
	 * invokes `iteratee` for each property. The iteratee is invoked with three
	 * arguments: (value, key, object). Iteratee functions may exit iteration
	 * early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.3.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 * @see _.forOwnRight
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.forOwn(new Foo, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forOwn(object, iteratee) {
	  return object && _baseForOwn(object, _castFunction(iteratee));
	}

	var forOwn_1 = forOwn;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseFindIndex = baseFindIndex;

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	var _baseIsNaN = baseIsNaN;

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _strictIndexOf = strictIndexOf;

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? _strictIndexOf(array, value, fromIndex)
	    : _baseFindIndex(array, _baseIsNaN, fromIndex);
	}

	var _baseIndexOf = baseIndexOf;

	/** `Object#toString` result references. */
	var stringTag$2 = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString$1(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$2);
	}

	var isString_1 = isString$1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Used as references for various `Number` constants. */
	var INFINITY$2 = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber_1(value);
	  if (value === INFINITY$2 || value === -INFINITY$2) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite_1(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger;

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return _arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	var _baseValues = baseValues;

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : _baseValues(object, keys_1(object));
	}

	var values_1 = values;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike_1(collection) ? collection : values_1(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger_1(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString_1(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && _baseIndexOf(collection, value, fromIndex) > -1);
	}

	var includes_1 = includes;

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$1 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var ITERATOR$3 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	var from_1 = _core.Array.from;

	var from_1$1 = createCommonjsModule(function (module) {
	module.exports = { "default": from_1, __esModule: true };
	});

	unwrapExports(from_1$1);

	var toConsumableArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _from2 = _interopRequireDefault(from_1$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var _isPlaceholder = function _isPlaceholder(a) {
	  return a != null &&
	         typeof a === 'object' &&
	         a['@@functional/placeholder'] === true;
	};

	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	var _curry1 = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};

	var _arity = function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0: return function() { return fn.apply(this, arguments); };
	    case 1: return function(a0) { return fn.apply(this, arguments); };
	    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
	    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
	    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
	    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
	    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
	    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	var _curry2 = function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2
	             : _curry1(function(_b) { return fn(a, _b); });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
	             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
	             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
	             : fn(a, b);
	    }
	  };
	};

	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	var _curryN = function _curryN(length, received, fn) {
	  return function() {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length &&
	          (!_isPlaceholder(received[combinedIdx]) ||
	           argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined)
	                     : _arity(left, _curryN(length, combined, fn));
	  };
	};

	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	var curryN = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});

	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	var curry$1 = _curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});

	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments, regardless of
	 * their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are
	 * equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	var __ = {'@@functional/placeholder': true};

	var lib$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ops = exports.getBatchToken = undefined;



	var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



	var _assign2 = _interopRequireDefault(assign$1);



	var _defineProperty2 = _interopRequireDefault(defineProperty$5);



	var _symbol2 = _interopRequireDefault(symbol$1);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	exports.canMutate = canMutate;
	exports.getImmutableOps = getImmutableOps;



	var _curry2 = _interopRequireDefault(curry$1);



	var _2 = _interopRequireDefault(__);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function forOwn(obj, fn) {
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            fn(obj[key], key);
	        }
	    }
	}

	function isArrayLike(value) {
	    return value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && value.length % 1 === 0;
	}

	var OWNER_ID_TAG = '@@_______immutableOpsOwnerID';

	function fastArrayCopy(arr) {
	    var copied = new Array(arr.length);
	    for (var i = 0; i < arr.length; i++) {
	        copied[i] = arr[i];
	    }
	    return copied;
	}

	function canMutate(obj, ownerID) {
	    if (!ownerID) return false;
	    return obj[OWNER_ID_TAG] === ownerID;
	}

	var newOwnerID = typeof _symbol2.default === 'function' ? function () {
	    return (0, _symbol2.default)('ownerID');
	} : function () {
	    return {};
	};

	var getBatchToken = exports.getBatchToken = newOwnerID;

	function addOwnerID(obj, ownerID) {
	    (0, _defineProperty2.default)(obj, OWNER_ID_TAG, {
	        value: ownerID,
	        configurable: true,
	        enumerable: false
	    });

	    return obj;
	}

	function prepareNewObject(instance, ownerID) {
	    if (ownerID) {
	        addOwnerID(instance, ownerID);
	    }
	    return instance;
	}

	function forceArray(arg) {
	    if (!(arg instanceof Array)) {
	        return [arg];
	    }
	    return arg;
	}

	var PATH_SEPARATOR = '.';

	function normalizePath(pathArg) {
	    if (typeof pathArg === 'string') {
	        if (pathArg.indexOf(PATH_SEPARATOR) === -1) {
	            return [pathArg];
	        }
	        return pathArg.split(PATH_SEPARATOR);
	    }

	    return pathArg;
	}

	function mutableSet(key, value, obj) {
	    obj[key] = value;
	    return obj;
	}

	function mutableSetIn(_pathArg, value, obj) {
	    var originalPathArg = normalizePath(_pathArg);

	    var pathLen = originalPathArg.length;

	    var done = false;
	    var idx = 0;
	    var acc = obj;
	    var curr = originalPathArg[idx];

	    while (!done) {
	        if (idx === pathLen - 1) {
	            acc[curr] = value;
	            done = true;
	        } else {
	            var currType = (0, _typeof3.default)(acc[curr]);

	            if (currType === 'undefined') {
	                var newObj = {};
	                prepareNewObject(newObj, null);
	                acc[curr] = newObj;
	            } else if (currType !== 'object') {
	                var pathRepr = originalPathArg[idx - 1] + '.' + curr;
	                throw new Error('A non-object value was encountered when traversing setIn path at ' + pathRepr + '.');
	            }
	            acc = acc[curr];
	            idx++;
	            curr = originalPathArg[idx];
	        }
	    }

	    return obj;
	}

	function valueInPath(_pathArg, obj) {
	    var pathArg = normalizePath(_pathArg);

	    var acc = obj;
	    for (var i = 0; i < pathArg.length; i++) {
	        var curr = pathArg[i];
	        var currRef = acc[curr];
	        if (i === pathArg.length - 1) {
	            return currRef;
	        }

	        if ((typeof currRef === 'undefined' ? 'undefined' : (0, _typeof3.default)(currRef)) === 'object') {
	            acc = currRef;
	        } else {
	            return undefined;
	        }
	    }
	}

	function immutableSetIn(ownerID, _pathArg, value, obj) {
	    var pathArg = normalizePath(_pathArg);

	    var currentValue = valueInPath(pathArg, obj);
	    if (value === currentValue) return obj;

	    var pathLen = pathArg.length;

	    var acc = void 0;
	    if (canMutate(obj, ownerID)) {
	        acc = obj;
	    } else {
	        acc = (0, _assign2.default)(prepareNewObject({}, ownerID), obj);
	    }

	    var rootObj = acc;

	    pathArg.forEach(function (curr, idx) {
	        if (idx === pathLen - 1) {
	            acc[curr] = value;
	            return;
	        }

	        var currRef = acc[curr];
	        var currType = typeof currRef === 'undefined' ? 'undefined' : (0, _typeof3.default)(currRef);

	        if (currType === 'object') {
	            if (canMutate(currRef, ownerID)) {
	                acc = currRef;
	            } else {
	                var newObj = prepareNewObject({}, ownerID);
	                acc[curr] = (0, _assign2.default)(newObj, currRef);
	                acc = newObj;
	            }
	            return;
	        }

	        if (currType === 'undefined') {
	            var _newObj = prepareNewObject({}, ownerID);
	            acc[curr] = _newObj;
	            acc = _newObj;
	            return;
	        }

	        var pathRepr = pathArg[idx - 1] + '.' + curr;
	        throw new Error('A non-object value was encountered when traversing setIn path at ' + pathRepr + '.');
	    });

	    return rootObj;
	}

	function mutableMerge(isDeep, _mergeObjs, baseObj) {
	    var mergeObjs = forceArray(_mergeObjs);

	    if (isDeep) {
	        mergeObjs.forEach(function (mergeObj) {
	            forOwn(mergeObj, function (value, key) {
	                if (isDeep && baseObj.hasOwnProperty(key)) {
	                    var assignValue = void 0;
	                    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	                        assignValue = mutableMerge(isDeep, [value], baseObj[key]);
	                    } else {
	                        assignValue = value;
	                    }

	                    baseObj[key] = assignValue;
	                } else {
	                    baseObj[key] = value;
	                }
	            });
	        });
	    } else {
	        _assign2.default.apply(Object, [baseObj].concat((0, _toConsumableArray3.default)(mergeObjs)));
	    }

	    return baseObj;
	}

	var mutableShallowMerge = mutableMerge.bind(null, false);
	var mutableDeepMerge = mutableMerge.bind(null, true);

	function mutableOmit(_keys, obj) {
	    var keys = forceArray(_keys);
	    keys.forEach(function (key) {
	        delete obj[key];
	    });
	    return obj;
	}

	function _shouldMergeKey(obj, other, key) {
	    return obj[key] !== other[key];
	}

	function immutableMerge(isDeep, ownerID, _mergeObjs, obj) {
	    if (canMutate(obj, ownerID)) return mutableMerge(isDeep, _mergeObjs, obj);
	    var mergeObjs = forceArray(_mergeObjs);

	    var hasChanges = false;
	    var nextObject = obj;

	    var willChange = function willChange() {
	        if (!hasChanges) {
	            hasChanges = true;
	            nextObject = (0, _assign2.default)({}, obj);
	            prepareNewObject(nextObject, ownerID);
	        }
	    };

	    mergeObjs.forEach(function (mergeObj) {
	        forOwn(mergeObj, function (mergeValue, key) {
	            if (isDeep && obj.hasOwnProperty(key)) {
	                var currentValue = nextObject[key];
	                if ((typeof mergeValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(mergeValue)) === 'object' && !(mergeValue instanceof Array)) {
	                    if (_shouldMergeKey(nextObject, mergeObj, key)) {
	                        var recursiveMergeResult = immutableMerge(isDeep, ownerID, mergeValue, currentValue);

	                        if (recursiveMergeResult !== currentValue) {
	                            willChange();
	                            nextObject[key] = recursiveMergeResult;
	                        }
	                    }
	                    return true; // continue forOwn
	                }
	            }
	            if (_shouldMergeKey(nextObject, mergeObj, key)) {
	                willChange();
	                nextObject[key] = mergeValue;
	            }
	        });
	    });

	    return nextObject;
	}

	var immutableDeepMerge = immutableMerge.bind(null, true);
	var immutableShallowMerge = immutableMerge.bind(null, false);

	function immutableArrSet(ownerID, index, value, arr) {
	    if (canMutate(arr, ownerID)) return mutableSet(index, value, arr);

	    if (arr[index] === value) return arr;

	    var newArr = fastArrayCopy(arr);
	    newArr[index] = value;
	    prepareNewObject(newArr, ownerID);

	    return newArr;
	}

	function immutableSet(ownerID, key, value, obj) {
	    if (isArrayLike(obj)) return immutableArrSet(ownerID, key, value, obj);
	    if (canMutate(obj, ownerID)) return mutableSet(key, value, obj);

	    if (obj[key] === value) return obj;

	    var newObj = (0, _assign2.default)({}, obj);
	    prepareNewObject(newObj, ownerID);
	    newObj[key] = value;
	    return newObj;
	}

	function immutableOmit(ownerID, _keys, obj) {
	    if (canMutate(obj, ownerID)) return mutableOmit(_keys, obj);

	    var keys = forceArray(_keys);
	    var keysInObj = keys.filter(function (key) {
	        return obj.hasOwnProperty(key);
	    });

	    // None of the keys were in the object, so we can return `obj`.
	    if (keysInObj.length === 0) return obj;

	    var newObj = (0, _assign2.default)({}, obj);
	    keysInObj.forEach(function (key) {
	        delete newObj[key];
	    });
	    prepareNewObject(newObj, ownerID);
	    return newObj;
	}

	function mutableArrPush(_vals, arr) {
	    var vals = forceArray(_vals);
	    arr.push.apply(arr, (0, _toConsumableArray3.default)(vals));
	    return arr;
	}

	function mutableArrFilter(func, arr) {
	    var currIndex = 0;
	    var originalIndex = 0;
	    while (currIndex < arr.length) {
	        var item = arr[currIndex];
	        if (!func(item, originalIndex)) {
	            arr.splice(currIndex, 1);
	        } else {
	            currIndex++;
	        }
	        originalIndex++;
	    }

	    return arr;
	}

	function mutableArrSplice(index, deleteCount, _vals, arr) {
	    var vals = forceArray(_vals);
	    arr.splice.apply(arr, [index, deleteCount].concat((0, _toConsumableArray3.default)(vals)));
	    return arr;
	}

	function mutableArrInsert(index, _vals, arr) {
	    return mutableArrSplice(index, 0, _vals, arr);
	}

	function immutableArrSplice(ownerID, index, deleteCount, _vals, arr) {
	    if (canMutate(arr, ownerID)) return mutableArrSplice(index, deleteCount, _vals, arr);

	    var vals = forceArray(_vals);
	    var newArr = arr.slice();
	    prepareNewObject(newArr, ownerID);
	    newArr.splice.apply(newArr, [index, deleteCount].concat((0, _toConsumableArray3.default)(vals)));

	    return newArr;
	}

	function immutableArrInsert(ownerID, index, _vals, arr) {
	    if (canMutate(arr, ownerID)) return mutableArrInsert(index, _vals, arr);
	    return immutableArrSplice(ownerID, index, 0, _vals, arr);
	}

	function immutableArrPush(ownerID, vals, arr) {
	    return immutableArrInsert(ownerID, arr.length, vals, arr);
	}

	function immutableArrFilter(ownerID, func, arr) {
	    if (canMutate(arr, ownerID)) return mutableArrFilter(func, arr);
	    var newArr = arr.filter(func);

	    if (newArr.length === arr.length) return arr;

	    prepareNewObject(newArr, ownerID);
	    return newArr;
	}

	var immutableOperations = {
	    // object operations
	    merge: immutableShallowMerge,
	    deepMerge: immutableDeepMerge,
	    omit: immutableOmit,
	    setIn: immutableSetIn,

	    // array operations
	    insert: immutableArrInsert,
	    push: immutableArrPush,
	    filter: immutableArrFilter,
	    splice: immutableArrSplice,

	    // both
	    set: immutableSet
	};

	var mutableOperations = {
	    // object operations
	    merge: mutableShallowMerge,
	    deepMerge: mutableDeepMerge,
	    omit: mutableOmit,
	    setIn: mutableSetIn,

	    // array operations
	    insert: mutableArrInsert,
	    push: mutableArrPush,
	    filter: mutableArrFilter,
	    splice: mutableArrSplice,

	    // both
	    set: mutableSet
	};

	function getImmutableOps() {
	    var immutableOps = (0, _assign2.default)({}, immutableOperations);
	    forOwn(immutableOps, function (value, key) {
	        immutableOps[key] = (0, _curry2.default)(value.bind(null, null));
	    });

	    var mutableOps = (0, _assign2.default)({}, mutableOperations);
	    forOwn(mutableOps, function (value, key) {
	        mutableOps[key] = (0, _curry2.default)(value);
	    });

	    var batchOps = (0, _assign2.default)({}, immutableOperations);
	    forOwn(batchOps, function (value, key) {
	        batchOps[key] = (0, _curry2.default)(value);
	    });

	    function batched(_token, _fn) {
	        var token = void 0;
	        var fn = void 0;

	        if (typeof _token === 'function') {
	            fn = _token;
	            token = getBatchToken();
	        } else {
	            token = _token;
	            fn = _fn;
	        }

	        var immutableOpsBoundToToken = (0, _assign2.default)({}, immutableOperations);
	        forOwn(immutableOpsBoundToToken, function (value, key) {
	            immutableOpsBoundToToken[key] = (0, _curry2.default)(value.bind(null, token));
	        });
	        return fn(immutableOpsBoundToToken);
	    }

	    return (0, _assign2.default)(immutableOps, {
	        mutable: mutableOps,
	        batch: batchOps,
	        batched: batched,
	        __: _2.default,
	        getBatchToken: getBatchToken
	    });
	}

	var ops = exports.ops = getImmutableOps();

	exports.default = ops;
	});

	var ops = unwrapExports(lib$1);
	var lib_1$1 = lib$1.ops;
	var lib_2$1 = lib$1.getBatchToken;
	var lib_3$1 = lib$1.canMutate;
	var lib_4$1 = lib$1.getImmutableOps;

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && _baseIndexOf(array, value, 0) > -1;
	}

	var _arrayIncludes$1 = arrayIncludes;

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arrayIncludesWith = arrayIncludesWith;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? _arrayIncludesWith : _arrayIncludes$1,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = _arrayMap(array, _baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new _SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? _cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? _cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseIntersection = baseIntersection;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply$1(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply$1;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$1 = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax$1(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty$3 ? identity_1 : function(func, string) {
	  return _defineProperty$3(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return _setToString(_overRest(func, start, identity_1), func + '');
	}

	var _baseRest = baseRest;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike_1(value) && isArrayLike_1(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject;

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject_1(value) ? value : [];
	}

	var _castArrayLikeObject = castArrayLikeObject;

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = _baseRest(function(arrays) {
	  var mapped = _arrayMap(arrays, _castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? _baseIntersection(mapped)
	    : [];
	});

	var intersection_1 = intersection;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$1 = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = _arrayIncludes$1,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = _arrayMap(values, _baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = _arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE$1) {
	    includes = _cacheHas;
	    isCommon = false;
	    values = new _SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseDifference = baseDifference;

	/** Built-in value references. */
	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray_1(value) || isArguments_1(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = _isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        _arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	var _baseFlatten = baseFlatten;

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = _baseRest(function(array, values) {
	  return isArrayLikeObject_1(array)
	    ? _baseDifference(array, _baseFlatten(values, 1, isArrayLikeObject_1, true))
	    : [];
	});

	var difference_1 = difference;

	var UPDATE = 'REDUX_ORM_UPDATE';
	var DELETE = 'REDUX_ORM_DELETE';
	var CREATE = 'REDUX_ORM_CREATE';

	var FILTER = 'REDUX_ORM_FILTER';
	var EXCLUDE = 'REDUX_ORM_EXCLUDE';
	var ORDER_BY = 'REDUX_ORM_ORDER_BY';

	var SUCCESS = 'SUCCESS';

	/**
	 * @module utils
	 */

	function warnDeprecated(msg) {
	    var logger = typeof console.warn === 'function' ? console.warn.bind(console) : console.log.bind(console);
	    return logger(msg);
	}

	function capitalize(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	/**
	 * Returns the branch name for a many-to-many relation.
	 * The name is the combination of the model name and the field name the relation
	 * was declared. The field name's first letter is capitalized.
	 *
	 * Example: model `Author` has a many-to-many relation to the model `Book`, defined
	 * in the `Author` field `books`. The many-to-many branch name will be `AuthorBooks`.
	 *
	 * @param  {string} declarationModelName - the name of the model the many-to-many relation was declared on
	 * @param  {string} fieldName            - the field name where the many-to-many relation was declared on
	 * @return {string} The branch name for the many-to-many relation.
	 */
	function m2mName(declarationModelName, fieldName) {
	    return declarationModelName + capitalize(fieldName);
	}

	/**
	 * Returns the fieldname that saves a foreign key to the
	 * model id where the many-to-many relation was declared.
	 *
	 * Example: `Author` => `fromAuthorId`
	 *
	 * @private
	 * @param  {string} declarationModelName - the name of the model where the relation was declared
	 * @return {string} the field name in the through model for `declarationModelName`'s foreign key.
	 */
	function m2mFromFieldName(declarationModelName) {
	    return 'from' + declarationModelName + 'Id';
	}

	/**
	 * Returns the fieldname that saves a foreign key in a many-to-many through model to the
	 * model where the many-to-many relation was declared.
	 *
	 * Example: `Book` => `toBookId`
	 *
	 * @param  {string} otherModelName - the name of the model that was the target of the many-to-many
	 *                                   declaration.
	 * @return {string} the field name in the through model for `otherModelName`'s foreign key..
	 */
	function m2mToFieldName(otherModelName) {
	    return 'to' + otherModelName + 'Id';
	}

	function reverseFieldName(modelName) {
	    return modelName.toLowerCase() + 'Set'; // eslint-disable-line prefer-template
	}

	function querySetDelegatorFactory(methodName) {
	    return function querySetDelegator() {
	        var _getQuerySet;

	        return (_getQuerySet = this.getQuerySet())[methodName].apply(_getQuerySet, arguments);
	    };
	}

	function querySetGetterDelegatorFactory(getterName) {
	    return function querySetGetterDelegator() {
	        var qs = this.getQuerySet();
	        return qs[getterName];
	    };
	}

	function forEachSuperClass(subClass, func) {
	    var currClass = subClass;
	    while (currClass !== Function.prototype) {
	        func(currClass);
	        currClass = _Object$getPrototypeOf(currClass);
	    }
	}

	function attachQuerySetMethods(modelClass, querySetClass) {
	    var leftToDefine = querySetClass.sharedMethods.slice();

	    // There is no way to get a property descriptor for the whole prototype chain;
	    // only from an objects own properties. Therefore we traverse the whole prototype
	    // chain for querySet.
	    forEachSuperClass(querySetClass, function (cls) {
	        for (var i = 0; i < leftToDefine.length; i++) {
	            var defined = false;
	            var methodName = leftToDefine[i];
	            var descriptor = _Object$getOwnPropertyDescriptor(cls.prototype, methodName);
	            if (typeof descriptor !== 'undefined') {
	                if (typeof descriptor.get !== 'undefined') {
	                    descriptor.get = querySetGetterDelegatorFactory(methodName);
	                    _Object$defineProperty(modelClass, methodName, descriptor);
	                    defined = true;
	                } else if (typeof descriptor.value === 'function') {
	                    modelClass[methodName] = querySetDelegatorFactory(methodName);
	                    defined = true;
	                }
	            }
	            if (defined) {
	                leftToDefine.splice(i--, 1);
	            }
	        }
	    });
	}

	/**
	 * Normalizes `entity` to an id, where `entity` can be an id
	 * or a Model instance.
	 *
	 * @param  {*} entity - either a Model instance or an id value
	 * @return {*} the id value of `entity`
	 */
	function normalizeEntity(entity) {
	    if (entity !== null && typeof entity !== 'undefined' && typeof entity.getId === 'function') {
	        return entity.getId();
	    }
	    return entity;
	}

	function reverseFieldErrorMessage(modelName, fieldName, toModelName, backwardsFieldName) {
	    return ['Reverse field ' + backwardsFieldName + ' already defined', ' on model ' + toModelName + '. To fix, set a custom related', ' name on ' + modelName + '.' + fieldName + '.'].join('');
	}

	function objectShallowEquals(a, b) {
	    var keysInA = 0;

	    // eslint-disable-next-line consistent-return
	    forOwn_1(a, function (value, key) {
	        if (!b.hasOwnProperty(key) || b[key] !== value) {
	            return false;
	        }
	        keysInA++;
	    });

	    return keysInA === _Object$keys(b).length;
	}

	function arrayDiffActions(sourceArr, targetArr) {
	    var itemsInBoth = intersection_1(sourceArr, targetArr);
	    var deleteItems = difference_1(sourceArr, itemsInBoth);
	    var addItems = difference_1(targetArr, itemsInBoth);

	    if (deleteItems.length || addItems.length) {
	        return {
	            delete: deleteItems,
	            add: addItems
	        };
	    }
	    return null;
	}

	var getBatchToken = ops.getBatchToken;


	function clauseFiltersByAttribute(_ref, attribute) {
	    var type = _ref.type,
	        payload = _ref.payload;

	    if (type !== FILTER) return false;

	    if ((typeof payload === 'undefined' ? 'undefined' : _typeof$4(payload)) !== 'object') {
	        /**
	         * payload could also be a function in which case
	         * we would have no way of knowing what it does,
	         * so we default to false for non-objects
	         */
	        return false;
	    }

	    if (!payload.hasOwnProperty(attribute)) return false;
	    var attributeValue = payload[attribute];
	    if (attributeValue === null) return false;
	    if (attributeValue === undefined) return false;

	    return true;
	}

	function clauseReducesResultSetSize(_ref2) {
	    var type = _ref2.type;

	    return [FILTER, EXCLUDE].includes(type);
	}

	/**
	 * This class is used to build and make queries to the database
	 * and operating the resulting set (such as updating attributes
	 * or deleting the records).
	 *
	 * The queries are built lazily. For example:
	 *
	 * ```javascript
	 * const qs = Book.all()
	 *     .filter(book => book.releaseYear > 1999)
	 *     .orderBy('name');
	 * ```
	 *
	 * Doesn't execute a query. The query is executed only when
	 * you need information from the query result, such as {@link QuerySet#count},
	 * {@link QuerySet#toRefArray}. After the query is executed, the resulting
	 * set is cached in the QuerySet instance.
	 *
	 * QuerySet instances also return copies, so chaining filters doesn't
	 * mutate the previous instances.
	 */
	var QuerySet = function () {
	    /**
	     * Creates a QuerySet. The constructor is mainly for internal use;
	     * You should access QuerySet instances from {@link Model}.
	     *
	     * @param  {Model} modelClass - the model class of objects in this QuerySet.
	     * @param  {any[]} clauses - query clauses needed to evaluate the set.
	     * @param {Object} [opts] - additional options
	     */
	    function QuerySet(modelClass, clauses, opts) {
	        _classCallCheck$7(this, QuerySet);

	        _Object$assign(this, {
	            modelClass: modelClass,
	            clauses: clauses || []
	        });

	        this._opts = opts;
	    }

	    _createClass(QuerySet, [{
	        key: '_new',
	        value: function _new(clauses, userOpts) {
	            var opts = _Object$assign({}, this._opts, userOpts);
	            return new this.constructor(this.modelClass, clauses, opts);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var _this = this;

	            this._evaluate();
	            var contents = this.rows.map(function (_ref) {
	                var id = _ref.id;
	                return _this.modelClass.withId(id).toString();
	            }).join('\n    - ');
	            return 'QuerySet contents:\n    - ' + contents;
	        }

	        /**
	         * Returns an array of the plain objects represented by the QuerySet.
	         * The plain objects are direct references to the store.
	         *
	         * @return {Object[]} references to the plain JS objects represented by
	         *                    the QuerySet
	         */

	    }, {
	        key: 'toRefArray',
	        value: function toRefArray() {
	            return this._evaluate();
	        }

	        /**
	         * Returns an array of {@link Model} instances represented by the QuerySet.
	         * @return {Model[]} model instances represented by the QuerySet
	         */

	    }, {
	        key: 'toModelArray',
	        value: function toModelArray() {
	            var ModelClass = this.modelClass;

	            return this._evaluate().map(function (props) {
	                return new ModelClass(props);
	            });
	        }

	        /**
	         * Returns the number of {@link Model} instances represented by the QuerySet.
	         *
	         * @return {number} length of the QuerySet
	         */

	    }, {
	        key: 'count',
	        value: function count() {
	            this._evaluate();
	            return this.rows.length;
	        }

	        /**
	         * Checks if the {@link QuerySet} instance has any records matching the query
	         * in the database.
	         *
	         * @return {Boolean} `true` if the {@link QuerySet} instance contains entities, else `false`.
	         */

	    }, {
	        key: 'exists',
	        value: function exists() {
	            return Boolean(this.count());
	        }

	        /**
	         * Returns the {@link Model} instance at index `index` in the {@link QuerySet} instance if
	         * `withRefs` flag is set to `false`, or a reference to the plain JavaScript
	         * object in the model state if `true`.
	         *
	         * @param  {number} index - index of the model instance to get
	         * @return {Model|undefined} a {@link Model} instance at index
	         *                           `index` in the {@link QuerySet} instance,
	         *                           or undefined if the index is out of bounds.
	         */

	    }, {
	        key: 'at',
	        value: function at(index) {
	            var ModelClass = this.modelClass;


	            var rows = this._evaluate();
	            if (index >= 0 && index < rows.length) {
	                return new ModelClass(rows[index]);
	            }

	            return undefined;
	        }

	        /**
	         * Returns the {@link Model} instance at index 0 in the {@link QuerySet} instance.
	         * @return {Model}
	         */

	    }, {
	        key: 'first',
	        value: function first() {
	            return this.at(0);
	        }

	        /**
	         * Returns the {@link Model} instance at index `QuerySet.count() - 1`
	         * @return {Model}
	         */

	    }, {
	        key: 'last',
	        value: function last() {
	            var rows = this._evaluate();
	            return this.at(rows.length - 1);
	        }

	        /**
	         * Returns a new {@link QuerySet} instance with the same entities.
	         * @return {QuerySet} a new QuerySet with the same entities.
	         */

	    }, {
	        key: 'all',
	        value: function all() {
	            return this._new(this.clauses);
	        }

	        /**
	         * Returns a new {@link QuerySet} instance with entities that match properties in `lookupObj`.
	         *
	         * @param  {Object} lookupObj - the properties to match objects with. Can also be a function.
	         * @return {QuerySet} a new {@link QuerySet} instance with objects that passed the filter.
	         */

	    }, {
	        key: 'filter',
	        value: function filter(lookupObj) {
	            /**
	             * allow foreign keys to be specified as model instances,
	             * transform model instances to their primary keys
	             */
	            var normalizedLookupObj = (typeof lookupObj === 'undefined' ? 'undefined' : _typeof$4(lookupObj)) === 'object' ? mapValues_1(lookupObj, normalizeEntity) : lookupObj;

	            var filterDescriptor = {
	                type: FILTER,
	                payload: normalizedLookupObj
	            };
	            /**
	             * create a new QuerySet
	             * including only rows matching the lookupObj
	             */
	            return this._new(this.clauses.concat(filterDescriptor));
	        }

	        /**
	         * Returns a new {@link QuerySet} instance with entities that do not match
	         * properties in `lookupObj`.
	         *
	         * @param  {Object} lookupObj - the properties to unmatch objects with. Can also be a function.
	         * @return {QuerySet} a new {@link QuerySet} instance with objects that did not pass the filter.
	         */

	    }, {
	        key: 'exclude',
	        value: function exclude(lookupObj) {
	            /**
	             * allow foreign keys to be specified as model instances,
	             * transform model instances to their primary keys
	             */
	            var normalizedLookupObj = (typeof lookupObj === 'undefined' ? 'undefined' : _typeof$4(lookupObj)) === 'object' ? mapValues_1(lookupObj, normalizeEntity) : lookupObj;
	            var excludeDescriptor = {
	                type: EXCLUDE,
	                payload: normalizedLookupObj
	            };

	            /**
	             * create a new QuerySet
	             * excluding all rows matching the lookupObj
	             */
	            return this._new(this.clauses.concat(excludeDescriptor));
	        }

	        /**
	         * Performs the actual database query.
	         * @private
	         * @return {Array} rows corresponding to the QuerySet's clauses
	         */

	    }, {
	        key: '_evaluate',
	        value: function _evaluate() {
	            if (typeof this.modelClass.session === 'undefined') {
	                throw new Error(['Tried to query the ' + this.modelClass.modelName + ' model\'s table without a session. ', 'Create a session using `session = orm.session()` and use ', '`session["' + this.modelClass.modelName + '"]` for querying instead.'].join(''));
	            }
	            if (!this._evaluated) {
	                var _modelClass = this.modelClass,
	                    session = _modelClass.session,
	                    table = _modelClass.modelName;

	                var querySpec = {
	                    table: table,
	                    clauses: this.clauses
	                };
	                this.rows = session.query(querySpec).rows;
	                this._evaluated = true;
	            }
	            return this.rows;
	        }

	        /**
	         * Returns a new {@link QuerySet} instance with entities ordered by `iteratees` in ascending
	         * order, unless otherwise specified. Delegates to `lodash.orderBy`.
	         *
	         * @param  {string[]|Function[]} iteratees - an array where each item can be a string or a
	         *                                           function. If a string is supplied, it should
	         *                                           correspond to property on the entity that will
	         *                                           determine the order. If a function is supplied,
	         *                                           it should return the value to order by.
	         * @param {Boolean[]} [orders] - the sort orders of `iteratees`. If unspecified, all iteratees
	         *                               will be sorted in ascending order. `true` and `'asc'`
	         *                               correspond to ascending order, and `false` and `'desc`
	         *                               to descending order.
	         * @return {QuerySet} a new {@link QuerySet} with objects ordered by `iteratees`.
	         */

	    }, {
	        key: 'orderBy',
	        value: function orderBy(iteratees, orders) {
	            var orderByDescriptor = {
	                type: ORDER_BY,
	                payload: [iteratees, orders]
	            };

	            /**
	             * create a new QuerySet
	             * sorting all rows according to the passed arguments
	             */
	            return this._new(this.clauses.concat(orderByDescriptor));
	        }

	        /**
	         * Records an update specified with `mergeObj` to all the objects
	         * in the {@link QuerySet} instance.
	         *
	         * @param  {Object} mergeObj - an object to merge with all the objects in this
	         *                             queryset.
	         * @return {undefined}
	         */

	    }, {
	        key: 'update',
	        value: function update(mergeObj) {
	            var _modelClass2 = this.modelClass,
	                session = _modelClass2.session,
	                table = _modelClass2.modelName;


	            session.applyUpdate({
	                action: UPDATE,
	                query: {
	                    table: table,
	                    clauses: this.clauses
	                },
	                payload: mergeObj
	            });

	            this._evaluated = false;
	        }

	        /**
	         * Records a deletion of all the objects in this {@link QuerySet} instance.
	         * @return {undefined}
	         */

	    }, {
	        key: 'delete',
	        value: function _delete() {
	            var _modelClass3 = this.modelClass,
	                session = _modelClass3.session,
	                table = _modelClass3.modelName;


	            this.toModelArray().forEach(function (model) {
	                return model._onDelete();
	            } // eslint-disable-line no-underscore-dangle
	            );

	            session.applyUpdate({
	                action: DELETE,
	                query: {
	                    table: table,
	                    clauses: this.clauses
	                }
	            });

	            this._evaluated = false;
	        }

	        // DEPRECATED AND REMOVED METHODS

	        /**
	         * @deprecated
	         * Use {@link QuerySet#toModelArray} or predicate functions that
	         * instantiate Models from refs, e.g. `new Model(ref)`.
	         */

	    }, {
	        key: 'map',


	        /**
	         * @deprecated
	         * Call {@link QuerySet#toModelArray} or {@link QuerySet#toRefArray} first to map.
	         */
	        value: function map() {
	            throw new Error('`QuerySet.prototype.map` has been removed. ' + 'Call `.toModelArray()` or `.toRefArray()` first to map.');
	        }

	        /**
	         * @deprecated
	         * Call {@link QuerySet#toModelArray} or {@link QuerySet#toRefArray} first to iterate.
	         */

	    }, {
	        key: 'forEach',
	        value: function forEach() {
	            throw new Error('`QuerySet.prototype.forEach` has been removed. ' + 'Call `.toModelArray()` or `.toRefArray()` first to iterate.');
	        }
	    }, {
	        key: 'withModels',
	        get: function get() {
	            throw new Error('`QuerySet.prototype.withModels` has been removed. ' + 'Use `.toModelArray()` or predicate functions that ' + 'instantiate Models from refs, e.g. `new Model(ref)`.');
	        }

	        /**
	         * @deprecated Query building operates on refs only now.
	         */

	    }, {
	        key: 'withRefs',
	        get: function get() {
	            warnDeprecated('`QuerySet.prototype.withRefs` has been deprecated. ' + 'Query building operates on refs only now.');
	            return undefined;
	        }
	    }], [{
	        key: 'addSharedMethod',
	        value: function addSharedMethod(methodName) {
	            this.sharedMethods = this.sharedMethods.concat(methodName);
	        }
	    }]);

	    return QuerySet;
	}();

	QuerySet.sharedMethods = ['count', 'at', 'all', 'last', 'first', 'filter', 'exclude', 'orderBy', 'update', 'delete'];

	var _extends$c = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _assign2 = _interopRequireDefault(assign$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
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
	});

	var _extends$d = unwrapExports(_extends$c);

	var defineProperty$7 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(defineProperty$5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};
	});

	var _defineProperty$4 = unwrapExports(defineProperty$7);

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop$3() {
	  // No operation performed.
	}

	var noop_1 = noop$3;

	/** Used as references for various `Number` constants. */
	var INFINITY$3 = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY$3) ? noop_1 : function(values) {
	  return new _Set(values);
	};

	var _createSet = createSet;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$2 = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = _arrayIncludes$1,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = _arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE$2) {
	    var set = iteratee ? null : _createSet(array);
	    if (set) {
	      return _setToArray(set);
	    }
	    isCommon = false;
	    includes = _cacheHas;
	    seen = new _SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseUniq = baseUniq;

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length) ? _baseUniq(array) : [];
	}

	var uniq_1 = uniq;

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else _hide(target, key, src[key]);
	  } return target;
	};

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	var SPECIES = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
	  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	var _validateCollection = function (it, TYPE) {
	  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};

	var dP$2 = _objectDp.f;









	var fastKey = _meta.fastKey;

	var SIZE = _descriptors ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	var _collectionStrong = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      _anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = _objectCreate(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    _redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = _validateCollection(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        _validateCollection(this, NAME);
	        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(_validateCollection(this, NAME), key);
	      }
	    });
	    if (_descriptors) dP$2(C.prototype, 'size', {
	      get: function () {
	        return _validateCollection(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    _iterDefine(C, NAME, function (iterated, kind) {
	      this._t = _validateCollection(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return _iterStep(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return _iterStep(0, entry.k);
	      if (kind == 'values') return _iterStep(0, entry.v);
	      return _iterStep(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    _setSpecies(NAME);
	  }
	};

	var SPECIES$1 = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES$1];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var dP$3 = _objectDp.f;
	var each = _arrayMethods(0);


	var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = _global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    _redefineAll(C.prototype, methods);
	    _meta.NEED = true;
	  } else {
	    C = wrapper(function (target, iterable) {
	      _anInstance(target, C, NAME, '_c');
	      target._c = new Base();
	      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
	        _anInstance(this, C, KEY);
	        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    IS_WEAK || dP$3(C.prototype, 'size', {
	      get: function () {
	        return this._c.size;
	      }
	    });
	  }

	  _setToStringTag(C, NAME);

	  O[NAME] = C;
	  _export(_export.G + _export.W + _export.F, O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

	var SET = 'Set';

	// 23.2 Set Objects
	var es6_set = _collection(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, _collectionStrong);

	var _arrayFromIterable = function (iter, ITERATOR) {
	  var result = [];
	  _forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON


	var _collectionToJson = function (NAME) {
	  return function toJSON() {
	    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return _arrayFromIterable(this);
	  };
	};

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON


	_export(_export.P + _export.R, 'Set', { toJSON: _collectionToJson('Set') });

	// https://tc39.github.io/proposal-setmap-offrom/


	var _setCollectionOf = function (COLLECTION) {
	  _export(_export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	_setCollectionOf('Set');

	// https://tc39.github.io/proposal-setmap-offrom/





	var _setCollectionFrom = function (COLLECTION) {
	  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    _aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) _aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = _ctx(mapFn, arguments[2], 2);
	      _forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      _forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	_setCollectionFrom('Set');

	var set = _core.Set;

	var set$1 = createCommonjsModule(function (module) {
	module.exports = { "default": set, __esModule: true };
	});

	var _Set$1 = unwrapExports(set$1);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check$1 = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check$1(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check$1
	};

	// 26.1.14 Reflect.setPrototypeOf(target, proto)



	if (_setProto) _export(_export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    _setProto.check(target, proto);
	    try {
	      _setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	var setPrototypeOf = _core.Reflect.setPrototypeOf;

	var setPrototypeOf$1 = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf, __esModule: true };
	});

	var _Reflect$setPrototypeOf = unwrapExports(setPrototypeOf$1);

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var arraySlice = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	var _bind = Function.bind || function bind(that /* , ...args */) {
	  var fn = _aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
	  };
	  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







	var rConstruct = (_global.Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = _fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !_fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    _aFunction(Target);
	    _anObject(args);
	    var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (_bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return _isObject(result) ? result : instance;
	  }
	});

	var construct$1 = _core.Reflect.construct;

	var construct$2 = createCommonjsModule(function (module) {
	module.exports = { "default": construct$1, __esModule: true };
	});

	var _Reflect$construct = unwrapExports(construct$2);

	var Session = function () {
	    /**
	     * Creates a new Session.
	     *
	     * @param  {Database} db - a {@link Database} instance
	     * @param  {Object} state - the database state
	     * @param  {Boolean} [withMutations] - whether the session should mutate data
	     * @param  {Object} [batchToken] - used by the backend to identify objects that can be
	     *                                 mutated.
	     */
	    function Session(schema, db, state, withMutations, batchToken) {
	        var _this = this;

	        _classCallCheck$7(this, Session);

	        this.schema = schema;
	        this.db = db;
	        this.state = state || db.getEmptyState();
	        this.initialState = this.state;

	        this.withMutations = !!withMutations;
	        this.batchToken = batchToken || lib_2$1();

	        this.modelData = {};

	        this.models = schema.getModelClasses();

	        this.sessionBoundModels = this.models.map(function (modelClass) {
	            function SessionBoundModel() {
	                return _Reflect$construct(modelClass, arguments, SessionBoundModel); // eslint-disable-line prefer-rest-params
	            }
	            _Reflect$setPrototypeOf(SessionBoundModel.prototype, modelClass.prototype);
	            _Reflect$setPrototypeOf(SessionBoundModel, modelClass);

	            _Object$defineProperty(_this, modelClass.modelName, {
	                get: function get() {
	                    return SessionBoundModel;
	                }
	            });

	            SessionBoundModel.connect(_this);
	            return SessionBoundModel;
	        });
	    }

	    _createClass(Session, [{
	        key: 'getDataForModel',
	        value: function getDataForModel(modelName) {
	            if (!this.modelData[modelName]) {
	                this.modelData[modelName] = {};
	            }
	            return this.modelData[modelName];
	        }
	    }, {
	        key: 'markAccessed',
	        value: function markAccessed(modelName, modelIds) {
	            var data = this.getDataForModel(modelName);
	            if (!data.accessedInstances) {
	                data.accessedInstances = {};
	            }
	            modelIds.forEach(function (id) {
	                data.accessedInstances[id] = true;
	            });
	        }
	    }, {
	        key: 'markFullTableScanned',
	        value: function markFullTableScanned(modelName) {
	            var data = this.getDataForModel(modelName);
	            data.fullTableScanned = true;
	        }
	    }, {
	        key: 'applyUpdate',


	        /**
	         * Applies update to a model state.
	         *
	         * @private
	         * @param {Object} update - the update object. Must have keys
	         *                          `type`, `payload`.
	         */
	        value: function applyUpdate(updateSpec) {
	            var tx = this._getTransaction(updateSpec);
	            var result = this.db.update(updateSpec, tx, this.state);
	            var status = result.status,
	                state = result.state,
	                payload = result.payload;


	            if (status !== SUCCESS) {
	                throw new Error('Applying update failed with status ' + status + '. Payload: ' + payload);
	            }

	            this.state = state;

	            return payload;
	        }
	    }, {
	        key: 'query',
	        value: function query(querySpec) {
	            var result = this.db.query(querySpec, this.state);

	            this._markAccessedByQuery(querySpec, result);

	            return result;
	        }
	    }, {
	        key: '_getTransaction',
	        value: function _getTransaction(updateSpec) {
	            var withMutations = this.withMutations;
	            var action = updateSpec.action;
	            var batchToken = this.batchToken;

	            if ([UPDATE, DELETE].includes(action)) {
	                batchToken = lib_2$1();
	            }
	            return { batchToken: batchToken, withMutations: withMutations };
	        }
	    }, {
	        key: '_markAccessedByQuery',
	        value: function _markAccessedByQuery(querySpec, result) {
	            var table = querySpec.table,
	                clauses = querySpec.clauses;
	            var rows = result.rows;
	            var idAttribute = this[table].idAttribute;

	            var accessedIds = new _Set$1(rows.map(function (row) {
	                return row[idAttribute];
	            }));

	            var anyClauseFilteredById = clauses.some(function (clause) {
	                if (!clauseFiltersByAttribute(clause, idAttribute)) {
	                    return false;
	                }
	                /**
	                 * we previously knew which row we wanted to access,
	                 * so there was no need to scan the entire table
	                 */
	                var id = clause.payload[idAttribute];
	                accessedIds.add(id);
	                return true;
	            });

	            if (anyClauseFilteredById) {
	                /**
	                 * clauses have been ordered so that an indexed one was
	                 * the first to be evaluated, and thus only the row
	                 * with the specified id has actually been accessed
	                 */
	                this.markAccessed(table, accessedIds);
	            } else {
	                /**
	                 * any other clause would have caused a full table scan,
	                 * even if we specified an empty clauses array
	                 */
	                this.markFullTableScanned(table);
	            }
	        }

	        // DEPRECATED AND REMOVED METHODS

	        /**
	         * @deprecated Access {@link Session#state} instead.
	         */

	    }, {
	        key: 'getNextState',
	        value: function getNextState() {
	            warnDeprecated('`Session.prototype.getNextState` has been deprecated. Access ' + 'the `Session.prototype.state` property instead.');
	            return this.state;
	        }

	        /**
	         * @deprecated
	         * The Redux integration API is now decoupled from ORM and Session.<br>
	         * See the 0.9 migration guide in the GitHub repo.
	         */

	    }, {
	        key: 'reduce',
	        value: function reduce() {
	            throw new Error('`Session.prototype.reduce` has been removed. The Redux integration API ' + 'is now decoupled from ORM and Session - see the 0.9 migration guide ' + 'in the GitHub repo.');
	        }
	    }, {
	        key: 'accessedModelInstances',
	        get: function get() {
	            var _this2 = this;

	            return this.sessionBoundModels.filter(function (_ref) {
	                var modelName = _ref.modelName;
	                return !!_this2.getDataForModel(modelName).accessedInstances;
	            }).reduce(function (result, _ref2) {
	                var modelName = _ref2.modelName;
	                return _extends$d({}, result, _defineProperty$4({}, modelName, _this2.getDataForModel(modelName).accessedInstances));
	            }, {});
	        }
	    }, {
	        key: 'fullTableScannedModels',
	        get: function get() {
	            var _this3 = this;

	            return this.sessionBoundModels.filter(function (_ref3) {
	                var modelName = _ref3.modelName;
	                return !!_this3.getDataForModel(modelName).fullTableScanned;
	            }).map(function (_ref4) {
	                var modelName = _ref4.modelName;
	                return modelName;
	            });
	        }
	    }]);

	    return Session;
	}();

	var ITERATOR$4 = _wks('iterator');

	var core_isIterable = _core.isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$4] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || _iterators.hasOwnProperty(_classof(O));
	};

	var isIterable = core_isIterable;

	var isIterable$1 = createCommonjsModule(function (module) {
	module.exports = { "default": isIterable, __esModule: true };
	});

	unwrapExports(isIterable$1);

	var core_getIterator = _core.getIterator = function (it) {
	  var iterFn = core_getIteratorMethod(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return _anObject(iterFn.call(it));
	};

	var getIterator = core_getIterator;

	var getIterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": getIterator, __esModule: true };
	});

	unwrapExports(getIterator$1);

	var slicedToArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _isIterable3 = _interopRequireDefault(isIterable$1);



	var _getIterator3 = _interopRequireDefault(getIterator$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	});

	var _slicedToArray = unwrapExports(slicedToArray);

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn$7 = unwrapExports(possibleConstructorReturn);

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	var setPrototypeOf$2 = _core.Object.setPrototypeOf;

	var setPrototypeOf$3 = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf$2, __esModule: true };
	});

	unwrapExports(setPrototypeOf$3);

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	var $Object$2 = _core.Object;
	var create = function create(P, D) {
	  return $Object$2.create(P, D);
	};

	var create$1 = createCommonjsModule(function (module) {
	module.exports = { "default": create, __esModule: true };
	});

	unwrapExports(create$1);

	var inherits = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$3);



	var _create2 = _interopRequireDefault(create$1);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	var _inherits$7 = unwrapExports(inherits);

	/**
	 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	 * without support for iteratee shorthands, which iterates over `collection`
	 * using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the found element or its key, else `undefined`.
	 */
	function baseFindKey(collection, predicate, eachFunc) {
	  var result;
	  eachFunc(collection, function(value, key, collection) {
	    if (predicate(value, key, collection)) {
	      result = key;
	      return false;
	    }
	  });
	  return result;
	}

	var _baseFindKey = baseFindKey;

	/**
	 * This method is like `_.find` except that it returns the key of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Object
	 * @param {Object} object The object to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {string|undefined} Returns the key of the matched element,
	 *  else `undefined`.
	 * @example
	 *
	 * var users = {
	 *   'barney':  { 'age': 36, 'active': true },
	 *   'fred':    { 'age': 40, 'active': false },
	 *   'pebbles': { 'age': 1,  'active': true }
	 * };
	 *
	 * _.findKey(users, function(o) { return o.age < 40; });
	 * // => 'barney' (iteration order is not guaranteed)
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findKey(users, { 'age': 1, 'active': true });
	 * // => 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findKey(users, ['active', false]);
	 * // => 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findKey(users, 'active');
	 * // => 'barney'
	 */
	function findKey(object, predicate) {
	  return _baseFindKey(object, _baseIteratee(predicate, 3), _baseForOwn);
	}

	var findKey_1 = findKey;

	/**
	 * The functions in this file return custom JS property descriptors
	 * that are supposed to be assigned to Model fields.
	 *
	 * Some include the logic to look up models using foreign keys and
	 * to add or remove relationships between models.
	 *
	 * @module descriptors
	 */

	/**
	 * Defines a basic non-key attribute.
	 * @param  {string} fieldName - the name of the field the descriptor will be assigned to.
	 */
	function attrDescriptor(fieldName) {
	    return {
	        get: function get() {
	            return this._fields[fieldName];
	        },
	        set: function set(value) {
	            return this.set(fieldName, value);
	        },


	        enumerable: true,
	        configurable: true
	    };
	}

	/**
	 * Forwards direction of a Foreign Key: returns one object.
	 * Also works as {@link .forwardsOneToOneDescriptor|forwardsOneToOneDescriptor}.
	 *
	 * For `book.author` referencing an `Author` model instance,
	 * `fieldName` would be `'author'` and `declaredToModelName` would be `'Author'`.
	 * @param  {string} fieldName - the name of the field the descriptor will be assigned to.
	 * @param  {string} declaredToModelName - the name of the model that the field references.
	 */
	function forwardsManyToOneDescriptor(fieldName, declaredToModelName) {
	    return {
	        get: function get() {
	            var _getClass = this.getClass(),
	                DeclaredToModel = _getClass.session[declaredToModelName];

	            var toId = this._fields[fieldName];


	            return DeclaredToModel.withId(toId);
	        },
	        set: function set(value) {
	            this.update(_defineProperty$4({}, fieldName, normalizeEntity(value)));
	        }
	    };
	}

	/**
	 * Dereferencing foreign keys in {@link module:fields.oneToOne|oneToOne}
	 * relationships works the same way as in many-to-one relationships:
	 * just look up the related model.
	 *
	 * For example, a human face tends to have a single nose.
	 * So if we want to resolve `face.nose`, we need to
	 * look up the `Nose` that has the primary key that `face` references.
	 *
	 * @see {@link module:descriptors~forwardsManyToOneDescriptor|forwardsManyToOneDescriptor}
	 */
	function forwardsOneToOneDescriptor() {
	    return forwardsManyToOneDescriptor.apply(undefined, arguments);
	}

	/**
	 * Here we resolve 1-to-1 relationships starting at the model on which the
	 * field was not installed. This means we need to find the instance of the
	 * other model whose {@link module:fields.oneToOne|oneToOne} FK field contains the current model's primary key.
	 *
	 * @param  {string} declaredFieldName - the name of the field referencing the current model.
	 * @param  {string} declaredFromModelName - the name of the other model.
	 */
	function backwardsOneToOneDescriptor(declaredFieldName, declaredFromModelName) {
	    return {
	        get: function get() {
	            var _getClass2 = this.getClass(),
	                DeclaredFromModel = _getClass2.session[declaredFromModelName];

	            return DeclaredFromModel.get(_defineProperty$4({}, declaredFieldName, this.getId()));
	        },
	        set: function set() {
	            throw new Error('Can\'t mutate a reverse one-to-one relation.');
	        }
	    };
	}

	/**
	 * The backwards direction of a n-to-1 relationship (i.e. 1-to-n),
	 * meaning this will return an a collection (`QuerySet`) of model instances.
	 *
	 * An example would be `author.books` referencing all instances of
	 * the `Book` model that reference the author using `fk()`.
	 */
	function backwardsManyToOneDescriptor(declaredFieldName, declaredFromModelName) {
	    return {
	        get: function get() {
	            var _getClass3 = this.getClass(),
	                DeclaredFromModel = _getClass3.session[declaredFromModelName];

	            return DeclaredFromModel.filter(_defineProperty$4({}, declaredFieldName, this.getId()));
	        },
	        set: function set() {
	            throw new Error('Can\'t mutate a reverse many-to-one relation.');
	        }
	    };
	}

	/**
	 * This descriptor is assigned to both sides of a many-to-many relationship.
	 * To indicate the backwards direction pass `true` for `reverse`.
	 */
	function manyToManyDescriptor(declaredFromModelName, declaredToModelName, throughModelName, throughFields, reverse) {
	    return {
	        get: function get() {
	            var _getClass4 = this.getClass(),
	                _getClass4$session = _getClass4.session,
	                DeclaredFromModel = _getClass4$session[declaredFromModelName],
	                DeclaredToModel = _getClass4$session[declaredToModelName],
	                ThroughModel = _getClass4$session[throughModelName];

	            var ThisModel = reverse ? DeclaredToModel : DeclaredFromModel;
	            var OtherModel = reverse ? DeclaredFromModel : DeclaredToModel;

	            var thisReferencingField = reverse ? throughFields.to : throughFields.from;
	            var otherReferencingField = reverse ? throughFields.from : throughFields.to;

	            var thisId = this.getId();

	            var throughQs = ThroughModel.filter(_defineProperty$4({}, thisReferencingField, thisId));

	            /**
	             * all IDs of instances of the other model that are
	             * referenced by any instance of the current model
	             */
	            var referencedOtherIds = new _Set$1(throughQs.toRefArray().map(function (obj) {
	                return obj[otherReferencingField];
	            }));

	            /**
	             * selects all instances of other model that are referenced
	             * by any instance of the current model
	             */
	            var qs = OtherModel.filter(function (otherModelInstance) {
	                return referencedOtherIds.has(otherModelInstance[OtherModel.idAttribute]);
	            });

	            /**
	             * Allows adding OtherModel instances to be referenced by the current instance.
	             *
	             * E.g. Book.first().authors.add(1, 2) would add the authors with IDs 1 and 2
	             * to the first book's list of referenced authors.
	             *
	             * @return undefined
	             */
	            qs.add = function add() {
	                for (var _len = arguments.length, entities = Array(_len), _key = 0; _key < _len; _key++) {
	                    entities[_key] = arguments[_key];
	                }

	                var idsToAdd = new _Set$1(entities.map(normalizeEntity));

	                var existingQs = throughQs.filter(function (through) {
	                    return idsToAdd.has(through[otherReferencingField]);
	                });

	                if (existingQs.exists()) {
	                    var existingIds = existingQs.toRefArray().map(function (through) {
	                        return through[otherReferencingField];
	                    });

	                    throw new Error('Tried to add already existing ' + OtherModel.modelName + ' id(s) ' + existingIds + ' to the ' + ThisModel.modelName + ' instance with id ' + thisId);
	                }

	                idsToAdd.forEach(function (id) {
	                    var _ThroughModel$create;

	                    return ThroughModel.create((_ThroughModel$create = {}, _defineProperty$4(_ThroughModel$create, otherReferencingField, id), _defineProperty$4(_ThroughModel$create, thisReferencingField, thisId), _ThroughModel$create));
	                });
	            };

	            /**
	             * Removes references to all OtherModel instances from the current model.
	             *
	             * E.g. Book.first().authors.clear() would cause the first book's list
	             * of referenced authors to become empty.
	             *
	             * @return undefined
	             */
	            qs.clear = function clear() {
	                throughQs.delete();
	            };

	            /**
	             * Removes references to all passed OtherModel instances from the current model.
	             *
	             * E.g. Book.first().authors.remove(1, 2) would cause the authors with
	             * IDs 1 and 2 to no longer be referenced by the first book.
	             *
	             * @return undefined
	             */
	            qs.remove = function remove() {
	                for (var _len2 = arguments.length, entities = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    entities[_key2] = arguments[_key2];
	                }

	                var idsToRemove = new _Set$1(entities.map(normalizeEntity));

	                var entitiesToDelete = throughQs.filter(function (through) {
	                    return idsToRemove.has(through[otherReferencingField]);
	                });

	                if (entitiesToDelete.count() !== idsToRemove.size) {
	                    // Tried deleting non-existing entities.
	                    var entitiesToDeleteIds = entitiesToDelete.toRefArray().map(function (through) {
	                        return through[otherReferencingField];
	                    });

	                    var unexistingIds = [].concat(_toConsumableArray(idsToRemove)).filter(function (id) {
	                        return !includes_1(entitiesToDeleteIds, id);
	                    });

	                    throw new Error('Tried to delete non-existing ' + OtherModel.modelName + ' id(s) ' + unexistingIds + ' from the ' + ThisModel.modelName + ' instance with id ' + thisId);
	                }

	                entitiesToDelete.delete();
	            };

	            return qs;
	        },
	        set: function set() {
	            throw new Error('Tried setting a M2M field. Please use the related QuerySet methods add, remove and clear.');
	        }
	    };
	}

	/**
	 * Contains the logic for how fields on {@link Model}s work
	 * and which descriptors must be installed.
	 *
	 * If your goal is to define fields on a Model class,
	 * please use the more convenient methods {@link attr},
	 * {@link fk}, {@link many} and {@link oneToOne}.
	 *
	 * @module fields
	 */

	/**
	 * Defines algorithm for installing a field onto a model and related models.
	 * Conforms to the template method behavioral design pattern.
	 * @private
	 */

	var FieldInstallerTemplate = function () {
	    function FieldInstallerTemplate(opts) {
	        _classCallCheck$7(this, FieldInstallerTemplate);

	        this.field = opts.field;
	        this.fieldName = opts.fieldName;
	        this.model = opts.model;
	        this.orm = opts.orm;
	        /**
	         * the field itself has no knowledge of the model
	         * it is being installed upon; we need to inform it
	         * that it is a self-referencing field for the field
	         * to be able to make better informed decisions
	         */
	        if (this.field.references(this.model)) {
	            this.field.toModelName = 'this';
	        }
	    }

	    _createClass(FieldInstallerTemplate, [{
	        key: 'run',
	        value: function run() {
	            if (this.field.installsForwardsDescriptor) {
	                this.installForwardsDescriptor();
	            }
	            if (this.field.installsForwardsVirtualField) {
	                this.installForwardsVirtualField();
	            }
	            /**
	             * Install a backwards field on a model as a consequence
	             * of having installed the forwards field on another model.
	             */
	            if (this.field.installsBackwardsDescriptor) {
	                this.installBackwardsDescriptor();
	            }
	            if (this.field.installsBackwardsVirtualField) {
	                this.installBackwardsVirtualField();
	            }
	        }
	    }, {
	        key: 'toModel',
	        get: function get() {
	            if (typeof this._toModel === 'undefined') {
	                var toModelName = this.field.toModelName;

	                if (!toModelName) {
	                    this._toModel = null;
	                } else if (toModelName === 'this') {
	                    this._toModel = this.model;
	                } else {
	                    this._toModel = this.orm.get(toModelName);
	                }
	            }
	            return this._toModel;
	        }
	    }, {
	        key: 'throughModel',
	        get: function get() {
	            if (typeof this._throughModel === 'undefined') {
	                var throughModelName = this.field.getThroughModelName(this.fieldName, this.model);
	                if (!throughModelName) {
	                    this._throughModel = null;
	                } else {
	                    this._throughModel = this.orm.get(throughModelName);
	                }
	            }
	            return this._throughModel;
	        }
	    }, {
	        key: 'backwardsFieldName',
	        get: function get() {
	            return this.field.getBackwardsFieldName(this.model);
	        }
	    }]);

	    return FieldInstallerTemplate;
	}();

	/**
	 * Default implementation for the template method in FieldInstallerTemplate.
	 * @private
	 */


	var DefaultFieldInstaller = function (_FieldInstallerTempla) {
	    _inherits$7(DefaultFieldInstaller, _FieldInstallerTempla);

	    function DefaultFieldInstaller() {
	        _classCallCheck$7(this, DefaultFieldInstaller);

	        return _possibleConstructorReturn$7(this, (DefaultFieldInstaller.__proto__ || _Object$getPrototypeOf(DefaultFieldInstaller)).apply(this, arguments));
	    }

	    _createClass(DefaultFieldInstaller, [{
	        key: 'installForwardsDescriptor',
	        value: function installForwardsDescriptor() {
	            _Object$defineProperty(this.model.prototype, this.fieldName, this.field.createForwardsDescriptor(this.fieldName, this.model, this.toModel, this.throughModel));
	        }
	    }, {
	        key: 'installForwardsVirtualField',
	        value: function installForwardsVirtualField() {
	            this.model.virtualFields[this.fieldName] = this.field.createForwardsVirtualField(this.fieldName, this.model, this.toModel, this.throughModel);
	        }
	    }, {
	        key: 'installBackwardsDescriptor',
	        value: function installBackwardsDescriptor() {
	            var backwardsDescriptor = _Object$getOwnPropertyDescriptor(this.toModel.prototype, this.backwardsFieldName);
	            if (backwardsDescriptor) {
	                throw new Error(reverseFieldErrorMessage(this.model.modelName, this.fieldName, this.toModel.modelName, this.backwardsFieldName));
	            }

	            // install backwards descriptor
	            _Object$defineProperty(this.toModel.prototype, this.backwardsFieldName, this.field.createBackwardsDescriptor(this.fieldName, this.model, this.toModel, this.throughModel));
	        }
	    }, {
	        key: 'installBackwardsVirtualField',
	        value: function installBackwardsVirtualField() {
	            this.toModel.virtualFields[this.backwardsFieldName] = this.field.createBackwardsVirtualField(this.fieldName, this.model, this.toModel, this.throughModel);
	        }
	    }]);

	    return DefaultFieldInstaller;
	}(FieldInstallerTemplate);

	/**
	 * @ignore
	 */


	var Field = function () {
	    function Field() {
	        _classCallCheck$7(this, Field);
	    }

	    _createClass(Field, [{
	        key: 'getClass',
	        value: function getClass() {
	            return this.constructor;
	        }
	    }, {
	        key: 'references',
	        value: function references(model) {
	            return false;
	        }
	    }, {
	        key: 'getThroughModelName',
	        value: function getThroughModelName(fieldName, model) {
	            return null;
	        }
	    }, {
	        key: 'installerClass',
	        get: function get() {
	            return DefaultFieldInstaller;
	        }
	    }, {
	        key: 'installsForwardsDescriptor',
	        get: function get() {
	            return true;
	        }
	    }, {
	        key: 'installsForwardsVirtualField',
	        get: function get() {
	            return false;
	        }
	    }, {
	        key: 'installsBackwardsDescriptor',
	        get: function get() {
	            return false;
	        }
	    }, {
	        key: 'installsBackwardsVirtualField',
	        get: function get() {
	            return false;
	        }
	    }]);

	    return Field;
	}();

	/**
	 * @ignore
	 */


	var Attribute = function (_Field) {
	    _inherits$7(Attribute, _Field);

	    function Attribute(opts) {
	        _classCallCheck$7(this, Attribute);

	        var _this2 = _possibleConstructorReturn$7(this, (Attribute.__proto__ || _Object$getPrototypeOf(Attribute)).call(this, opts));

	        _this2.opts = opts || {};

	        if (_this2.opts.hasOwnProperty('getDefault')) {
	            _this2.getDefault = _this2.opts.getDefault;
	        }
	        return _this2;
	    }

	    _createClass(Attribute, [{
	        key: 'createForwardsDescriptor',
	        value: function createForwardsDescriptor(fieldName, model) {
	            return attrDescriptor(fieldName);
	        }
	    }]);

	    return Attribute;
	}(Field);

	/**
	 * @ignore
	 */

	var RelationalField = function (_Field2) {
	    _inherits$7(RelationalField, _Field2);

	    function RelationalField() {
	        var _ref;

	        _classCallCheck$7(this, RelationalField);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this3 = _possibleConstructorReturn$7(this, (_ref = RelationalField.__proto__ || _Object$getPrototypeOf(RelationalField)).call.apply(_ref, [this].concat(args)));

	        if (args.length === 1 && _typeof$4(args[0]) === 'object') {
	            var opts = args[0];
	            _this3.toModelName = opts.to;
	            _this3.relatedName = opts.relatedName;
	            _this3.through = opts.through;
	            _this3.throughFields = opts.throughFields;
	            _this3.as = opts.as;
	        } else {
	            _this3.toModelName = args[0];
	            _this3.relatedName = args[1];
	        }
	        return _this3;
	    }

	    _createClass(RelationalField, [{
	        key: 'getBackwardsFieldName',
	        value: function getBackwardsFieldName(model) {
	            return this.relatedName || reverseFieldName(model.modelName);
	        }
	    }, {
	        key: 'createBackwardsVirtualField',
	        value: function createBackwardsVirtualField(fieldName, model, toModel, throughModel) {
	            var ThisField = this.getClass();
	            return new ThisField(model.modelName, fieldName);
	        }
	    }, {
	        key: 'references',
	        value: function references(model) {
	            return this.toModelName === model.modelName;
	        }
	    }, {
	        key: 'installsBackwardsVirtualField',
	        get: function get() {
	            return true;
	        }
	    }, {
	        key: 'installsBackwardsDescriptor',
	        get: function get() {
	            return true;
	        }
	    }, {
	        key: 'installerClass',
	        get: function get() {
	            return function (_DefaultFieldInstalle) {
	                _inherits$7(AliasedForwardsDescriptorInstaller, _DefaultFieldInstalle);

	                function AliasedForwardsDescriptorInstaller() {
	                    _classCallCheck$7(this, AliasedForwardsDescriptorInstaller);

	                    return _possibleConstructorReturn$7(this, (AliasedForwardsDescriptorInstaller.__proto__ || _Object$getPrototypeOf(AliasedForwardsDescriptorInstaller)).apply(this, arguments));
	                }

	                _createClass(AliasedForwardsDescriptorInstaller, [{
	                    key: 'installForwardsDescriptor',
	                    value: function installForwardsDescriptor() {
	                        _Object$defineProperty(this.model.prototype, this.field.as || this.fieldName, // use supplied name if possible
	                        this.field.createForwardsDescriptor(this.fieldName, this.model, this.toModel, this.throughModel));
	                    }
	                }]);

	                return AliasedForwardsDescriptorInstaller;
	            }(DefaultFieldInstaller);
	        }
	    }]);

	    return RelationalField;
	}(Field);

	/**
	 * @ignore
	 */


	var ForeignKey = function (_RelationalField) {
	    _inherits$7(ForeignKey, _RelationalField);

	    function ForeignKey() {
	        _classCallCheck$7(this, ForeignKey);

	        return _possibleConstructorReturn$7(this, (ForeignKey.__proto__ || _Object$getPrototypeOf(ForeignKey)).apply(this, arguments));
	    }

	    _createClass(ForeignKey, [{
	        key: 'createForwardsDescriptor',
	        value: function createForwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return forwardsManyToOneDescriptor(fieldName, toModel.modelName);
	        }
	    }, {
	        key: 'createBackwardsDescriptor',
	        value: function createBackwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return backwardsManyToOneDescriptor(fieldName, model.modelName);
	        }
	    }]);

	    return ForeignKey;
	}(RelationalField);

	/**
	 * @ignore
	 */
	var ManyToMany = function (_RelationalField2) {
	    _inherits$7(ManyToMany, _RelationalField2);

	    function ManyToMany() {
	        _classCallCheck$7(this, ManyToMany);

	        return _possibleConstructorReturn$7(this, (ManyToMany.__proto__ || _Object$getPrototypeOf(ManyToMany)).apply(this, arguments));
	    }

	    _createClass(ManyToMany, [{
	        key: 'getDefault',
	        value: function getDefault() {
	            return [];
	        }
	    }, {
	        key: 'getThroughModelName',
	        value: function getThroughModelName(fieldName, model) {
	            return this.through || m2mName(model.modelName, fieldName);
	        }
	    }, {
	        key: 'createForwardsDescriptor',
	        value: function createForwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return manyToManyDescriptor(model.modelName, toModel.modelName, throughModel.modelName, this.getThroughFields(fieldName, model, toModel, throughModel), false);
	        }
	    }, {
	        key: 'createBackwardsDescriptor',
	        value: function createBackwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return manyToManyDescriptor(model.modelName, toModel.modelName, throughModel.modelName, this.getThroughFields(fieldName, model, toModel, throughModel), true);
	        }
	    }, {
	        key: 'createBackwardsVirtualField',
	        value: function createBackwardsVirtualField(fieldName, model, toModel, throughModel) {
	            var ThisField = this.getClass();
	            return new ThisField({
	                to: model.modelName,
	                relatedName: fieldName,
	                through: throughModel.modelName,
	                throughFields: this.getThroughFields(fieldName, model, toModel, throughModel)
	            });
	        }
	    }, {
	        key: 'createForwardsVirtualField',
	        value: function createForwardsVirtualField(fieldName, model, toModel, throughModel) {
	            var ThisField = this.getClass();
	            return new ThisField({
	                to: toModel.modelName,
	                relatedName: fieldName,
	                through: this.through,
	                throughFields: this.getThroughFields(fieldName, model, toModel, throughModel)
	            });
	        }
	    }, {
	        key: 'getThroughFields',
	        value: function getThroughFields(fieldName, model, toModel, throughModel) {
	            if (this.throughFields) {
	                var _throughFields = _slicedToArray(this.throughFields, 2),
	                    fieldAName = _throughFields[0],
	                    fieldBName = _throughFields[1];

	                var fieldA = throughModel.fields[fieldAName];
	                return {
	                    to: fieldA.references(toModel) ? fieldAName : fieldBName,
	                    from: fieldA.references(toModel) ? fieldBName : fieldAName
	                };
	            }

	            if (model.modelName === toModel.modelName) {
	                /**
	                 * we have no way of determining the relationship's
	                 * direction here, so we need to assume that the user
	                 * did not use a custom through model
	                 * see ORM#registerManyToManyModelsFor
	                 */
	                return {
	                    to: m2mToFieldName(toModel.modelName),
	                    from: m2mFromFieldName(model.modelName)
	                };
	            }

	            /**
	             * determine which field references which model
	             * and infer the directions from that
	             */
	            var throughModelFieldReferencing = function throughModelFieldReferencing(otherModel) {
	                return findKey_1(throughModel.fields, function (field) {
	                    return field.references(otherModel);
	                });
	            };

	            return {
	                to: throughModelFieldReferencing(toModel),
	                from: throughModelFieldReferencing(model)
	            };
	        }
	    }, {
	        key: 'installsForwardsVirtualField',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return ManyToMany;
	}(RelationalField);

	/**
	 * @ignore
	 */
	var OneToOne = function (_RelationalField3) {
	    _inherits$7(OneToOne, _RelationalField3);

	    function OneToOne() {
	        _classCallCheck$7(this, OneToOne);

	        return _possibleConstructorReturn$7(this, (OneToOne.__proto__ || _Object$getPrototypeOf(OneToOne)).apply(this, arguments));
	    }

	    _createClass(OneToOne, [{
	        key: 'getBackwardsFieldName',
	        value: function getBackwardsFieldName(model) {
	            return this.relatedName || model.modelName.toLowerCase();
	        }
	    }, {
	        key: 'createForwardsDescriptor',
	        value: function createForwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return forwardsOneToOneDescriptor(fieldName, toModel.modelName);
	        }
	    }, {
	        key: 'createBackwardsDescriptor',
	        value: function createBackwardsDescriptor(fieldName, model, toModel, throughModel) {
	            return backwardsOneToOneDescriptor(fieldName, model.modelName);
	        }
	    }]);

	    return OneToOne;
	}(RelationalField);

	/**
	 * Defines a value attribute on the model.
	 * Though not required, it is recommended to define this for each non-foreign key you wish to use.
	 * Getters and setters need to be defined on each Model
	 * instantiation for undeclared data fields, which is slower.
	 * You can use the optional `getDefault` parameter to fill in unpassed values
	 * to {@link Model.create}, such as for generating ID's with UUID:
	 *
	 * ```javascript
	 * import getUUID from 'your-uuid-package-of-choice';
	 *
	 * fields = {
	 *   id: attr({ getDefault: () => getUUID() }),
	 *   title: attr(),
	 * }
	 * ```
	 *
	 * @global
	 *
	 * @param  {Object} [opts]
	 * @param {Function} [opts.getDefault] - if you give a function here, it's return
	 *                                       value from calling with zero arguments will
	 *                                       be used as the value when creating a new Model
	 *                                       instance with {@link Model#create} if the field
	 *                                       value is not passed.
	 * @return {Attribute}
	 */
	function attr(opts) {
	    return new Attribute(opts);
	}

	/**
	 * Generates a query specification to get the instance's
	 * corresponding table row using its primary key.
	 *
	 * @private
	 * @returns {Object}
	 */
	function getByIdQuery(modelInstance) {
	    var modelClass = modelInstance.getClass();
	    var idAttribute = modelClass.idAttribute,
	        modelName = modelClass.modelName;


	    return {
	        table: modelName,
	        clauses: [{
	            type: FILTER,
	            payload: _defineProperty$4({}, idAttribute, modelInstance.getId())
	        }]
	    };
	}

	/**
	 * The heart of an ORM, the data model.
	 *
	 * The fields you specify to the Model will be used to generate
	 * a schema to the database, related property accessors, and
	 * possibly through models.
	 *
	 * In each {@link Session} you instantiate from an {@link ORM} instance,
	 * you will receive a session-specific subclass of this Model. The methods
	 * you define here will be available to you in sessions.
	 *
	 * An instance of {@link Model} represents a record in the database, though
	 * it is possible to generate multiple instances from the same record in the database.
	 *
	 * To create data models in your schema, subclass {@link Model}. To define
	 * information about the data model, override static class methods. Define instance
	 * logic by defining prototype methods (without `static` keyword).
	 */
	var Model = function () {
	    /**
	     * Creates a Model instance from it's properties.
	     * Don't use this to create a new record; Use the static method {@link Model#create}.
	     * @param  {Object} props - the properties to instantiate with
	     */
	    function Model(props) {
	        _classCallCheck$7(this, Model);

	        this._initFields(props);
	    }

	    _createClass(Model, [{
	        key: '_initFields',
	        value: function _initFields(props) {
	            var _this = this;

	            this._fields = _extends$d({}, props);

	            forOwn_1(props, function (fieldValue, fieldName) {
	                // In this case, we got a prop that wasn't defined as a field.
	                // Assuming it's an arbitrary data field, making an instance-specific
	                // descriptor for it.
	                // Using the in operator as the property could be defined anywhere
	                // on the prototype chain.
	                if (!(fieldName in _this)) {
	                    _Object$defineProperty(_this, fieldName, {
	                        get: function get() {
	                            return _this._fields[fieldName];
	                        },
	                        set: function set(value) {
	                            return _this.set(fieldName, value);
	                        },
	                        configurable: true,
	                        enumerable: true
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'getClass',


	        /**
	         * Gets the {@link Model} class or subclass constructor (the class that
	         * instantiated this instance).
	         *
	         * @return {Model} The {@link Model} class or subclass constructor used to instantiate
	         *                 this instance.
	         */
	        value: function getClass() {
	            return this.constructor;
	        }

	        /**
	         * Gets the id value of the current instance by looking up the id attribute.
	         * @return {*} The id value of the current instance.
	         */

	    }, {
	        key: 'getId',
	        value: function getId() {
	            return this._fields[this.getClass().idAttribute];
	        }

	        /**
	         * Returns a reference to the plain JS object in the store.
	         * Make sure to not mutate this.
	         *
	         * @return {Object} a reference to the plain JS object in the store
	         */

	    }, {
	        key: 'toString',


	        /**
	         * Returns a string representation of the {@link Model} instance.
	         *
	         * @return {string} A string representation of this {@link Model} instance.
	         */
	        value: function toString() {
	            var _this2 = this;

	            var ThisModel = this.getClass();
	            var className = ThisModel.modelName;
	            var fieldNames = _Object$keys(ThisModel.fields);
	            var fields = fieldNames.map(function (fieldName) {
	                var field = ThisModel.fields[fieldName];
	                if (field instanceof ManyToMany) {
	                    var ids = _this2[fieldName].toModelArray().map(function (model) {
	                        return model.getId();
	                    });
	                    return fieldName + ': [' + ids.join(', ') + ']';
	                }
	                var val = _this2._fields[fieldName];
	                return fieldName + ': ' + val;
	            }).join(', ');
	            return className + ': {' + fields + '}';
	        }

	        /**
	         * Returns a boolean indicating if `otherModel` equals this {@link Model} instance.
	         * Equality is determined by shallow comparing their attributes.
	         *
	         * This equality is used when you call {@link Model#update}.
	         * You can prevent model updates by returning `true` here.
	         * However, a model will always be updated if its relationships are changed.
	         *
	         * @param  {Model} otherModel - a {@link Model} instance to compare
	         * @return {Boolean} a boolean indicating if the {@link Model} instance's are equal.
	         */

	    }, {
	        key: 'equals',
	        value: function equals(otherModel) {
	            // eslint-disable-next-line no-underscore-dangle
	            return objectShallowEquals(this._fields, otherModel._fields);
	        }

	        /**
	         * Updates a property name to given value for this {@link Model} instance.
	         * The values are immediately committed to the database.
	         *
	         * @param {string} propertyName - name of the property to set
	         * @param {*} value - value assigned to the property
	         * @return {undefined}
	         */

	    }, {
	        key: 'set',
	        value: function set(propertyName, value) {
	            this.update(_defineProperty$4({}, propertyName, value));
	        }

	        /**
	         * Assigns multiple fields and corresponding values to this {@link Model} instance.
	         * The updates are immediately committed to the database.
	         *
	         * @param  {Object} userMergeObj - an object that will be merged with this instance.
	         * @return {undefined}
	         */

	    }, {
	        key: 'update',
	        value: function update(userMergeObj) {
	            var _this3 = this;

	            var ThisModel = this.getClass();
	            if (typeof ThisModel.session === 'undefined') {
	                throw new Error(['Tried to update a ' + ThisModel.modelName + ' model instance without a session. ', 'You cannot call `.update` on an instance that you did not receive from the database.'].join(''));
	            }

	            var mergeObj = _extends$d({}, userMergeObj);

	            var fields = ThisModel.fields,
	                virtualFields = ThisModel.virtualFields;


	            var m2mRelations = {};

	            // If an array of entities or id's is supplied for a
	            // many-to-many related field, clear the old relations
	            // and add the new ones.
	            for (var mergeKey in mergeObj) {
	                // eslint-disable-line no-restricted-syntax, guard-for-in
	                var isRealField = fields.hasOwnProperty(mergeKey);

	                if (isRealField) {
	                    var field = fields[mergeKey];

	                    if (field instanceof ForeignKey || field instanceof OneToOne) {
	                        // update one-one/fk relations
	                        mergeObj[mergeKey] = normalizeEntity(mergeObj[mergeKey]);
	                    } else if (field instanceof ManyToMany) {
	                        // field is forward relation
	                        m2mRelations[mergeKey] = mergeObj[mergeKey];
	                        delete mergeObj[mergeKey];
	                    }
	                } else if (virtualFields.hasOwnProperty(mergeKey)) {
	                    var _field = virtualFields[mergeKey];
	                    if (_field instanceof ManyToMany) {
	                        // field is backward relation
	                        m2mRelations[mergeKey] = mergeObj[mergeKey];
	                        delete mergeObj[mergeKey];
	                    }
	                }
	            }

	            var mergedFields = _extends$d({}, this._fields, mergeObj);

	            var updatedModel = new ThisModel(this._fields);
	            updatedModel._initFields(mergedFields); // eslint-disable-line no-underscore-dangle

	            // determine if model would have different related models after update
	            updatedModel._refreshMany2Many(m2mRelations); // eslint-disable-line no-underscore-dangle
	            var relationsEqual = _Object$keys(m2mRelations).every(function (name) {
	                return !arrayDiffActions(_this3[name], updatedModel[name]);
	            });
	            var fieldsEqual = this.equals(updatedModel);

	            // only update fields if they have changed (referentially)
	            if (!fieldsEqual) {
	                this._initFields(mergedFields);
	            }

	            // only update many-to-many relationships if any reference has changed
	            if (!relationsEqual) {
	                this._refreshMany2Many(m2mRelations);
	            }

	            // only apply the update if a field or relationship has changed
	            if (!fieldsEqual || !relationsEqual) {
	                ThisModel.session.applyUpdate({
	                    action: UPDATE,
	                    query: getByIdQuery(this),
	                    payload: mergeObj
	                });
	            }
	        }

	        /**
	         * Updates {@link Model} instance attributes to reflect the
	         * database state in the current session.
	         * @return {undefined}
	         */

	    }, {
	        key: 'refreshFromState',
	        value: function refreshFromState() {
	            this._initFields(this.ref);
	        }

	        /**
	         * Deletes the record for this {@link Model} instance.
	         * You'll still be able to access fields and values on the instance.
	         *
	         * @return {undefined}
	         */

	    }, {
	        key: 'delete',
	        value: function _delete() {
	            var ThisModel = this.getClass();
	            if (typeof ThisModel.session === 'undefined') {
	                throw new Error(['Tried to delete a ' + ThisModel.modelName + ' model instance without a session. ', 'You cannot call `.delete` on an instance that you did not receive from the database.'].join(''));
	            }

	            this._onDelete();
	            ThisModel.session.applyUpdate({
	                action: DELETE,
	                query: getByIdQuery(this)
	            });
	        }

	        /**
	         * Update many-many relations for model.
	         * @param relations
	         * @return undefined
	         * @private
	         */

	    }, {
	        key: '_refreshMany2Many',
	        value: function _refreshMany2Many(relations) {
	            var _this4 = this;

	            var ThisModel = this.getClass();
	            var fields = ThisModel.fields,
	                virtualFields = ThisModel.virtualFields,
	                modelName = ThisModel.modelName;


	            _Object$keys(relations).forEach(function (name) {
	                var reverse = !fields.hasOwnProperty(name);
	                var field = virtualFields[name];
	                var values = relations[name];

	                if (!Array.isArray(values)) {
	                    throw new TypeError('Failed to resolve many-to-many relationship: ' + modelName + '[' + name + '] must be an array (passed: ' + values + ')');
	                }

	                var normalizedNewIds = values.map(normalizeEntity);
	                var uniqueIds = uniq_1(normalizedNewIds);

	                if (normalizedNewIds.length !== uniqueIds.length) {
	                    throw new Error('Found duplicate id(s) when passing "' + normalizedNewIds + '" to ' + ThisModel.modelName + '.' + name + ' value');
	                }

	                var throughModelName = field.through || m2mName(ThisModel.modelName, name);
	                var ThroughModel = ThisModel.session[throughModelName];

	                var fromField = void 0;
	                var toField = void 0;

	                if (!reverse) {
	                    var _field$throughFields = field.throughFields;
	                    fromField = _field$throughFields.from;
	                    toField = _field$throughFields.to;
	                } else {
	                    var _field$throughFields2 = field.throughFields;
	                    toField = _field$throughFields2.from;
	                    fromField = _field$throughFields2.to;
	                }

	                var currentIds = ThroughModel.filter(function (through) {
	                    return through[fromField] === _this4[ThisModel.idAttribute];
	                }).toRefArray().map(function (ref) {
	                    return ref[toField];
	                });

	                var diffActions = arrayDiffActions(currentIds, normalizedNewIds);

	                if (diffActions) {
	                    var idsToDelete = diffActions.delete,
	                        idsToAdd = diffActions.add;

	                    if (idsToDelete.length > 0) {
	                        var _name;

	                        (_name = _this4[name]).remove.apply(_name, _toConsumableArray(idsToDelete));
	                    }
	                    if (idsToAdd.length > 0) {
	                        var _name2;

	                        (_name2 = _this4[name]).add.apply(_name2, _toConsumableArray(idsToAdd));
	                    }
	                }
	            });
	        }

	        /**
	         * @return {undefined}
	         * @private
	         */

	    }, {
	        key: '_onDelete',
	        value: function _onDelete() {
	            var _getClass = this.getClass(),
	                virtualFields = _getClass.virtualFields;

	            for (var key in virtualFields) {
	                // eslint-disable-line
	                var field = virtualFields[key];
	                if (field instanceof ManyToMany) {
	                    // Delete any many-to-many rows the entity is included in.
	                    this[key].clear();
	                } else if (field instanceof ForeignKey) {
	                    var relatedQs = this[key];
	                    if (relatedQs.exists()) {
	                        relatedQs.update(_defineProperty$4({}, field.relatedName, null));
	                    }
	                } else if (field instanceof OneToOne) {
	                    // Set null to any foreign keys or one to ones pointed to
	                    // this instance.
	                    if (this[key] !== null) {
	                        this[key][field.relatedName] = null;
	                    }
	                }
	            }
	        }

	        // DEPRECATED AND REMOVED METHODS

	        /**
	         * Returns a boolean indicating if an entity
	         * with the id `id` exists in the state.
	         *
	         * @param  {*}  id - a value corresponding to the id attribute of the {@link Model} class.
	         * @return {Boolean} a boolean indicating if entity with `id` exists in the state
	         * @deprecated Please use {@link Model.idExists} instead.
	         */

	    }, {
	        key: 'getNextState',


	        /**
	         * @deprecated See the 0.9 migration guide on the GitHub repo.
	         * @throws {Error} Due to deprecation.
	         */
	        value: function getNextState() {
	            throw new Error('`Model.prototype.getNextState` has been removed. See the 0.9 ' + 'migration guide on the GitHub repo.');
	        }
	    }, {
	        key: 'ref',
	        get: function get() {
	            var ThisModel = this.getClass();

	            // eslint-disable-next-line no-underscore-dangle
	            return ThisModel._findDatabaseRows(_defineProperty$4({}, ThisModel.idAttribute, this.getId()))[0];
	        }

	        /**
	         * Finds all rows in this model's table that match the given `lookupObj`.
	         * If no `lookupObj` is passed, all rows in the model's table will be returned.
	         *
	         * @param  {*}  props - a key-value that {@link Model} instances should have to be considered as existing.
	         * @return {Boolean} a boolean indicating if entity with `props` exists in the state
	         * @private
	         */

	    }], [{
	        key: 'toString',
	        value: function toString() {
	            return 'ModelClass: ' + this.modelName;
	        }

	        /**
	         * Returns the options object passed to the database for the table that represents
	         * this Model class.
	         *
	         * Returns an empty object by default, which means the database
	         * will use default options. You can either override this function to return the options
	         * you want to use, or assign the options object as a static property of the same name to the
	         * Model class.
	         *
	         * @return {Object} the options object passed to the database for the table
	         *                  representing this Model class.
	         */

	    }, {
	        key: 'options',
	        value: function options() {
	            return {};
	        }

	        /**
	         * @return {undefined}
	         */

	    }, {
	        key: 'markAccessed',
	        value: function markAccessed(ids) {
	            if (typeof this._session === 'undefined') {
	                throw new Error(['Tried to mark rows of the ' + this.modelName + ' model as accessed without a session. ', 'Create a session using `session = orm.session()` and call ', '`session["' + this.modelName + '"].markAccessed` instead.'].join(''));
	            }
	            this.session.markAccessed(this.modelName, ids);
	        }

	        /**
	         * @return {undefined}
	         */

	    }, {
	        key: 'markFullTableScanned',
	        value: function markFullTableScanned() {
	            if (typeof this._session === 'undefined') {
	                throw new Error(['Tried to mark the ' + this.modelName + ' model as full table scanned without a session. ', 'Create a session using `session = orm.session()` and call ', '`session["' + this.modelName + '"].markFullTableScanned` instead.'].join(''));
	            }
	            this.session.markFullTableScanned(this.modelName);
	        }

	        /**
	         * Returns the id attribute of this {@link Model}.
	         *
	         * @return {string} The id attribute of this {@link Model}.
	         */

	    }, {
	        key: 'connect',


	        /**
	         * Connect the model class to a {@link Session}.
	         *
	         * @private
	         * @param  {Session} session - The session to connect to.
	         */
	        value: function connect(session) {
	            if (!(session instanceof Session)) {
	                throw new Error('A model can only be connected to instances of Session.');
	            }
	            this._session = session;
	        }

	        /**
	         * Get the current {@link Session} instance.
	         *
	         * @private
	         * @return {Session} The current {@link Session} instance.
	         */

	    }, {
	        key: 'getQuerySet',


	        /**
	         * Returns an instance of the model's `querySetClass` field.
	         * By default, this will be an empty {@link QuerySet}.
	         *
	         * @return {Object} An instance of the model's `querySetClass`.
	         */
	        value: function getQuerySet() {
	            var QuerySetClass = this.querySetClass;

	            return new QuerySetClass(this);
	        }

	        /**
	         * @return {undefined}
	         */

	    }, {
	        key: 'invalidateClassCache',
	        value: function invalidateClassCache() {
	            this.isSetUp = undefined;
	            this.virtualFields = {};
	        }

	        /**
	         * @see {@link Model.getQuerySet}
	         */

	    }, {
	        key: '_getTableOpts',


	        /**
	         * @private
	         */
	        value: function _getTableOpts() {
	            if (typeof this.backend === 'function') {
	                warnDeprecated('`Model.backend` has been deprecated. Please rename to `.options`.');
	                return this.backend();
	            } else if (this.backend) {
	                warnDeprecated('`Model.backend` has been deprecated. Please rename to `.options`.');
	                return this.backend;
	            } else if (typeof this.options === 'function') {
	                return this.options();
	            }
	            return this.options;
	        }

	        /**
	         * Creates a new record in the database, instantiates a {@link Model} and returns it.
	         *
	         * If you pass values for many-to-many fields, instances are created on the through
	         * model as well.
	         *
	         * @param  {props} userProps - the new {@link Model}'s properties.
	         * @return {Model} a new {@link Model} instance.
	         */

	    }, {
	        key: 'create',
	        value: function create(userProps) {
	            var _this5 = this;

	            if (typeof this._session === 'undefined') {
	                throw new Error(['Tried to create a ' + this.modelName + ' model instance without a session. ', 'Create a session using `session = orm.session()` and call ', '`session["' + this.modelName + '"].create` instead.'].join(''));
	            }
	            var props = _extends$d({}, userProps);

	            var m2mRelations = {};

	            var declaredFieldNames = _Object$keys(this.fields);
	            var declaredVirtualFieldNames = _Object$keys(this.virtualFields);

	            declaredFieldNames.forEach(function (key) {
	                var field = _this5.fields[key];
	                var valuePassed = userProps.hasOwnProperty(key);
	                if (!(field instanceof ManyToMany)) {
	                    if (valuePassed) {
	                        var value = userProps[key];
	                        props[key] = normalizeEntity(value);
	                    } else if (field.getDefault) {
	                        props[key] = field.getDefault();
	                    }
	                } else if (valuePassed) {
	                    // If a value is supplied for a ManyToMany field,
	                    // discard them from props and save for later processing.
	                    m2mRelations[key] = userProps[key];
	                    delete props[key];
	                }
	            });

	            // add backward many-many if required
	            declaredVirtualFieldNames.forEach(function (key) {
	                if (!m2mRelations.hasOwnProperty(key)) {
	                    var field = _this5.virtualFields[key];
	                    if (userProps.hasOwnProperty(key) && field instanceof ManyToMany) {
	                        // If a value is supplied for a ManyToMany field,
	                        // discard them from props and save for later processing.
	                        m2mRelations[key] = userProps[key];
	                        delete props[key];
	                    }
	                }
	            });

	            var newEntry = this.session.applyUpdate({
	                action: CREATE,
	                table: this.modelName,
	                payload: props
	            });

	            var ThisModel = this;
	            var instance = new ThisModel(newEntry);
	            instance._refreshMany2Many(m2mRelations); // eslint-disable-line no-underscore-dangle
	            return instance;
	        }

	        /**
	         * Creates a new or update existing record in the database, instantiates a {@link Model} and returns it.
	         *
	         * If you pass values for many-to-many fields, instances are created on the through
	         * model as well.
	         *
	         * @param  {props} userProps - the required {@link Model}'s properties.
	         * @return {Model} a {@link Model} instance.
	         */

	    }, {
	        key: 'upsert',
	        value: function upsert(userProps) {
	            if (typeof this.session === 'undefined') {
	                throw new Error(['Tried to upsert a ' + this.modelName + ' model instance without a session. ', 'Create a session using `session = orm.session()` and call ', '`session["' + this.modelName + '"].upsert` instead.'].join(''));
	            }

	            var idAttribute = this.idAttribute;

	            if (userProps.hasOwnProperty(idAttribute)) {
	                var id = userProps[idAttribute];
	                if (this.idExists(id)) {
	                    var model = this.withId(id);
	                    model.update(userProps);
	                    return model;
	                }
	            }

	            return this.create(userProps);
	        }

	        /**
	         * Returns a {@link Model} instance for the object with id `id`.
	         * Returns `null` if the model has no instance with id `id`.
	         *
	         * You can use {@link Model#idExists} to check for existence instead.
	         *
	         * @param  {*} id - the `id` of the object to get
	         * @throws If object with id `id` doesn't exist
	         * @return {Model|null} {@link Model} instance with id `id`
	         */

	    }, {
	        key: 'withId',
	        value: function withId(id) {
	            return this.get(_defineProperty$4({}, this.idAttribute, id));
	        }

	        /**
	         * Returns a boolean indicating if an entity
	         * with the id `id` exists in the state.
	         *
	         * @param  {*}  id - a value corresponding to the id attribute of the {@link Model} class.
	         * @return {Boolean} a boolean indicating if entity with `id` exists in the state
	         *
	         * @since 0.11.0
	         */

	    }, {
	        key: 'idExists',
	        value: function idExists(id) {
	            return this.exists(_defineProperty$4({}, this.idAttribute, id));
	        }

	        /**
	         * Returns a boolean indicating if an entity
	         * with the given props exists in the state.
	         *
	         * @param  {*}  props - a key-value that {@link Model} instances should have to be considered as existing.
	         * @return {Boolean} a boolean indicating if entity with `props` exists in the state
	         */

	    }, {
	        key: 'exists',
	        value: function exists(lookupObj) {
	            if (typeof this.session === 'undefined') {
	                throw new Error(['Tried to check if a ' + this.modelName + ' model instance exists without a session. ', 'Create a session using `session = orm.session()` and call ', '`session["' + this.modelName + '"].exists` instead.'].join(''));
	            }

	            return Boolean(this._findDatabaseRows(lookupObj).length);
	        }

	        /**
	         * Gets the {@link Model} instance that matches properties in `lookupObj`.
	         * Throws an error if {@link Model} if multiple records match
	         * the properties.
	         *
	         * @param  {Object} lookupObj - the properties used to match a single entity.
	         * @throws {Error} If more than one entity matches the properties in `lookupObj`.
	         * @return {Model} a {@link Model} instance that matches the properties in `lookupObj`.
	         */

	    }, {
	        key: 'get',
	        value: function get(lookupObj) {
	            var ThisModel = this;

	            var rows = this._findDatabaseRows(lookupObj);
	            if (rows.length === 0) {
	                return null;
	            } else if (rows.length > 1) {
	                throw new Error('Expected to find a single row in `' + this.modelName + '.get`. Found ' + rows.length + '.');
	            }

	            return new ThisModel(rows[0]);
	        }
	    }, {
	        key: '_findDatabaseRows',
	        value: function _findDatabaseRows(lookupObj) {
	            var querySpec = {
	                table: this.modelName
	            };
	            if (lookupObj) {
	                querySpec.clauses = [{
	                    type: FILTER,
	                    payload: lookupObj
	                }];
	            }
	            return this.session.query(querySpec).rows;
	        }
	    }, {
	        key: 'hasId',
	        value: function hasId(id) {
	            console.warn('`Model.hasId` has been deprecated. Please use `Model.idExists` instead.');
	            return this.idExists(id);
	        }
	    }, {
	        key: 'idAttribute',
	        get: function get() {
	            if (typeof this._session === 'undefined') {
	                throw new Error(['Tried to get the ' + this.modelName + ' model\'s id attribute without a session. ', 'Create a session using `session = orm.session()` and access ', '`session["' + this.modelName + '"].idAttribute` instead.'].join(''));
	            }
	            return this.session.db.describe(this.modelName).idAttribute;
	        }
	    }, {
	        key: 'session',
	        get: function get() {
	            return this._session;
	        }
	    }, {
	        key: 'query',
	        get: function get() {
	            return this.getQuerySet();
	        }
	    }]);

	    return Model;
	}();

	Model.fields = {
	    id: attr()
	};
	Model.virtualFields = {};
	Model.querySetClass = QuerySet;

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike_1(collection)) {
	      var iteratee = _baseIteratee(predicate, 3);
	      collection = keys_1(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	var _createFind = createFind;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$2 = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
	  if (index < 0) {
	    index = nativeMax$2(length + index, 0);
	  }
	  return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
	}

	var findIndex_1 = findIndex;

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = _createFind(findIndex_1);

	var find_1 = find;

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike_1(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	var _createBaseEach = createBaseEach;

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = _createBaseEach(_baseForOwn);

	var _baseEach = baseEach;

	/**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  _baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}

	var _baseFilter = baseFilter;

	/** Error message constants. */
	var FUNC_ERROR_TEXT$1 = 'Expected a function';

	/**
	 * Creates a function that negates the result of the predicate `func`. The
	 * `func` predicate is invoked with the `this` binding and arguments of the
	 * created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} predicate The predicate to negate.
	 * @returns {Function} Returns the new negated function.
	 * @example
	 *
	 * function isEven(n) {
	 *   return n % 2 == 0;
	 * }
	 *
	 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	 * // => [1, 3, 5]
	 */
	function negate(predicate) {
	  if (typeof predicate != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  return function() {
	    var args = arguments;
	    switch (args.length) {
	      case 0: return !predicate.call(this);
	      case 1: return !predicate.call(this, args[0]);
	      case 2: return !predicate.call(this, args[0], args[1]);
	      case 3: return !predicate.call(this, args[0], args[1], args[2]);
	    }
	    return !predicate.apply(this, args);
	  };
	}

	var negate_1 = negate;

	/**
	 * The opposite of `_.filter`; this method returns the elements of `collection`
	 * that `predicate` does **not** return truthy for.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @see _.filter
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': true }
	 * ];
	 *
	 * _.reject(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.reject(users, { 'age': 40, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.reject(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.reject(users, 'active');
	 * // => objects for ['barney']
	 */
	function reject(collection, predicate) {
	  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
	  return func(collection, negate_1(_baseIteratee(predicate, 3)));
	}

	var reject_1 = reject;

	/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * **Note:** Unlike `_.remove`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @see _.reject
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */
	function filter(collection, predicate) {
	  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
	  return func(collection, _baseIteratee(predicate, 3));
	}

	var filter_1 = filter;

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike_1(collection) ? Array(collection.length) : [];

	  _baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	var _baseMap = baseMap;

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	var _baseSortBy = baseSortBy;

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol_1(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol_1(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	var _compareAscending = compareAscending;

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = _compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	var _compareMultiple = compareMultiple;

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = _arrayMap(iteratees.length ? iteratees : [identity_1], _baseUnary(_baseIteratee));

	  var result = _baseMap(collection, function(value, key, collection) {
	    var criteria = _arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return _baseSortBy(result, function(object, other) {
	    return _compareMultiple(object, other, orders);
	  });
	}

	var _baseOrderBy = baseOrderBy;

	/**
	 * This method is like `_.sortBy` except that it allows specifying the sort
	 * orders of the iteratees to sort by. If `orders` is unspecified, all values
	 * are sorted in ascending order. Otherwise, specify an order of "desc" for
	 * descending or "asc" for ascending sort order of corresponding values.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @param {string[]} [orders] The sort orders of `iteratees`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 34 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 36 }
	 * ];
	 *
	 * // Sort by `user` in ascending order and by `age` in descending order.
	 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 */
	function orderBy(collection, iteratees, orders, guard) {
	  if (collection == null) {
	    return [];
	  }
	  if (!isArray_1(iteratees)) {
	    iteratees = iteratees == null ? [] : [iteratees];
	  }
	  orders = guard ? undefined : orders;
	  if (!isArray_1(orders)) {
	    orders = orders == null ? [] : [orders];
	  }
	  return _baseOrderBy(collection, iteratees, orders);
	}

	var orderBy_1 = orderBy;

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject_1(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike_1(object) && _isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq_1(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall;

	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, [function(o) { return o.user; }]);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	 */
	var sortBy = _baseRest(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
	});

	var sortBy_1 = sortBy;

	var DEFAULT_OPTS = {
	    idAttribute: 'id',
	    arrName: 'items',
	    mapName: 'itemsById'
	};

	// Input is the current max id and the new id passed to the create action.
	// Both may be undefined. The current max id in the case that this is the first Model
	// being created, and the new id if the id was not explicitly passed to the
	// database.
	//
	// Return value is the new max id and the id to use to create the new row.
	// If the id's are strings, the id must be passed explicitly every time.
	// In this case, the current max id will remain `NaN` due to `Math.max`, but that's fine.
	function idSequencer(_currMax, userPassedId) {
	    var currMax = _currMax;
	    var newMax = void 0;
	    var newId = void 0;

	    if (currMax === undefined) {
	        currMax = -1;
	    }

	    if (userPassedId === undefined) {
	        newMax = currMax + 1;
	        newId = newMax;
	    } else {
	        newMax = Math.max(currMax + 1, userPassedId);
	        newId = userPassedId;
	    }

	    return [newMax, // new max id
	    newId];
	}

	/**
	 * Handles the underlying data structure for a {@link Model} class.
	 */
	var Table = function () {
	    /**
	     * Creates a new {@link Table} instance.
	     * @param  {Object} userOpts - options to use.
	     * @param  {string} [userOpts.idAttribute=id] - the id attribute of the entity.
	     * @param  {string} [userOpts.arrName=items] - the state attribute where an array of
	     *                                             entity id's are stored
	     * @param  {string} [userOpts.mapName=itemsById] - the state attribute where the entity objects
	     *                                                 are stored in a id to entity object
	     *                                                 map.
	     */
	    function Table(userOpts) {
	        _classCallCheck$7(this, Table);

	        _Object$assign(this, DEFAULT_OPTS, userOpts);
	    }

	    /**
	     * Returns a reference to the object at index `id`
	     * in state `branch`.
	     *
	     * @param  {Object} branch - the state
	     * @param  {Number} id - the id of the object to get
	     * @return {Object|undefined} A reference to the raw object in the state or
	     *                            `undefined` if not found.
	     */


	    _createClass(Table, [{
	        key: 'accessId',
	        value: function accessId(branch, id) {
	            return branch[this.mapName][id];
	        }
	    }, {
	        key: 'idExists',
	        value: function idExists(branch, id) {
	            return branch[this.mapName].hasOwnProperty(id);
	        }
	    }, {
	        key: 'accessIdList',
	        value: function accessIdList(branch) {
	            return branch[this.arrName];
	        }
	    }, {
	        key: 'accessList',
	        value: function accessList(branch) {
	            var _this = this;

	            return branch[this.arrName].map(function (id) {
	                return _this.accessId(branch, id);
	            });
	        }
	    }, {
	        key: 'getMaxId',
	        value: function getMaxId(branch) {
	            return this.getMeta(branch, 'maxId');
	        }
	    }, {
	        key: 'setMaxId',
	        value: function setMaxId(tx, branch, newMaxId) {
	            return this.setMeta(tx, branch, 'maxId', newMaxId);
	        }
	    }, {
	        key: 'nextId',
	        value: function nextId(id) {
	            return id + 1;
	        }
	    }, {
	        key: 'query',
	        value: function query(branch, clauses) {
	            var _this2 = this;

	            if (clauses.length === 0) {
	                return this.accessList(branch);
	            }

	            var idAttribute = this.idAttribute;


	            var optimallyOrderedClauses = sortBy_1(clauses, function (clause) {
	                if (clauseFiltersByAttribute(clause, idAttribute)) {
	                    return 1;
	                }

	                if (clauseReducesResultSetSize(clause)) {
	                    return 2;
	                }

	                return 3;
	            });

	            var reducer = function reducer(rows, clause) {
	                var type = clause.type,
	                    payload = clause.payload;

	                if (!rows) {
	                    if (clauseFiltersByAttribute(clause, idAttribute)) {
	                        var id = payload[idAttribute];
	                        // Payload specified a primary key; Since that is
	                        // unique, we can directly return that.
	                        return _this2.idExists(branch, id) ? [_this2.accessId(branch, id)] : [];
	                    }

	                    return reducer(_this2.accessList(branch), clause);
	                }

	                switch (type) {
	                    case FILTER:
	                        {
	                            return filter_1(rows, payload);
	                        }
	                    case EXCLUDE:
	                        {
	                            return reject_1(rows, payload);
	                        }
	                    case ORDER_BY:
	                        {
	                            var _payload = _slicedToArray(payload, 2),
	                                iteratees = _payload[0],
	                                orders = _payload[1];

	                            return orderBy_1(rows, iteratees, orders);
	                        }
	                    default:
	                        return rows;
	                }
	            };

	            return optimallyOrderedClauses.reduce(reducer, undefined);
	        }

	        /**
	         * Returns the default state for the data structure.
	         * @return {Object} The default state for this {@link Backend} instance's data structure
	         */

	    }, {
	        key: 'getEmptyState',
	        value: function getEmptyState() {
	            var _ref;

	            return _ref = {}, _defineProperty$4(_ref, this.arrName, []), _defineProperty$4(_ref, this.mapName, {}), _defineProperty$4(_ref, 'meta', {}), _ref;
	        }
	    }, {
	        key: 'setMeta',
	        value: function setMeta(tx, branch, key, value) {
	            var batchToken = tx.batchToken,
	                withMutations = tx.withMutations;

	            if (withMutations) {
	                var res = ops.mutable.setIn(['meta', key], value, branch);
	                return res;
	            }

	            return ops.batch.setIn(batchToken, ['meta', key], value, branch);
	        }
	    }, {
	        key: 'getMeta',
	        value: function getMeta(branch, key) {
	            return branch.meta[key];
	        }

	        /**
	         * Returns the data structure including a new object `entry`
	         * @param  {Object} tx - transaction info
	         * @param  {Object} branch - the data structure state
	         * @param  {Object} entry - the object to insert
	         * @return {Object} an object with two keys: `state` and `created`.
	         *                  `state` is the new table state and `created` is the
	         *                  row that was created.
	         */

	    }, {
	        key: 'insert',
	        value: function insert(tx, branch, entry) {
	            var _ops$batch$merge2;

	            var batchToken = tx.batchToken,
	                withMutations = tx.withMutations;


	            var hasId = entry.hasOwnProperty(this.idAttribute);

	            var workingState = branch;

	            // This will not affect string id's.

	            var _idSequencer = idSequencer(this.getMaxId(branch), entry[this.idAttribute]),
	                _idSequencer2 = _slicedToArray(_idSequencer, 2),
	                newMaxId = _idSequencer2[0],
	                id = _idSequencer2[1];

	            workingState = this.setMaxId(tx, branch, newMaxId);

	            var finalEntry = hasId ? entry : ops.batch.set(batchToken, this.idAttribute, id, entry);

	            if (withMutations) {
	                ops.mutable.push(id, workingState[this.arrName]);
	                ops.mutable.set(id, finalEntry, workingState[this.mapName]);
	                return {
	                    state: workingState,
	                    created: finalEntry
	                };
	            }

	            var nextState = ops.batch.merge(batchToken, (_ops$batch$merge2 = {}, _defineProperty$4(_ops$batch$merge2, this.arrName, ops.batch.push(batchToken, id, workingState[this.arrName])), _defineProperty$4(_ops$batch$merge2, this.mapName, ops.batch.merge(batchToken, _defineProperty$4({}, id, finalEntry), workingState[this.mapName])), _ops$batch$merge2), workingState);

	            return {
	                state: nextState,
	                created: finalEntry
	            };
	        }

	        /**
	         * Returns the data structure with objects where `rows`
	         * are merged with `mergeObj`.
	         *
	         * @param  {Object} tx - transaction info
	         * @param  {Object} branch - the data structure state
	         * @param  {Object[]} rows - rows to update
	         * @param  {Object} mergeObj - The object to merge with each row.
	         * @return {Object}
	         */

	    }, {
	        key: 'update',
	        value: function update(tx, branch, rows, mergeObj) {
	            var _this3 = this;

	            var batchToken = tx.batchToken,
	                withMutations = tx.withMutations;
	            var mapName = this.mapName;


	            var mapFunction = function mapFunction(row) {
	                var merge = withMutations ? ops.mutable.merge : ops.batch.merge(batchToken);
	                return merge(mergeObj, row);
	            };

	            var set = withMutations ? ops.mutable.set : ops.batch.set(batchToken);

	            var newMap = rows.reduce(function (map, row) {
	                var result = mapFunction(row);
	                return set(result[_this3.idAttribute], result, map);
	            }, branch[mapName]);
	            return ops.batch.set(batchToken, mapName, newMap, branch);
	        }

	        /**
	         * Returns the data structure without rows `rows`.
	         * @param  {Object} tx - transaction info
	         * @param  {Object} branch - the data structure state
	         * @param  {Object[]} rows - rows to update
	         * @return {Object} the data structure without ids in `idsToDelete`.
	         */

	    }, {
	        key: 'delete',
	        value: function _delete(tx, branch, rows) {
	            var _this4 = this,
	                _ops$batch$merge3;

	            var batchToken = tx.batchToken,
	                withMutations = tx.withMutations;
	            var arrName = this.arrName,
	                mapName = this.mapName;

	            var arr = branch[arrName];

	            var idsToDelete = rows.map(function (row) {
	                return row[_this4.idAttribute];
	            });
	            if (withMutations) {
	                idsToDelete.forEach(function (id) {
	                    var idx = arr.indexOf(id);
	                    if (idx !== -1) {
	                        ops.mutable.splice(idx, 1, [], arr);
	                    }

	                    ops.mutable.omit(id, branch[mapName]);
	                });
	                return branch;
	            }

	            return ops.batch.merge(batchToken, (_ops$batch$merge3 = {}, _defineProperty$4(_ops$batch$merge3, arrName, ops.batch.filter(batchToken, function (id) {
	                return !includes_1(idsToDelete, id);
	            }, branch[arrName])), _defineProperty$4(_ops$batch$merge3, mapName, ops.batch.omit(batchToken, idsToDelete, branch[mapName])), _ops$batch$merge3), branch);
	        }
	    }]);

	    return Table;
	}();

	function replaceTableState(tableName, newTableState, tx, state) {
	    var batchToken = tx.batchToken,
	        withMutations = tx.withMutations;


	    if (withMutations) {
	        state[tableName] = newTableState;
	        return state;
	    }

	    return ops.batch.set(batchToken, tableName, newTableState, state);
	}

	function query(tables, querySpec, state) {
	    var tableName = querySpec.table,
	        clauses = querySpec.clauses;

	    var table = tables[tableName];
	    var rows = table.query(state[tableName], clauses);
	    return {
	        rows: rows
	    };
	}

	function update(tables, updateSpec, tx, state) {
	    var action = updateSpec.action,
	        payload = updateSpec.payload;


	    var tableName = void 0;
	    var nextTableState = void 0;
	    var resultPayload = void 0;

	    if (action === CREATE) {
	        tableName = updateSpec.table;

	        var table = tables[tableName];
	        var currTableState = state[tableName];
	        var result = table.insert(tx, currTableState, payload);
	        nextTableState = result.state;
	        resultPayload = result.created;
	    } else {
	        var querySpec = updateSpec.query;
	        tableName = querySpec.table;

	        var _query = query(tables, querySpec, state),
	            rows = _query.rows;

	        var _table = tables[tableName];
	        var _currTableState = state[tableName];

	        if (action === UPDATE) {
	            nextTableState = _table.update(tx, _currTableState, rows, payload);
	            // return updated rows
	            resultPayload = query(tables, querySpec, state).rows;
	        } else if (action === DELETE) {
	            nextTableState = _table.delete(tx, _currTableState, rows);
	            // return original rows that we just deleted
	            resultPayload = rows;
	        } else {
	            throw new Error('Database received unknown update type: ' + action);
	        }
	    }

	    var nextDBState = replaceTableState(tableName, nextTableState, tx, state);
	    return {
	        status: SUCCESS,
	        state: nextDBState,
	        payload: resultPayload
	    };
	}

	function createDatabase(schemaSpec) {
	    var tablesSpec = schemaSpec.tables;

	    var tables = mapValues_1(tablesSpec, function (tableSpec) {
	        return new Table(tableSpec);
	    });

	    var getEmptyState = function getEmptyState() {
	        return mapValues_1(tables, function (table) {
	            return table.getEmptyState();
	        });
	    };
	    return {
	        getEmptyState: getEmptyState,
	        query: query.bind(null, tables),
	        update: update.bind(null, tables),
	        // Used to inspect the schema.
	        describe: function describe(tableName) {
	            return tables[tableName];
	        }
	    };
	}

	var lib$2 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createStructuredSelector = createStructuredSelector;
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}

	function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
	  if (prev === null || next === null || prev.length !== next.length) {
	    return false;
	  }

	  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
	  var length = prev.length;
	  for (var i = 0; i < length; i++) {
	    if (!equalityCheck(prev[i], next[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	function defaultMemoize(func) {
	  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

	  var lastArgs = null;
	  var lastResult = null;
	  // we reference arguments instead of spreading them for performance reasons
	  return function () {
	    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
	      // apply arguments instead of spreading for performance.
	      lastResult = func.apply(null, arguments);
	    }

	    lastArgs = arguments;
	    return lastResult;
	  };
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    memoizeOptions[_key - 1] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      funcs[_key2] = arguments[_key2];
	    }

	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);

	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      // apply arguments instead of spreading for performance.
	      return resultFunc.apply(null, arguments);
	    }].concat(memoizeOptions));

	    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
	    var selector = defaultMemoize(function () {
	      var params = [];
	      var length = dependencies.length;

	      for (var i = 0; i < length; i++) {
	        // apply arguments instead of spreading and mutate a local list of params for performance.
	        params.push(dependencies[i].apply(null, arguments));
	      }

	      // apply arguments instead of spreading for performance.
	      return memoizedResultFunc.apply(null, params);
	    });

	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}

	var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      values[_key3] = arguments[_key3];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}
	});

	unwrapExports(lib$2);
	var lib_1$2 = lib$2.defaultMemoize;
	var lib_2$2 = lib$2.createSelectorCreator;
	var lib_3$2 = lib$2.createStructuredSelector;
	var lib_4$2 = lib$2.createSelector;

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	var _arrayEvery = arrayEvery;

	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  _baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	var _baseEvery = baseEvery;

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray_1(collection) ? _arrayEvery : _baseEvery;
	  if (guard && _isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, _baseIteratee(predicate, 3));
	}

	var every_1 = every;

	var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
	    return a === b;
	};

	var argsAreEqual = function argsAreEqual(lastArgs, nextArgs, equalityCheck) {
	    return nextArgs.every(function (arg, index) {
	        return equalityCheck(arg, lastArgs[index]);
	    });
	};

	var rowsAreEqual = function rowsAreEqual(ids, rowsA, rowsB) {
	    return ids.every(function (id) {
	        return rowsA[id] === rowsB[id];
	    });
	};

	var tablesAreEqual = function tablesAreEqual(rowsA, rowsB) {
	    var rowIdsA = _Object$keys(rowsA);
	    var rowIdsB = _Object$keys(rowsB);

	    if (rowIdsA.length !== rowIdsB.length) {
	        /**
	         * the table contains new rows or old ones were removed
	         * this immediately means the table has been updated
	         */
	        return false;
	    }

	    return rowsAreEqual(rowIdsA, rowsA, rowsB) && rowsAreEqual(rowIdsB, rowsA, rowsB);
	};

	var accessedModelInstancesAreEqual = function accessedModelInstancesAreEqual(previous, ormState) {
	    var accessedModelInstances = previous.accessedModelInstances;


	    return every_1(accessedModelInstances, function (accessedInstances, modelName) {
	        var previousRows = previous.ormState[modelName].itemsById;
	        var rows = ormState[modelName].itemsById;


	        var accessedIds = _Object$keys(accessedInstances);
	        return rowsAreEqual(accessedIds, previousRows, rows);
	    });
	};

	var fullTableScannedModelsAreEqual = function fullTableScannedModelsAreEqual(previous, ormState) {
	    var fullTableScannedModels = previous.fullTableScannedModels;


	    return fullTableScannedModels.every(function (modelName) {
	        var previousRows = previous.ormState[modelName].itemsById;
	        var rows = ormState[modelName].itemsById;

	        /**
	         * all of this model's instances were checked against some condition
	         * invalidate them unless none of them have changed
	         */

	        return tablesAreEqual(previousRows, rows);
	    });
	};

	/**
	 * A memoizer to use with redux-orm
	 * selectors. When the memoized function is first run,
	 * the memoizer will remember the models that are accessed
	 * during that function run.
	 *
	 * On subsequent runs, the memoizer will check if those
	 * models' states have changed compared to the previous run.
	 *
	 * Memoization algorithm operates like this:
	 *
	 * 1. Has the selector been run before? If not, go to 5.
	 *
	 * 2. If the selector has other input selectors in addition to the
	 *    ORM state selector, check their results for equality with the previous results.
	 *    If they aren't equal, go to 5.
	 *
	 * 3. Is the ORM state referentially equal to the previous ORM state the selector
	 *    was called with? If yes, return the previous result.
	 *
	 * 4. Check which Model's instances the selector has accessed on previous runs.
	 *    Check for equality with each of those states versus their states in the
	 *    previous ORM state. If all of them are equal, return the previous result.
	 *
	 * 5. Run the selector. Check the Session object used by the selector for
	 *    which Model's states were accessed, and merge them with the previously
	 *    saved information about accessed models (if-else branching can change
	 *    which models are accessed on different inputs). Save the ORM state and
	 *    other arguments the selector was called with, overriding previously
	 *    saved values. Save the selector result. Return the selector result.
	 *
	 * @private
	 * @param  {Function} func - function to memoize
	 * @param  {Function} argEqualityCheck - equality check function to use with normal
	 *                                       selector args
	 * @param  {ORM} orm - a redux-orm ORM instance
	 * @return {Function} `func` memoized.
	 */
	function memoize$1(func) {
	    var argEqualityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
	    var orm = arguments[2];

	    var previous = {
	        /* result of the previous function call */
	        result: null,
	        /* arguments to the previous function call (excluding ORM state) */
	        args: null,
	        /**
	         * lets us know how the models looked like
	         * during the previous function call
	         */
	        ormState: null,
	        /**
	        * array of names of models whose tables have been scanned completely
	        * during previous function call (contains only model names)
	        * format (e.g.): ['Book']
	        */
	        fullTableScannedModels: [],
	        /**
	        * map of which model instances have been accessed
	        * during previous function call (contains only IDs of accessed instances)
	        * format (e.g.): { Book: { 1: true, 3: true } }
	        */
	        accessedModelInstances: {}
	    };

	    return function () {
	        for (var _len = arguments.length, stateAndArgs = Array(_len), _key = 0; _key < _len; _key++) {
	            stateAndArgs[_key] = arguments[_key];
	        }

	        var ormState = stateAndArgs[0],
	            args = stateAndArgs.slice(1);


	        var selectorWasCalledBefore = previous.args && previous.ormState;

	        if (selectorWasCalledBefore && argsAreEqual(previous.args, args, argEqualityCheck) && accessedModelInstancesAreEqual(previous, ormState) && fullTableScannedModelsAreEqual(previous, ormState)) {
	            /**
	             * the instances that were accessed as well as
	             * the arguments that were passed to func the previous time that
	             * func was called have not changed
	             */
	            return previous.result;
	        }

	        /* previous result is no longer valid, update cached values */
	        previous.args = args;

	        var session = orm.session(ormState);
	        previous.ormState = ormState;

	        /* this is where we call the actual function */
	        var result = func.apply(undefined, [session].concat(_toConsumableArray(args)));
	        previous.result = result;

	        /* rows retrieved during function call */
	        previous.accessedModelInstances = session.accessedModelInstances;
	        /* tables that had to be scanned completely */
	        previous.fullTableScannedModels = session.fullTableScannedModels;

	        return result;
	    };
	}

	/**
	 * @module redux
	 */

	/**
	 * Calls all models' reducers if they exist.
	 * @return {undefined}
	 */
	function defaultUpdater(session, action) {
	    session.sessionBoundModels.forEach(function (modelClass) {
	        if (typeof modelClass.reducer === 'function') {
	            // This calls this.applyUpdate to update this.state
	            modelClass.reducer(action, modelClass, session);
	        }
	    });
	}

	/**
	 * Call the returned function to pass actions to Redux-ORM.
	 *
	 * @global
	 *
	 * @param {ORM} orm - the ORM instance.
	 * @param {Function} [updater] - the function updating the ORM state based on the given action.
	 * @return {Function} reducer that will update the ORM state.
	 */
	function createReducer(orm) {
	    var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultUpdater;

	    return function (state, action) {
	        var session = orm.session(state || orm.getEmptyState());
	        updater(session, action);
	        return session.state;
	    };
	}

	/**
	 * Returns a memoized selector based on passed arguments.
	 * This is similar to `reselect`'s `createSelector`,
	 * except you can also pass a single function to be memoized.
	 *
	 * If you pass multiple functions, the format will be the
	 * same as in `reselect`. The last argument is the selector
	 * function and the previous are input selectors.
	 *
	 * When you use this method to create a selector, the returned selector
	 * expects the whole `redux-orm` state branch as input. In the selector
	 * function that you pass as the last argument, you will receive a
	 * `session` argument (a `Session` instance) followed by any
	 * input arguments, like in `reselect`.
	 *
	 * This is an example selector:
	 *
	 * ```javascript
	 * // orm is an instance of ORM
	 * const bookSelector = createSelector(orm, session => {
	 *     return session.Book.map(book => {
	 *         return Object.assign({}, book.ref, {
	 *             authors: book.authors.map(author => author.name),
	 *             genres: book.genres.map(genre => genre.name),
	 *         });
	 *     });
	 * });
	 * ```
	 *
	 * redux-orm uses a special memoization function to avoid recomputations.
	 *
	 * Everytime a selector runs, this function records which instances
	 * of your `Model`s were accessed.<br>
	 * On subsequent runs, the selector first checks if the previously
	 * accessed instances or `args` have changed in any way:
	 * <ul>
	 *     <li>If yes, the selector calls the function you passed to it.</li>
	 *     <li>If not, it just returns the previous result
	 *         (unless you call it for the first time).</li>
	 * </ul>
	 *
	 * This way you can use the `PureRenderMixin` in your React components
	 * for performance gains.
	 *
	 * @global
	 *
	 * @param {ORM} orm - the ORM instance
	 * @param  {...Function} args - zero or more input selectors
	 *                              and the selector function.
	 * @return {Function} memoized selector
	 */
	function createSelector(orm) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    if (args.length === 1) {
	        return memoize$1(args[0], undefined, orm);
	    }

	    return lib_2$2(memoize$1, undefined, orm).apply(undefined, args);
	}

	var ORM_DEFAULTS = {
	    createDatabase: createDatabase
	};

	/**
	 * ORM - the Object Relational Mapper.
	 *
	 * Use instances of this class to:
	 *
	 * - Register your {@link Model} classes using {@link ORM#register}
	 * - Get the empty state for the underlying database with {@link ORM#getEmptyState}
	 * - Start an immutable database session with {@link ORM#session}
	 * - Start a mutating database session with {@link ORM#mutableSession}
	 *
	 * Internally, this class handles generating a schema specification from models
	 * to the database.
	 */
	var ORM = function () {
	    /**
	     * Creates a new ORM instance.
	     */
	    function ORM(opts) {
	        _classCallCheck$7(this, ORM);

	        var _Object$assign$$1 = _Object$assign({}, ORM_DEFAULTS, opts || {}),
	            createDatabase$$1 = _Object$assign$$1.createDatabase;

	        this.createDatabase = createDatabase$$1;
	        this.registry = [];
	        this.implicitThroughModels = [];
	        this.installedFields = {};
	    }

	    /**
	     * Registers a {@link Model} class to the ORM.
	     *
	     * If the model has declared any ManyToMany fields, their
	     * through models will be generated and registered with
	     * this call, unless a custom through model has been specified.
	     *
	     * @param  {...Model} model - a {@link Model} class to register
	     * @return {undefined}
	     */


	    _createClass(ORM, [{
	        key: 'register',
	        value: function register() {
	            var _this = this;

	            for (var _len = arguments.length, models = Array(_len), _key = 0; _key < _len; _key++) {
	                models[_key] = arguments[_key];
	            }

	            models.forEach(function (model) {
	                if (model.modelName === undefined) {
	                    throw new Error('A model was passed that doesn\'t have a modelName set');
	                }

	                model.invalidateClassCache();

	                _this.registerManyToManyModelsFor(model);
	                _this.registry.push(model);
	            });
	        }
	    }, {
	        key: 'registerManyToManyModelsFor',
	        value: function registerManyToManyModelsFor(model) {
	            var _this4 = this;

	            var fields = model.fields;

	            var thisModelName = model.modelName;

	            forOwn_1(fields, function (fieldInstance, fieldName) {
	                if (!(fieldInstance instanceof ManyToMany)) {
	                    return;
	                }

	                var toModelName = void 0;
	                if (fieldInstance.toModelName === 'this') {
	                    toModelName = thisModelName;
	                } else {
	                    toModelName = fieldInstance.toModelName; // eslint-disable-line prefer-destructuring
	                }

	                var selfReferencing = thisModelName === toModelName;
	                var fromFieldName = m2mFromFieldName(thisModelName);
	                var toFieldName = m2mToFieldName(toModelName);

	                if (fieldInstance.through) {
	                    if (selfReferencing && !fieldInstance.throughFields) {
	                        throw new Error('Self-referencing many-to-many relationship at ' + ('"' + thisModelName + '.' + fieldName + '" using custom ') + ('model "' + fieldInstance.through + '" has no ') + 'throughFields key. Cannot determine which ' + 'fields reference the instances partaking ' + 'in the relationship.');
	                    }
	                } else {
	                    var _Through$fields;

	                    var Through = function (_Model) {
	                        _inherits$7(ThroughModel, _Model);

	                        function ThroughModel() {
	                            _classCallCheck$7(this, ThroughModel);

	                            return _possibleConstructorReturn$7(this, (ThroughModel.__proto__ || _Object$getPrototypeOf(ThroughModel)).apply(this, arguments));
	                        }

	                        return ThroughModel;
	                    }(Model);

	                    Through.modelName = m2mName(thisModelName, fieldName);

	                    var PlainForeignKey = function (_ForeignKey) {
	                        _inherits$7(ThroughForeignKeyField, _ForeignKey);

	                        function ThroughForeignKeyField() {
	                            _classCallCheck$7(this, ThroughForeignKeyField);

	                            return _possibleConstructorReturn$7(this, (ThroughForeignKeyField.__proto__ || _Object$getPrototypeOf(ThroughForeignKeyField)).apply(this, arguments));
	                        }

	                        _createClass(ThroughForeignKeyField, [{
	                            key: 'installsBackwardsVirtualField',
	                            get: function get() {
	                                return false;
	                            }
	                        }, {
	                            key: 'installsBackwardsDescriptor',
	                            get: function get() {
	                                return false;
	                            }
	                        }]);

	                        return ThroughForeignKeyField;
	                    }(ForeignKey);
	                    var ForeignKeyClass = selfReferencing ? PlainForeignKey : ForeignKey;
	                    Through.fields = (_Through$fields = {
	                        id: attr()
	                    }, _defineProperty$4(_Through$fields, fromFieldName, new ForeignKeyClass(thisModelName)), _defineProperty$4(_Through$fields, toFieldName, new ForeignKeyClass(toModelName)), _Through$fields);

	                    Through.invalidateClassCache();
	                    _this4.implicitThroughModels.push(Through);
	                }
	            });
	        }

	        /**
	         * Gets a {@link Model} class by its name from the registry.
	         * @param  {string} modelName - the name of the {@link Model} class to get
	         * @throws If {@link Model} class is not found.
	         * @return {Model} the {@link Model} class, if found
	         */

	    }, {
	        key: 'get',
	        value: function get(modelName) {
	            var found = find_1(this.registry.concat(this.implicitThroughModels), function (model) {
	                return model.modelName === modelName;
	            });

	            if (typeof found === 'undefined') {
	                throw new Error('Did not find model ' + modelName + ' from registry.');
	            }
	            return found;
	        }
	    }, {
	        key: 'getModelClasses',
	        value: function getModelClasses() {
	            this._setupModelPrototypes(this.registry);
	            this._setupModelPrototypes(this.implicitThroughModels);
	            return this.registry.concat(this.implicitThroughModels);
	        }
	    }, {
	        key: 'generateSchemaSpec',
	        value: function generateSchemaSpec() {
	            var models = this.getModelClasses();
	            var tables = models.reduce(function (spec, modelClass) {
	                var tableName = modelClass.modelName;
	                var tableSpec = modelClass._getTableOpts(); // eslint-disable-line no-underscore-dangle
	                spec[tableName] = _Object$assign({}, { fields: modelClass.fields }, tableSpec);
	                return spec;
	            }, {});
	            return { tables: tables };
	        }
	    }, {
	        key: 'getDatabase',
	        value: function getDatabase() {
	            if (!this.db) {
	                this.db = this.createDatabase(this.generateSchemaSpec());
	            }
	            return this.db;
	        }

	        /**
	         * Returns the empty database state.
	         * @return {Object} the empty state
	         */

	    }, {
	        key: 'getEmptyState',
	        value: function getEmptyState() {
	            return this.getDatabase().getEmptyState();
	        }

	        /**
	         * Begins an immutable database session.
	         *
	         * @param  {Object} state  - the state the database manages
	         * @return {Session} a new {@link Session} instance
	         */

	    }, {
	        key: 'session',
	        value: function session(state) {
	            return new Session(this, this.getDatabase(), state);
	        }

	        /**
	         * Begins a mutable database session.
	         *
	         * @param  {Object} state  - the state the database manages
	         * @return {Session} a new {@link Session} instance
	         */

	    }, {
	        key: 'mutableSession',
	        value: function mutableSession(state) {
	            return new Session(this, this.getDatabase(), state, true);
	        }

	        /**
	         * @private
	         */

	    }, {
	        key: '_setupModelPrototypes',
	        value: function _setupModelPrototypes(models) {
	            var _this5 = this;

	            models.forEach(function (model) {
	                if (!model.isSetUp) {
	                    var fields = model.fields,
	                        modelName = model.modelName,
	                        querySetClass = model.querySetClass;

	                    forOwn_1(fields, function (field, fieldName) {
	                        if (!_this5._isFieldInstalled(modelName, fieldName)) {
	                            _this5._installField(field, fieldName, model);
	                            _this5._setFieldInstalled(modelName, fieldName);
	                        }
	                    });
	                    attachQuerySetMethods(model, querySetClass);
	                    model.isSetUp = true;
	                }
	            });
	        }

	        /**
	         * @private
	         */

	    }, {
	        key: '_isFieldInstalled',
	        value: function _isFieldInstalled(modelName, fieldName) {
	            return this.installedFields.hasOwnProperty(modelName) ? !!this.installedFields[modelName][fieldName] : false;
	        }

	        /**
	         * @private
	         */

	    }, {
	        key: '_setFieldInstalled',
	        value: function _setFieldInstalled(modelName, fieldName) {
	            if (!this.installedFields.hasOwnProperty(modelName)) {
	                this.installedFields[modelName] = {};
	            }
	            this.installedFields[modelName][fieldName] = true;
	        }

	        /**
	         * Installs a field on a model and its related models if necessary.
	         * @private
	         */

	    }, {
	        key: '_installField',
	        value: function _installField(field, fieldName, model) {
	            var FieldInstaller = field.installerClass;
	            new FieldInstaller({
	                field: field,
	                fieldName: fieldName,
	                model: model,
	                orm: this
	            }).run();
	        }

	        // DEPRECATED AND REMOVED METHODS

	        /**
	         * @deprecated Use {@link ORM#mutableSession} instead.
	         */

	    }, {
	        key: 'withMutations',
	        value: function withMutations(state) {
	            warnDeprecated('`ORM.prototype.withMutations` has been deprecated. ' + 'Use `ORM.prototype.mutableSession` instead.');
	            return this.mutableSession(state);
	        }

	        /**
	         * @deprecated Use {@link ORM#session} instead.
	         */

	    }, {
	        key: 'from',
	        value: function from(state) {
	            warnDeprecated('`ORM.prototype.from` has been deprecated. ' + 'Use `ORM.prototype.session` instead.');
	            return this.session(state);
	        }

	        /**
	         * @deprecated Access {@link Session#state} instead.
	         */

	    }, {
	        key: 'reducer',
	        value: function reducer() {
	            warnDeprecated('`ORM.prototype.reducer` has been deprecated. Access ' + 'the `Session.prototype.state` property instead.');
	            return createReducer(this);
	        }

	        /**
	         * @deprecated Use `import { createSelector } from "redux-orm"` instead.
	         */

	    }, {
	        key: 'createSelector',
	        value: function createSelector$$1() {
	            warnDeprecated('`ORM.prototype.createSelector` has been deprecated. ' + 'Import `createSelector` from Redux-ORM instead.');

	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }

	            return createSelector.apply(undefined, [this].concat(args));
	        }

	        /**
	         * @deprecated Use {@link ORM#getEmptyState} instead.
	         */

	    }, {
	        key: 'getDefaultState',
	        value: function getDefaultState() {
	            warnDeprecated('`ORM.prototype.getDefaultState` has been deprecated. Use ' + '`ORM.prototype.getEmptyState` instead.');
	            return this.getEmptyState();
	        }

	        /**
	         * @deprecated Define a Model class instead.
	         */

	    }, {
	        key: 'define',
	        value: function define() {
	            throw new Error('`ORM.prototype.define` has been removed. Please define a Model class.');
	        }
	    }]);

	    return ORM;
	}();

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

	function _classCallCheck$8(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck$1 = _classCallCheck$8;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$1(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass$1 = _createClass$1;

	var _typeof_1$1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized$1;

	function _possibleConstructorReturn$8(self, call) {
	  if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn$1 = _possibleConstructorReturn$8;

	var getPrototypeOf$4 = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf$5 = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits$8(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf$5(subClass, superClass);
	}

	var inherits$1 = _inherits$8;

	var Attr =
	/*#__PURE__*/
	function (_Attribute) {
	  inherits$1(Attr, _Attribute);

	  function Attr(opts) {
	    var _this;

	    classCallCheck$1(this, Attr);

	    _this = possibleConstructorReturn$1(this, getPrototypeOf$4(Attr).call(this, opts));

	    if (opts && typeof opts === 'string') {
	      _this.fieldName = _this.opts;
	    }

	    if (_this.opts.hasOwnProperty('fieldName')) {
	      _this.fieldName = _this.opts.fieldName;
	    }

	    if (_this.opts.hasOwnProperty('get')) {
	      _this.getMethod = _this.opts.get;
	    }

	    if (_this.opts.hasOwnProperty('set')) {
	      _this.setMethod = _this.opts.set;
	    }

	    return _this;
	  }

	  createClass$1(Attr, [{
	    key: "createForwardsDescriptor",
	    value: function createForwardsDescriptor(fieldName, model) {
	      var getMethod = this.getMethod;
	      var setMethod = this.setMethod;
	      var mapperFieldName = this.fieldName || fieldName;
	      console.log(this.fieldName, fieldName);
	      return {
	        get: function get() {
	          console.log(mapperFieldName, getMethod, setMethod);
	          return getMethod ? getMethod.call(this, this._fields[mapperFieldName], this._fields) : this._fields[mapperFieldName];
	        },
	        set: function set(value) {
	          return setMethod ? setMethod.call(this, this.set(mapperFieldName, value)) : this.set(mapperFieldName || fieldName, value);
	        },
	        enumerable: true,
	        configurable: true
	      };
	    }
	  }]);

	  return Attr;
	}(Attribute);

	function attr$1(opt) {
	  return new Attr(opt);
	}

	var BaseModel =
	/*#__PURE__*/
	function (_Model) {
	  inherits$1(BaseModel, _Model);

	  function BaseModel() {
	    classCallCheck$1(this, BaseModel);

	    return possibleConstructorReturn$1(this, getPrototypeOf$4(BaseModel).apply(this, arguments));
	  }

	  createClass$1(BaseModel, [{
	    key: "_initFields",
	    value: function _initFields(props) {
	      var _this2 = this;

	      var _this = this; // this._fields = Object.assign({}, props);


	      this._fields = Object.assign({}, props);

	      var _loop = function _loop() {
	        var fieldName = p; // console.log(fieldName,!(fieldName in _this),!(fieldName in this.getClass().fields))

	        if (!(fieldName in _this) === false && !(fieldName in _this2.getClass().fields) === false) {
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
	        } else {
	          Object.defineProperty(_this, fieldName, {
	            get: function get() {
	              return "please register the property before using\uFF1A".concat(fieldName, " -->").concat(this.getClass().modelName);
	            },
	            set: function set(value) {
	              console.info("please register the property before using\uFF1A".concat(fieldName, " -->").concat(this.getClass().modelName)); // return _this.set(fieldName, value);

	              return null;
	            },
	            configurable: true,
	            enumerable: true
	          });
	        }
	      };

	      for (var p in props) {
	        _loop();
	      } // });

	    }
	  }, {
	    key: "toData",
	    value: function toData() {
	      return this._fields;
	    }
	  }]);

	  return BaseModel;
	}(Model);

	BaseModel.reducer = function (action, modelClass, session) {
	  var modelName = modelClass.modelName;

	  switch (action.type) {
	    case "".concat(modelName, "/newItem"):
	      modelClass.create(action.payload);
	      break;

	    case "".concat(modelName, "/savePage"):
	      modelClass.all().toModelArray().forEach(function (model) {
	        return model.delete();
	      });
	      action.payload.items.map(function (m) {
	        return modelClass.create(m);
	      });
	      break;

	    case "".concat(modelName, "/saveList"):
	      action.payload.items.map(function (m) {
	        return modelClass.create(m);
	      });
	      break;

	    case "".concat(modelName, "/updateItem"):
	      modelClass.withId(action.payload.id).update(action.payload);
	      break;

	    case "".concat(modelName, "/saveItem"):
	      modelClass.upsert(action.payload);
	      break;

	    case "".concat(modelName, "/deleteItem"):
	      var model = modelClass.withId(action.payload);
	      model.delete();
	      break;

	    default: //  console.log(modelClass,action.type)

	  }

	  return session.state;
	};

	BaseModel.modelName = 'BaseModel';
	BaseModel.fields = {
	  id: attr$1()
	};

	ORM.prototype.getDatabase = function getDatabase() {
	  this.db = this.createDatabase(this.generateSchemaSpec());
	  return this.db;
	};

	var orm = new ORM({// createDatabase:createDatabase
	});
	var emptyDBState = orm.getEmptyState();
	var session = orm.session(emptyDBState);

	var index$9 = /*#__PURE__*/Object.freeze({
		BaseModel: BaseModel,
		Attr: Attr,
		orm: orm,
		session: session,
		createReducer: createReducer,
		reducerItemSelector: reducerItemSelector$$1,
		reducerListSelector: reducerListSelector$$1,
		attr: attr$1
	});

	// export * as router from './router'

	exports.ModuleRouter = index$2;
	exports.ModuleAction = index$3;
	exports.ModuleReducer = index$4;
	exports.ModuleSaga = index$6;
	exports.ModuleContainer = index$7;
	exports.ModuleMiddleware = index$5;
	exports.ModuleModel = index$9;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
