/**
 * @module Container
 */

import {bindActionCreators as bindActions} from 'redux';
export {connect} from 'react-redux';
import {DictUtils} from '../utils';
import {cancelTask} from '../middleware/redux-module'
// import {injectIntl} from 'react-intl'
// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"

/**
 * defaultMergeProps - 合并新增加的props(spins,querys,dicts,locale)
 *
 * @param  {object} state 状态仓库
 * @param  {function} dispatch 原redux的dispatch方法
 * @param  {object} ownProps 组件自身props
 * @return {object}          组合后将注入组件的props对象
 */
export const defaultMergeProps = (state, {dispatch,actions}, ownProps) => {
  console.log(dispatch,actions)
  return Object.assign({}, ownProps, state, {dispatch,actions}, {
    /**
     * spins - 获取当前方法加载状态方法
     *
     * @param  {function|string} 对应action或action.type
     * @return {boolean}      请求是否完成
     */
    spins: function(type) {
      return state.fetchingReducer.fetching.get(
        type.toString ? type.toString() : type
      );
    },
    /**
     * querys - 保存查询参数方法
     *
     * @param  {object} type 对应action或action.type
     * @return {object}       action.payload 或空json
     */

    querys: function(type) {
      return (
        state.fetchingReducer.params.get(
          type.toString ? type.toString() : type
        ) || {}
      );
    },

    /**
     * dicts - 查询字典方法
     *
     * @param  {string} type  对应字典名
     * @param  {int} value 需要翻译的值
     * @return {string}       翻译完成的值，若无则返回空
     */

    dicts: function(type, value) {
      if (arguments.length > 1) {
        return DictUtils.getDictLabel(state.appReducer.dicts, type, value);
      } else if (arguments.length == 1) {
        return DictUtils.getDictList(state.appReducer.dicts, type);
      }
      return '';
    },
    /**
     * locale - 国际化方法
     *
     * @param  {string} type  国际化对应类型
     * @param  {string} value 国际化语言
     * @return {string}       国际化完成的值
     */

    locale: function(type, value) {
      if (state.intl) {
        if (state.messages[type]) {
          return state.intl.formatMessage(state.messages[type], value);
        } else {
          return state.intl.formatMessage({id: type}, value);
        }
      }
      return '';
    },
    cancelAction:function(action){
      dispatch(cancelTask(`${action.toString()}`))
    }
  });
};

/**
 * bindActionCreators - description
 *
 * @param  {object} actions  actions 集合json
 * @param  {function} dispatch redux提供的dispatch
 * @return {object}          重新组合后的actions
 */
export function bindActionCreators(actions, dispatch) {
  let newActions = bindActions(actions, dispatch);
  for (var a in actions) {
    // console.log(actions[a])
    newActions[a].toString = actions[a].toString;
  }
  // console.log(newActions)
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
