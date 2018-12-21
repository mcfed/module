import invariant from 'invariant';
import camelCase from 'to-camel-case';
import curry from 'just-curry-it';

const UniquenessErrorMessage = 'Args must be uniques !';
const TypeErrorMessage = 'Arguments must be strings';
const ConstantsTypeErrorMessage = 'Constants must be an array';
const NamespaceTypeErrorMessage = 'Namespace must be strings';

const isString = arg => typeof arg === 'string' || arg instanceof String;
const isArray = arg => Array.isArray(arg);

const matchTypeOrThrow = (element, testFunction, message) => {
  if (!testFunction(element)) throw new Error(message);
};

const raiseErrorIfNotUnique = array => {
  const hash = {};
  let duplicate = false;
  for (let i = 0; i < array.length && !duplicate; i++) {
    if (hash[array[i]]) {
      duplicate = true;
    }
    hash[array[i]] = true;
  }
  if (duplicate) throw new Error(UniquenessErrorMessage);
};

const actionTypes = (namespace, constants) => {
  matchTypeOrThrow(namespace, isString, NamespaceTypeErrorMessage);
  matchTypeOrThrow(constants, isArray, ConstantsTypeErrorMessage);
  raiseErrorIfNotUnique(constants);
  return Object.freeze(
    constants.reduce((obj, constant) => {
      matchTypeOrThrow(constant, isString, TypeErrorMessage);
      obj[constant] = `${namespace}/${constant}`;
      return obj;
    }, {}),
  );
};

var isFunction = (function (value) {
  return typeof value === 'function';
});

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

  invariant(isFunction(payloadCreator) || isNull(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
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

var isSymbol = (function (value) {
  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
});

var isEmpty = (function (value) {
  return value.length === 0;
});

var toString = (function (value) {
  return value.toString();
});

var isString$1 = (function (value) {
  return typeof value === 'string';
});

var DEFAULT_NAMESPACE = '/';
var ACTION_TYPE_DELIMITER = '||';

function isValidActionType(type) {
  return isString$1(type) || isFunction(type) || isSymbol(type);
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

  invariant(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(toString).join(ACTION_TYPE_DELIMITER);
  return {
    toString: function toString$$1() {
      return combinedActionType;
    }
  };
}

var isPlainObject = (function (value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
});

var isArray$1 = (function (value) {
  return Array.isArray(value);
});

var isNil = (function (value) {
  return value === null || value === undefined;
});

var getLastElement = (function (array) {
  return array[array.length - 1];
});

var namespacer = '/';
var camelCase$1 = (function (type) {
  return type.includes(namespacer) ? type.split(namespacer).map(camelCase).join(namespacer) : camelCase(type);
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
    var nextNamespace = camelCase$1(partialFlatActionTypePath.shift());

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
  invariant(identityActions.every(isString$1) && (isString$1(actionMap) || isPlainObject(actionMap)), 'Expected optional object followed by string action types');

  if (isString$1(actionMap)) {
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

    if (isArray$1(actionMapValue)) {
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
    invariant(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = isArray$1(actionMapValue) ? createAction.apply(void 0, [prefixedType].concat(actionMapValue)) : createAction(prefixedType, actionMapValue);
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

    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[camelCase$1(type)] = actionCreators[type], _objectSpread4));
  });
}

var createCurriedAction = (function (type, payloadCreator) {
  return curry(createAction(type, payloadCreator), payloadCreator.length);
});

var isUndefined = (function (value) {
  return value === undefined;
});

function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = identity;
  }

  var types = toString(type).split(ACTION_TYPE_DELIMITER);
  invariant(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant(isFunction(reducer) || isPlainObject(reducer), 'Expected reducer to be a function or object with next and throw reducers');

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

  invariant(isPlainObject(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
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

var defaultTypes = ["LIST_ACTION", //列表行为
"SAVE_LIST", //保存列表
"SAVE_ACTION", //保存行为
"SAVE_ITEM", //保存单一数据
"DELETE_ACTION", //删除行为
"DELETE_ITEM", //删除数据
"ITEM_ACTION", //获取信息
"SAVE_PARAMS" //保存参数
];
function actionCreator(TYPES) {
  var result = {
    listAction: createAction(TYPES.LIST_ACTION),
    saveList: createAction(TYPES.SAVE_LIST),
    itemAction: createAction(TYPES.ITEM_ACTION),
    saveAction: createAction(TYPES.SAVE_ACTION),
    saveItem: createAction(TYPES.SAVE_ITEM),
    deleteAction: createAction(TYPES.DELETE_ACTION),
    deleteItem: createAction(TYPES.DELETE_ITEM),
    saveParams: createAction(TYPES.SAVE_PARAMS)
  };
  return result;
}
function createTypes(namespece, typesArray) {
  return actionTypes(namespece, typesArray);
}

var index = /*#__PURE__*/Object.freeze({
  defaultTypes: defaultTypes,
  actionCreator: actionCreator,
  createTypes: createTypes,
  combineActions: combineActions,
  createAction: createAction,
  createActions: createActions,
  createCurriedAction: createCurriedAction,
  handleAction: handleAction,
  handleActions: handleActions
});

// export * as Router from './router'
// export * as Saga from './saga'
// export * as Model from './Model'
// export * as action from './container'

export { index as Action };
