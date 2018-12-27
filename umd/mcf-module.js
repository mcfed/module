(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('events'), require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'events', 'react', 'prop-types'], factory) :
	(factory((global.module = {}),global.EventEmitter,global.React,global.PropTypes));
}(this, (function (exports,EventEmitter,React,PropTypes) { 'use strict';

	EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;
	var React__default = 'default' in React ? React['default'] : React;
	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var errors = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UniquenessErrorMessage = exports.UniquenessErrorMessage = 'Args must be uniques !';
	var TypeErrorMessage = exports.TypeErrorMessage = 'Arguments must be strings';
	var ConstantsTypeErrorMessage = exports.ConstantsTypeErrorMessage = 'Constants must be an array';
	var NamespaceTypeErrorMessage = exports.NamespaceTypeErrorMessage = 'Namespace must be strings';

	});

	unwrapExports(errors);
	var errors_1 = errors.UniquenessErrorMessage;
	var errors_2 = errors.TypeErrorMessage;
	var errors_3 = errors.ConstantsTypeErrorMessage;
	var errors_4 = errors.NamespaceTypeErrorMessage;

	var typesTesters = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isString = exports.isString = function isString(arg) {
	  return typeof arg === 'string' || arg instanceof String;
	};
	var isArray = exports.isArray = function isArray(arg) {
	  return Array.isArray(arg);
	};

	});

	unwrapExports(typesTesters);
	var typesTesters_1 = typesTesters.isString;
	var typesTesters_2 = typesTesters.isArray;

	var errorRaisers = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.raiseErrorIfNotUnique = exports.matchTypeOrThrow = undefined;



	var matchTypeOrThrow = exports.matchTypeOrThrow = function matchTypeOrThrow(element, testFunction, message) {
	  if (!testFunction(element)) throw new Error(message);
	};

	var raiseErrorIfNotUnique = exports.raiseErrorIfNotUnique = function raiseErrorIfNotUnique(array) {
	  var hash = {};
	  var duplicate = false;
	  for (var i = 0; i < array.length && !duplicate; i++) {
	    if (hash[array[i]]) {
	      duplicate = true;
	    }
	    hash[array[i]] = true;
	  }
	  if (duplicate) throw new Error(errors.UniquenessErrorMessage);
	};

	});

	unwrapExports(errorRaisers);
	var errorRaisers_1 = errorRaisers.raiseErrorIfNotUnique;
	var errorRaisers_2 = errorRaisers.matchTypeOrThrow;

	var actionTypes_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});







	var actionTypes = function actionTypes(namespace, constants) {
	  (0, errorRaisers.matchTypeOrThrow)(namespace, typesTesters.isString, errors.NamespaceTypeErrorMessage);
	  (0, errorRaisers.matchTypeOrThrow)(constants, typesTesters.isArray, errors.ConstantsTypeErrorMessage);
	  (0, errorRaisers.raiseErrorIfNotUnique)(constants);
	  return Object.freeze(constants.reduce(function (obj, constant) {
	    (0, errorRaisers.matchTypeOrThrow)(constant, typesTesters.isString, errors.TypeErrorMessage);
	    obj[constant] = namespace + '/' + constant;
	    return obj;
	  }, {}));
	};
	exports.default = actionTypes;

	});

	unwrapExports(actionTypes_1);

	var reduxTypes = actionTypes_1;

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

	var isFunction = (function (value) {
	  return typeof value === 'function';
	});

	var isSymbol = (function (value) {
	  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
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

	function isValidActionType(type) {
	  return isString(type) || isFunction(type) || isSymbol(type);
	}

	function isValidActionTypes(types) {
	  if (isEmpty(types)) {
	    return false;
	  }

	  return types.every(isValidActionType);
	}

	function combineActions() {
	  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
	    actionsTypes[_key] = arguments[_key];
	  }

	  invariant_1(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
	  var combinedActionType = actionsTypes.map(toString).join(ACTION_TYPE_DELIMITER);
	  return {
	    toString: function toString$$1() {
	      return combinedActionType;
	    }
	  };
	}

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

	var isPlainObject = (function (value) {
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

	var flattenActionMap = flattenWhenNode(isPlainObject);

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

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function createActions(actionMap) {
	  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    identityActions[_key - 1] = arguments[_key];
	  }

	  var options = isPlainObject(getLastElement(identityActions)) ? identityActions.pop() : {};
	  invariant_1(identityActions.every(isString) && (isString(actionMap) || isPlainObject(actionMap)), 'Expected optional object followed by string action types');

	  if (isString(actionMap)) {
	    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
	  }

	  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
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
	    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
	  });
	}

	function actionCreatorsFromIdentityActions(identityActions, options) {
	  var actionMap = arrayToObject(identityActions, function (partialActionMap, type) {
	    var _objectSpread3;

	    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = identity, _objectSpread3));
	  });
	  var actionCreators = actionMapToActionCreators(actionMap, options);
	  return arrayToObject(Object.keys(actionCreators), function (partialActionCreators, type) {
	    var _objectSpread4;

	    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[camelCase(type)] = actionCreators[type], _objectSpread4));
	  });
	}

	var justCurryIt = curry;

	/*
	  function add(a, b, c) {
	    return a + b + c;
	  }
	  curry(add)(1)(2)(3); // 6
	  curry(add)(1)(2)(2); // 5
	  curry(add)(2)(4, 3); // 9

	  function add(...args) {
	    return args.reduce((sum, n) => sum + n, 0)
	  }
	  var curryAdd4 = curry(add, 4)
	  curryAdd4(1)(2, 3)(4); // 10

	  function converter(ratio, input) {
	    return (input*ratio).toFixed(1);
	  }
	  const curriedConverter = curry(converter)
	  const milesToKm = curriedConverter(1.62);
	  milesToKm(35); // 56.7
	  milesToKm(10); // 16.2
	*/

	function curry(fn, arity) {
	  return function curried() {
	    if (arity == null) {
	      arity = fn.length;
	    }
	    var args = [].slice.call(arguments);
	    if (args.length >= arity) {
	      return fn.apply(this, args);
	    } else {
	      return function() {
	        return curried.apply(this, args.concat([].slice.call(arguments)));
	      };
	    }
	  };
	}

	var createCurriedAction = (function (type, payloadCreator) {
	  return justCurryIt(createAction(type, payloadCreator), payloadCreator.length);
	});

	var isUndefined = (function (value) {
	  return value === undefined;
	});

	function handleAction(type, reducer, defaultState) {
	  if (reducer === void 0) {
	    reducer = identity;
	  }

	  var types = toString(type).split(ACTION_TYPE_DELIMITER);
	  invariant_1(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
	  invariant_1(isFunction(reducer) || isPlainObject(reducer), 'Expected reducer to be a function or object with next and throw reducers');

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
	  return (isPlainObject(node) || isMap(node)) && !hasGeneratorInterface(node);
	});

	function handleActions(handlers, defaultState, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  invariant_1(isPlainObject(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
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

	var actionEmitter = new EventEmitter();
	var defaultTypes = ["LIST_ACTION", //列表行为
	"SAVE_LIST", //保存列表
	"SAVE_ACTION", //保存行为
	"SAVE_ITEM", //保存单一数据
	"DELETE_ACTION", //删除行为
	"DELETE_ITEM", //删除数据
	"ITEM_ACTION" //获取信息
	];
	function actionCreator(TYPES) {
	  var object = Object.create({});

	  for (var key in TYPES) {
	    object[TYPES[key]] = createAction(TYPES[key]);
	  }

	  return object;
	}
	function createTypes(namespace, typesArray) {
	  return reduxTypes.default(namespace, typesArray);
	}
	function typesCreator(namespace, typesArray) {
	  return reduxTypes.default(namespace, typesArray);
	}
	function actionsTypeCreator(namespace, typesArray) {
	  return actionCreator(reduxTypes(namespace, typesArray));
	}

	var index = /*#__PURE__*/Object.freeze({
		actionEmitter: actionEmitter,
		defaultTypes: defaultTypes,
		actionCreator: actionCreator,
		createTypes: createTypes,
		typesCreator: typesCreator,
		actionsTypeCreator: actionsTypeCreator,
		combineActions: combineActions,
		createAction: createAction,
		createActions: createActions,
		createCurriedAction: createCurriedAction,
		handleAction: handleAction,
		handleActions: handleActions
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

	var defineProperty = _defineProperty$1;

	function _objectSpread$1(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread$1;

	var defaultState = {
	  items: [],
	  item: {},
	  //page meta
	  page: {
	    total: 0,
	    current: 1
	  }
	};
	function reducerActionCreator(actions) {
	  var reducerAction = {};

	  reducerAction[actions.saveParams] = function (state, _ref) {
	    var payload = _ref.payload;
	    return objectSpread({}, state, {
	      params: payload
	    });
	  }; //保存列表数据和分页信息


	  reducerAction[actions.saveList] = function (state, _ref2) {
	    var payload = _ref2.payload;
	    return objectSpread({}, state, {
	      items: payload.items,
	      total: payload.totalCount,
	      current: payload.currentPage
	    });
	  }; //保存单一项数据，不更新 list数据


	  reducerAction[actions.saveItem] = function (state, _ref3) {
	    var payload = _ref3.payload;
	    return objectSpread({}, state, {
	      item: payload
	    });
	  };

	  reducerAction[actions.deleteItem] = function (state, _ref4) {
	    var payload = _ref4.payload;
	    return objectSpread({}, state, {
	      item: {}
	    });
	  };

	  return reducerAction;
	}

	var index$1 = /*#__PURE__*/Object.freeze({
		defaultState: defaultState,
		reducerActionCreator: reducerActionCreator,
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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
	var noop = function noop() {};
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
	function hasOwn(object, property) {
	  return is.notUndef(object) && hasOwnProperty.call(object, property);
	}

	var is = {
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
	    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  },
	  promise: function promise(p) {
	    return p && is.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is.func(it.next) && is.func(it.throw);
	  },
	  iterable: function iterable(it) {
	    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is.func(ch.take) && is.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  },
	  stringableFunc: function stringableFunc(f) {
	    return is.func(f) && hasOwn(f, 'toString');
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
	  check(asEffect.fork(eff), is.object, 'detach(eff): argument must be a fork effect');
	  eff[FORK].detached = true;
	  return eff;
	};

	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

	  if (arguments.length) {
	    check(arguments[0], is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (is.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (is.channel(patternOrChannel)) {
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
	    check(channel, is.notUndef, 'put(channel, action): argument channel is undefined');
	    check(channel, is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    check(action, is.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    check(channel, is.notUndef, 'put(action): argument action is undefined');
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
	  check(fn, is.notUndef, meth + ': argument fn is undefined');

	  var context = null;
	  if (is.array(fn)) {
	    var _fn = fn;
	    context = _fn[0];
	    fn = _fn[1];
	  } else if (fn.fn) {
	    var _fn2 = fn;
	    context = _fn2.context;
	    fn = _fn2.fn;
	  }
	  if (context && is.string(fn) && is.func(context[fn])) {
	    fn = context[fn];
	  }
	  check(fn, is.func, meth + ': argument ' + fn + ' is not a function');

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
	  check(task, is.notUndef, 'join(task): argument task is undefined');
	  check(task, is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
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
	    check(task, is.notUndef, 'cancel(task): argument task is undefined');
	    check(task, is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
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
	    check(selector, is.notUndef, 'select(selector,[...]): argument selector is undefined');
	    check(selector, is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}

	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  check(pattern, is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    check(buffer, is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    check(buffer, is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}

	function cancelled() {
	  return effect(CANCELLED, {});
	}

	function flush(channel) {
	  check(channel, is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}

	function getContext(prop) {
	  check(prop, is.string, 'getContext(prop): argument ' + prop + ' is not a string');
	  return effect(GET_CONTEXT, prop);
	}

	function setContext(props) {
	  check(props, is.object, createSetContextWarning(null, props));
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
	  if (is.channel(patternOrChannel)) {
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

	var zeroBuffer = { isEmpty: kTrue, put: noop, take: noop };

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

	function sagaCreator(actions, Api, emitter) {
	  return {
	    fetchItem:
	    /*#__PURE__*/
	    regenerator.mark(function fetchItem(action) {
	      var result;
	      return regenerator.wrap(function fetchItem$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return call(Api.fetchItem, action.payload);

	            case 2:
	              result = _context.sent;

	              if (!(result.code === 0)) {
	                _context.next = 9;
	                break;
	              }

	              _context.next = 6;
	              return put(actions.saveItem(result.data));

	            case 6:
	              emitter.emit('success', result.code);
	              _context.next = 10;
	              break;

	            case 9:
	              emitter.emit('fail', result.code);

	            case 10:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, fetchItem, this);
	    }),
	    fetchList:
	    /*#__PURE__*/
	    regenerator.mark(function fetchList(action) {
	      var result;
	      return regenerator.wrap(function fetchList$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return call(Api.fetchList, action.payload);

	            case 2:
	              result = _context2.sent;

	              if (!(result.code === 0)) {
	                _context2.next = 9;
	                break;
	              }

	              _context2.next = 6;
	              return put(actions.saveList(result.data));

	            case 6:
	              emitter.emit('success', result.code);
	              _context2.next = 10;
	              break;

	            case 9:
	              emitter.emit('fail', result.code);

	            case 10:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, fetchList, this);
	    }),
	    fetchSave:
	    /*#__PURE__*/
	    regenerator.mark(function fetchSave(action) {
	      var result;
	      return regenerator.wrap(function fetchSave$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.next = 2;
	              return call(Api.fetchSave, action.payload);

	            case 2:
	              result = _context3.sent;

	              if (!(result.code === 0)) {
	                _context3.next = 9;
	                break;
	              }

	              _context3.next = 6;
	              return put(actions.saveItem(result.data));

	            case 6:
	              emitter.emit('success', result.code);
	              _context3.next = 10;
	              break;

	            case 9:
	              emitter.emit('fail', result.code);

	            case 10:
	            case "end":
	              return _context3.stop();
	          }
	        }
	      }, fetchSave, this);
	    }),
	    fetchDelete:
	    /*#__PURE__*/
	    regenerator.mark(function fetchDelete(action) {
	      var result;
	      return regenerator.wrap(function fetchDelete$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.next = 2;
	              return call(Api.fetchDelete, {
	                ids: [].concat(action.payload)
	              });

	            case 2:
	              result = _context4.sent;

	              if (result.code === 0) {
	                emitter.emit('success', result.code);
	              } else {
	                emitter.emit('fail', result.code);
	              }

	            case 4:
	            case "end":
	              return _context4.stop();
	          }
	        }
	      }, fetchDelete, this);
	    })
	  };
	}

	var index$2 = /*#__PURE__*/Object.freeze({
		effects: effects,
		sagaCreator: sagaCreator
	});

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
	  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var ReactReduxContext = React__default.createContext(null);

	var Provider =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(Provider, _Component);

	  function Provider(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    var store = props.store;
	    _this.state = {
	      storeState: store.getState(),
	      store: store
	    };
	    return _this;
	  }

	  var _proto = Provider.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this.subscribe();
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribe) this.unsubscribe();
	    this._isMounted = false;
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.store !== prevProps.store) {
	      if (this.unsubscribe) this.unsubscribe();
	      this.subscribe();
	    }
	  };

	  _proto.subscribe = function subscribe() {
	    var _this2 = this;

	    var store = this.props.store;
	    this.unsubscribe = store.subscribe(function () {
	      var newStoreState = store.getState();

	      if (!_this2._isMounted) {
	        return;
	      }

	      _this2.setState(function (providerState) {
	        // If the value is the same, skip the unnecessary state update.
	        if (providerState.storeState === newStoreState) {
	          return null;
	        }

	        return {
	          storeState: newStoreState
	        };
	      });
	    }); // Actions might have been dispatched between render and mount - handle those

	    var postMountStoreState = store.getState();

	    if (postMountStoreState !== this.state.storeState) {
	      this.setState({
	        storeState: postMountStoreState
	      });
	    }
	  };

	  _proto.render = function render() {
	    var Context = this.props.context || ReactReduxContext;
	    return React__default.createElement(Context.Provider, {
	      value: this.state
	    }, this.props.children);
	  };

	  return Provider;
	}(React.Component);

	Provider.propTypes = {
	  store: PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  }),
	  context: PropTypes.object,
	  children: PropTypes.any
	};

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _extends$2() {
	  _extends$2 = Object.assign || function (target) {
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

	  return _extends$2.apply(this, arguments);
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

	var defineProperty$1 = Object.defineProperty;
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
	                    defineProperty$1(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	var reactIs_production_min$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};
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
	var reactIs_production_min_9$1 = reactIs_production_min$2.Lazy;
	var reactIs_production_min_10$1 = reactIs_production_min$2.Memo;
	var reactIs_production_min_11$1 = reactIs_production_min$2.Portal;
	var reactIs_production_min_12$1 = reactIs_production_min$2.Profiler;
	var reactIs_production_min_13$1 = reactIs_production_min$2.StrictMode;
	var reactIs_production_min_14$1 = reactIs_production_min$2.Suspense;
	var reactIs_production_min_15$1 = reactIs_production_min$2.isValidElementType;
	var reactIs_production_min_16$1 = reactIs_production_min$2.isAsyncMode;
	var reactIs_production_min_17$1 = reactIs_production_min$2.isConcurrentMode;
	var reactIs_production_min_18$1 = reactIs_production_min$2.isContextConsumer;
	var reactIs_production_min_19$1 = reactIs_production_min$2.isContextProvider;
	var reactIs_production_min_20$1 = reactIs_production_min$2.isElement;
	var reactIs_production_min_21$1 = reactIs_production_min$2.isForwardRef;
	var reactIs_production_min_22$1 = reactIs_production_min$2.isFragment;
	var reactIs_production_min_23$1 = reactIs_production_min$2.isLazy;
	var reactIs_production_min_24$1 = reactIs_production_min$2.isMemo;
	var reactIs_production_min_25$1 = reactIs_production_min$2.isPortal;
	var reactIs_production_min_26$1 = reactIs_production_min$2.isProfiler;
	var reactIs_production_min_27$1 = reactIs_production_min$2.isStrictMode;
	var reactIs_production_min_28$1 = reactIs_production_min$2.isSuspense;

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

	unwrapExports(reactIs_development$2);
	var reactIs_development_1$1 = reactIs_development$2.typeOf;
	var reactIs_development_2$1 = reactIs_development$2.AsyncMode;
	var reactIs_development_3$1 = reactIs_development$2.ConcurrentMode;
	var reactIs_development_4$1 = reactIs_development$2.ContextConsumer;
	var reactIs_development_5$1 = reactIs_development$2.ContextProvider;
	var reactIs_development_6$1 = reactIs_development$2.Element;
	var reactIs_development_7$1 = reactIs_development$2.ForwardRef;
	var reactIs_development_8$1 = reactIs_development$2.Fragment;
	var reactIs_development_9$1 = reactIs_development$2.Lazy;
	var reactIs_development_10$1 = reactIs_development$2.Memo;
	var reactIs_development_11$1 = reactIs_development$2.Portal;
	var reactIs_development_12$1 = reactIs_development$2.Profiler;
	var reactIs_development_13$1 = reactIs_development$2.StrictMode;
	var reactIs_development_14$1 = reactIs_development$2.Suspense;
	var reactIs_development_15$1 = reactIs_development$2.isValidElementType;
	var reactIs_development_16$1 = reactIs_development$2.isAsyncMode;
	var reactIs_development_17$1 = reactIs_development$2.isConcurrentMode;
	var reactIs_development_18$1 = reactIs_development$2.isContextConsumer;
	var reactIs_development_19$1 = reactIs_development$2.isContextProvider;
	var reactIs_development_20$1 = reactIs_development$2.isElement;
	var reactIs_development_21$1 = reactIs_development$2.isForwardRef;
	var reactIs_development_22$1 = reactIs_development$2.isFragment;
	var reactIs_development_23$1 = reactIs_development$2.isLazy;
	var reactIs_development_24$1 = reactIs_development$2.isMemo;
	var reactIs_development_25$1 = reactIs_development$2.isPortal;
	var reactIs_development_26$1 = reactIs_development$2.isProfiler;
	var reactIs_development_27$1 = reactIs_development$2.isStrictMode;
	var reactIs_development_28$1 = reactIs_development$2.isSuspense;

	var reactIs$1 = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development$2;
	}
	});
	var reactIs_1 = reactIs$1.isValidElementType;

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
	      _ref2$forwardRef = _ref2.forwardRef,
	      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
	      _ref2$context = _ref2.context,
	      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
	      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

	  invariant_1(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension");
	  invariant_1(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
	  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + "React.createContext(), and pass the context object to React-Redux's Provider and specific components" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
	  invariant_1(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
	  var Context = context;
	  return function wrapWithConnect(WrappedComponent) {
	    {
	      invariant_1(reactIs_1(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
	    }

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends$2({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var pure = connectOptions.pure;
	    var OuterBaseComponent = React.Component;
	    var FinalWrappedComponent = WrappedComponent;

	    if (pure) {
	      OuterBaseComponent = React.PureComponent;
	    }

	    function makeDerivedPropsSelector() {
	      var lastProps;
	      var lastState;
	      var lastDerivedProps;
	      var lastStore;
	      var sourceSelector;
	      return function selectDerivedProps(state, props, store) {
	        if (pure && lastProps === props && lastState === state) {
	          return lastDerivedProps;
	        }

	        if (store !== lastStore) {
	          lastStore = store;
	          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);
	        }

	        lastProps = props;
	        lastState = state;
	        var nextProps = sourceSelector(state, props);

	        if (lastDerivedProps === nextProps) {
	          return lastDerivedProps;
	        }

	        lastDerivedProps = nextProps;
	        return lastDerivedProps;
	      };
	    }

	    function makeChildElementSelector() {
	      var lastChildProps, lastForwardRef, lastChildElement;
	      return function selectChildElement(childProps, forwardRef) {
	        if (childProps !== lastChildProps || forwardRef !== lastForwardRef) {
	          lastChildProps = childProps;
	          lastForwardRef = forwardRef;
	          lastChildElement = React__default.createElement(FinalWrappedComponent, _extends$2({}, childProps, {
	            ref: forwardRef
	          }));
	        }

	        return lastChildElement;
	      };
	    }

	    var Connect =
	    /*#__PURE__*/
	    function (_OuterBaseComponent) {
	      _inheritsLoose(Connect, _OuterBaseComponent);

	      function Connect(props) {
	        var _this;

	        _this = _OuterBaseComponent.call(this, props) || this;
	        invariant_1(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);
	        _this.selectDerivedProps = makeDerivedPropsSelector();
	        _this.selectChildElement = makeChildElementSelector();
	        _this.renderWrappedComponent = _this.renderWrappedComponent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
	        return _this;
	      }

	      var _proto = Connect.prototype;

	      _proto.renderWrappedComponent = function renderWrappedComponent(value) {
	        invariant_1(value, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
	        var storeState = value.storeState,
	            store = value.store;
	        var wrapperProps = this.props;
	        var forwardedRef;

	        if (forwardRef) {
	          wrapperProps = this.props.wrapperProps;
	          forwardedRef = this.props.forwardedRef;
	        }

	        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store);
	        return this.selectChildElement(derivedProps, forwardedRef);
	      };

	      _proto.render = function render() {
	        var ContextToUse = this.props.context || Context;
	        return React__default.createElement(ContextToUse.Consumer, null, this.renderWrappedComponent);
	      };

	      return Connect;
	    }(OuterBaseComponent);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;

	    if (forwardRef) {
	      var forwarded = React__default.forwardRef(function forwardConnectRef(props, ref) {
	        return React__default.createElement(Connect, {
	          wrapperProps: props,
	          forwardedRef: ref
	        });
	      });
	      forwarded.displayName = displayName;
	      forwarded.WrappedComponent = WrappedComponent;
	      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
	    }

	    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
	  };
	}

	var hasOwn$1 = Object.prototype.hasOwnProperty;

	function is$1(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is$1(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn$1.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$2(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  var baseProto = proto;

	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }

	  return proto === baseProto;
	}

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
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject$2(value)) {
	    warning$1(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
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
	  return _extends$2({}, ownProps, stateProps, dispatchProps);
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
	      warning$1("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
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
	    return connectHOC(selectorFactory, _extends$2({
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

	var defaultMapStateToProps = function defaultMapStateToProps(state, props) {
	  return {
	    fetchingReducer: state.fetchingReducer,
	    spins: function spins(type) {
	      return state.fetchingReducer.fetching.get(type);
	    },
	    querys: function querys(type) {
	      return state.fetchingReducer.params.get(type) || {};
	    }
	  };
	};
	var defaultMergeProps$1 = function defaultMergeProps(state, dispatch, ownProps) {
	  return Object.assign({}, ownProps, state, dispatch, {
	    items: state.reducer.items,
	    item: state.reducer.item,
	    spins: function spins(type) {
	      return state.fetchingReducer.fetching.get(type);
	    },
	    querys: function querys(type) {
	      return state.fetchingReducer.params.get(type) || {};
	    }
	  });
	};
	var maspActionDispatchToProps = function maspActionDispatchToProps(action) {
	  var TYPES = action.TYPES,
	      actions = action.actions;
	  return function (dispatch, props) {
	    return {
	      types: TYPES,
	      actions: bindActionCreators(actions, dispatch),
	      dispatch: dispatch
	    };
	  };
	};
	/*
	export function connectContainer(mapStateToProps,mapDispatchToProps,component){
	  return connect(defaultMapStateToProps,mapDispatchToProps)(component)
	}
	*/

	var index$3 = /*#__PURE__*/Object.freeze({
		defaultMapStateToProps: defaultMapStateToProps,
		defaultMergeProps: defaultMergeProps$1,
		maspActionDispatchToProps: maspActionDispatchToProps,
		connect: connect
	});

	// export * as router from './router'

	exports.ModuleAction = index;
	exports.ModuleReducer = index$1;
	exports.ModuleSaga = index$2;
	exports.ModuleContainer = index$3;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
