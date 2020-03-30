import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//@ts-ignore
import configureStore from 'redux-mock-store';
import {CarSaga, CarReducer, Api} from '../index';
import {
  useActionProxy,
  reduxActionProxy,
  createActionProxy
} from '../../decorators';
import {
  Factory,
  Injectable,
  Constructor,
  ActionFactory
} from '../../decorators/Inject';
import {TestService} from '../../decorators/abc';

// c.stop({a:1})
// const c1 = actionCreate(c)
// console.log(c1.stop({a:1}))
// c1.

// c.stop({a:"1"})
// console.log()
// const c = new Car()
// c.shift.call()
// const values=actionCreate(c)
// console.log(values[0].actionHandle({a:"stop"}))

// c.run()
// c.start()
// c.start({a:1})(dispatch)
// c.stop({type:"abc",payload:{a:1,b:2}})
// console.log(c.stop)
// console.log(Reflect.getMetadataKeys(Car.prototype))
// console.log(111,actionsMeta[0].actionDispatch({a:11}))
// console.log(Reflect.getOwnMetadataKeys(Car.prototype))
// console.log(Reflect.getOwnMetadata("task:stop",Car.prototype))
// const descriptor1 = Object.getOwnPropertyDescriptors(Car);
// console.log(descriptor1.prototype.value.stop())
// console.log(c.stop({a:1}))

// console.log("design:type", Reflect.getMetadata("design:paramtypes", Car.prototype, "stop")[0])
// const action = Reflect.getMetadata("action", Car.prototype, "stop")
// console.log("stop",action({b:1,c:"2"},{d:1}))
// Reflect.getMetadata("action", Car.prototype, "stop")({b:2})
// console.log(Reflect.getOwnMetadata("action",Car.prototype,"stop"))
// console.log(Reflect.getMetadataKeys(Car.prototype,"stop"))
// console.log(Reflect.getOwnMetadataKeys(Car.prototype,"stop"))
// console.log(Reflect.hasMetadata("action",Car.prototype,"stop"))
// for(var prop in Car.prototype){
//   if(Reflect.hasMetadata("action",Car.prototype,prop)){
//     // console.log(prop,Reflect.getMetadata("action",Car.prototype,prop))
//     console.log(prop,Reflect.getMetadata("task",Car.prototype,prop))
//   }

// ActionCreate<{a:1}>(test)

// })

// class ActiveXRequest extends XMLHttpRequest {
//   send(url: String) {
//     // const xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     console.log('ActiveXObject send:', url);
//   }
// }

test('new instanceof', () => {
  class XMLHttpRequest {
    send(url: String) {
      console.log('XMLHttpRequest:%s', url);
    }
  }

  class ActiveXRequest extends XMLHttpRequest {
    send(url: String) {
      // const xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      console.log('ActiveXObject send:', url);
    }
  }

  class Ajax {
    constructor(public readonly httpRequest: XMLHttpRequest) {}
    request(url: String) {
      // console.log(this.httpRequest.send)
      this.httpRequest.send(url);
      // new ActiveXRequest().send(url)
    }
  }

  class Api {
    constructor(public readonly fetch: Ajax) {}

    fetchData(url: String) {
      this.fetch.request(url);
    }
  }

  const api = new Api(new Ajax(new ActiveXRequest()));

  api.fetchData('www.baidu.com');
});

test('test method', () => {
  const middleware: never[] = [];
  const mockStore = configureStore(middleware);
  const initialState = {a: 1, b: 2};
  const store = mockStore(initialState);
  const car = new CarSaga(new CarReducer(), new Api());
  car.run();
});


test('p1roxy', () => {
  // console.log(11)

  const middleware: never[] = [];
  const mockStore = configureStore(middleware);
  const initialState = {a: 1, b: 2};
  const store = mockStore(initialState);
  // store.replaceReducer()
  const reducers = reduxActionProxy(new CarReducer());
  // console.log(reducers.inital({a:3}))
  console.log(reducers.inital({a:3}));

  const reducerAction = useActionProxy(new CarReducer(), store);
  console.log(reducerAction.inital({a: 3}));

  console.log(store.getActions(), store.getState());
});

test('redux store', function() {
  const reducers = reduxActionProxy(new CarReducer());

  // const reducer = reducers.getReducer();
  // // console.log(reducers.getReducer().toString())
  // const rootReducer = combineReducers({
  //   carReducer:reducer
  // });
  // console.log(rootReducer)
  let store = createStore(
    reducers.getReducer(),
    'xxxx',
    applyMiddleware()
  );
  store.subscribe(() => console.log(store.getState()));
  const reducerAction = useActionProxy(new CarReducer(), store);
  reducerAction.inital({a: 3});
  reducerAction.saveItem2({a: 4});
  // reducerAction.savePage()
  reducerAction.saveItem({d: 5});
  // store.dispatch({type: 'CarReducer/inital',payload:{a:2}});
});



test('test wrapActionProxy', () => {
  const middleware: never[] = [];
  const mockStore = configureStore(middleware);
  const initialState = {a: 1, b: 2};
  const store = mockStore(initialState);
  // const car = new CarSaga(new CarReducer(), new Api());
  // car.run();

  const CarActions = createActionProxy(CarSaga, store);
  const carActions = new CarActions(new CarReducer(), new Api());
  carActions.run();

  const actions = useActionProxy(carActions, store);
  actions.run();
});

test('demo inject', () => {
  //  console.log(TestService);
  const testService = Factory(TestService);
  // const testShervice = Factory(TestService);
  // new TestService(new )
  testService.twoService.print('svvss');
  testService.twoService.test()
  testService.testMethod();
  testService.twoMethod();
});

test('inject Factory CarAction', () => {
  const middleware: never[] = [];
  const mockStore = configureStore(middleware);
  const initialState = {a: 1, b: 2};
  const store = mockStore(initialState);

  // console.log(CarSaga2.toString())
  // console.log(CarSaga.toString())

  // const carAction = Factory(CarSaga);
  const carAction = Factory(CarSaga);
  carAction.run();
  console.log(store.getActions());
  // carAction.fetchItem({id:1,name:"sss"})
});

test('inject ActionFactory CarAction', () => {
  const middleware: never[] = [];
  const mockStore = configureStore(middleware);
  const initialState = {a: 1, b: 2};
  const store = mockStore(initialState);

  const carAction = ActionFactory(CarSaga, store);
  carAction.run();
  console.log(store.getActions());
  // carAction.fetchItem({id:1,name:"sss"})
});
