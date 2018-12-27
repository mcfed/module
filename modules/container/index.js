
import {bindActionCreators} from 'redux'
// console.log(bindActionCreators)
export {connect} from 'react-redux'
// export {reducerListSelector,reducerItemSelector} from "../model/reducerSelector"


export const defaultMapStateToProps = (state,props) => {
  return {
    fetchingReducer:state.fetchingReducer,
    spins:function(type){
      return state.fetchingReducer.fetching.get(type)
    },
    querys:function(type){
      return state.fetchingReducer.params.get(type) || {}
    }
  }
}

export const defaultMergeProps=(state, dispatch, ownProps)=>{
  return Object.assign({}, ownProps, state, dispatch,{
    items: state.reducer.items,
    item: state.reducer.item,
    spins:function(type){
      return state.fetchingReducer.fetching.get(type)
    },
    querys:function(type){
      return state.fetchingReducer.params.get(type) || {}
    }
  })
}

export const maspActionDispatchToProps = (action)=>{
  const { TYPES, actions } = action
  return (dispatch,props) => {
    return {
      types: TYPES,
      actions: bindActionCreators(actions, dispatch),
      dispatch
    };
  }
}
/*
export function connectContainer(mapStateToProps,mapDispatchToProps,component){
  return connect(defaultMapStateToProps,mapDispatchToProps)(component)
}
*/
