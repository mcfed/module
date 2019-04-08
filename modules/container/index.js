import {bindActionCreators as bindActions} from 'redux'
export {connect} from 'react-redux'
import {DictUtils} from '../utils'
// import {injectIntl} from 'react-intl'
// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"


export const defaultMergeProps=(state, dispatch, ownProps)=>{
  return Object.assign({}, ownProps, state, dispatch,{
    spins:function(type){
      return state.fetchingReducer.fetching.get(type.toString?type.toString():type)
    },
    querys:function(type){
      return state.fetchingReducer.params.get(type.toString?type.toString():type) || {}
    },
    dicts:function(type,value){
      if(arguments.length>1){
        return DictUtils.getDictLabel(state.appReducer.dicts,type,value)
      }else if(arguments.legnth == 1 ){
        return DictUtils.getDictList(state.appReducer.dicts,type)
      }
      return ""
    },
    locale:function(type,value){
      if(state.intl){
        if(state.messages[type]){
          return state.intl.formatMessage(state.messages[type],value)
        }else{
          return state.intl.formatMessage({id:type})
        }
      }
      return ""
    }
  })
}

export function bindActionCreators(actions,dispatch){
  let newActions=bindActions(actions,dispatch)
  for(var a in actions){
    // console.log(actions[a])
    newActions[a].toString=actions[a].toString
  }
  // console.log(newActions)
  return newActions
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
