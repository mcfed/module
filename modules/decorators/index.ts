import 'reflect-metadata';
import {BaseAction} from '../saga/';
import {Dispatch, Action, Store} from 'redux';
import {BaseReducer} from '../reducer';

type IPayload<Props = {a: string}> = {
  [P in keyof Props]: Props[P];
};

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}

export type AnyAction<P> = {
  type: string;
  payload: IPayload<P>;
};

export function useActionProxy<T extends BaseReducer | BaseAction>(
  target: T,
  store: Store
): T {
  return new Proxy(target, {
    get: function(target, prop, receiver) {
      return function(payload: Object) {
        store.dispatch({
          type: [target.constructor.name, prop].join('/'),
          payload,
          meta: {
            method: prop
          }
        });
      };
    }
  });
}

export function reduxActionProxy<T extends BaseReducer>(
         target: T
       ) {
         return new Proxy(target, {
           get: function(newTarget, prop, receiver) {
             if (prop === 'getReducer') {
               return () =>
                 function(
                   state: Object = target.constructor.prototype.constructor
                     .initalState,
                   action: any
                 ) {
                   const prop = action.meta?.method;
                   if (prop !== undefined) {
                     return {
                       ...state,
                       ...getProperty(newTarget, prop).call(
                         action.payload,
                         state
                       )
                     };
                   }
                 };
               //@ts-ignore
             } else if (newTarget[prop] !== undefined) {
               return function(payload: Object) {
                //@ts-ignore
                 return getProperty(newTarget, prop).call(payload);
               };
             }
           }
         });
       }

export function createActionProxy<T extends typeof BaseAction>(
  target: T,
  store: Store
): T {
  return new Proxy(target, {
    construct(target, args: any) {
      const [oneArg, twoArg] = args
      return new target(useActionProxy(oneArg, store), twoArg)
    }
  })
}
