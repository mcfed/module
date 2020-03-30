//@ts-ignore
// import {showError, showSuccess, fetchReq,goBack} from '../middleware/index';
import {IApi,IReducer, IAction} from '../index.d'



export class BaseAction implements IAction {
  protected api: IApi
  protected reducer: IReducer
  static namespace: string;

  constructor(reducer: IReducer, api: IApi) {
    this.api = api;
    this.reducer = reducer;
    // this.dispatch = dispatch
  }
  refreshParams(actionType:string,state:any ){
    //@ts-ignore
    return Object.assign({}, state[this.constructor.namespace].page, state.fetchingReducer.params.get(actionType))
  }

  async refreshPage(action?: any) {
    // const actionType = [this.constructor.name, 'fetchPage'].join('/');
    // const params ={type:""}
    // const pageAction = {
    //   type: actionType,
    //   payload: params,
    //   meta: metaFn()
    // };
    // // this.dispatch(fetchReq(pageAction));
    // this.fetchPage(params);
  }
  /**
  * fetchPage - 请求列表数据方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */
  async fetchPage(payload:any) {
    const result = await this.api.fetchList(payload);
    if (result.code === 0) {
      this.reducer.savePage(result.data);
    } else {
      // this.dispatch(showError(result.message));
    }
  }
  /**
  * fetchItem - 请求item数据方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */

  async fetchItem(payload:{id:number,name:string}) {
    const result = await this.api.fetchItem(payload);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
    } else {
      // showError(result.message);
      // this.dispatch(showError(result.message));
    }
  }
  /**
  * fetchList - 同fetchPage方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */

  async fetchList(payload:any) {
    const result =this.api.fetchList(payload);
    if (result.code === 0) {
      this.reducer.saveList(result.data);
    } else {
      // this.dispatch(showError(result.message));
    }
  }
  /**
  * fetchSave - 表单提交保存方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */

  async fetchSave(payload:any) {
    const result = this.api.fetchSave(payload);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
      // this.dispatch(showSuccess());
      // this.dispatch(goBack());
    } else {
      // this.dispatch(showError(result.message));
    }
  }
  /**
  * fetchSaveOrUpdate - 表单保存或更新方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */

  async fetchSaveOrUpdate(payload:any) {
    let result;
    if (payload.id) {
      result = this.api.fetchUpdate(payload);
    } else {
      result = this.api.fetchSave(payload);
    }
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
      // this.dispatch(showSuccess());
      // this.dispatch(goBack());
    } else {
      // this.dispatch(showError(result.message));
    }
  }
  /**
  * fetchDelete - 删除方法
  *
  * @param  {object} action action对象
  * @return {type}        ----
  */

  async fetchDelete(payload:any) {
    // console.log(action.payload)
    const payload1 = {ids: [].concat(payload)};
    const result = this.api.fetchDelete(payload1);
    if (result.code === 0) {
      // this.dispatch(showSuccess());
      this.refreshPage(payload);
    } else {
      // this.dispatch(showError(result.message));
    }
  }
}
