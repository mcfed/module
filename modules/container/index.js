export {bindActionCreators} from 'redux'
export {connect} from 'react-redux'
// import {injectIntl} from 'react-intl'
// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"


export const defaultMergeProps=(state, dispatch, ownProps)=>{
  return Object.assign({}, ownProps, state, dispatch,{
    spins:function(type){
      return state.fetchingReducer.fetching.get(type)
    },
    querys:function(type){
      return state.fetchingReducer.params.get(type) || {}
    },
    locale:function(type,value){

      return state.intl && state.intl.formatMessage(state.messages[type],value)
    }
  })
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
