
import {bindActionCreators} from 'redux'
// console.log(bindActionCreators)
import {connect} from 'react-redux'
// console.log(connect)
// export {injectIntl} from 'react-intl'
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

export const defaultMapDispatchToProps = (dispatch,props) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

export function connectContainer(mapStateToProps,mapDispatchToProps,component){
  return connect(defaultMapStateToProps,mapDispatchToProps)(component)
}
