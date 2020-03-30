import {BaseReducer} from '../reducer';
import {BaseAction} from '../saga';
import {IReducer, IApi} from '../index.d';
import {Injectable} from '../decorators/Inject';

export class Api implements IApi {
  constructor() {}
  fetchItem() {
    //@ts-ignore
    console.log('fetchItem');
  }
}

// @Injectable
export class CarReducer extends BaseReducer {
  static namespece = 'car';
  static initalState = {
    a:1,
    page: {
      total: 0,
      current: 1,
      pageSize: 10
    }
  };
  saveItem(payload: any) {
    return payload;
  }

  saveItem2(payload: {a:number})
  {
    // console.log("saveItem2")
    return {a:payload.a+1};
  }



}

@Injectable
export class CarSaga extends BaseAction {
  static namespace = 'cac';

  constructor(public readonly reducer: CarReducer, public readonly api: Api) {
    super(reducer, api);
    // return this
  }

  run() {
    this.api.fetchItem();
    this.start();
    this.reducer.saveItem({});
  }

  start() {
    console.log(this);
    // this.dispatch({type:"bbb"})
  }

  // @Task(takeLoading)
  //@once
  //@delay
  //loading
  // @Meta()
  // @Action()
  async stop(payload: {a: string; b: number}) {
    // console.log(this.api)
    await this.shift();
    // console.log(payload.a)
    // yield 1
  }

  async shift() {
    console.log('shift');
  }

  *jump() {
    console.log('jump');
  }
}
