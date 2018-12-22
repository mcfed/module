
import {bindActionCreators} from 'redux'
export {connect} from 'react-redux'
// export {injectIntl} from 'react-intl'
export {reducerListSelector,reducerItemSelector} from "../Model/reducerSelector"

const defaultMapStateToProps = (state,props) => {
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
const defaultMapDispatchToProps = (dispatch,props) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

/*
export const function connectContainer({mapStateToProps,mapDispatchToProps},component){
  return connect(Object.assgin({},defaultMapStateToProps,mapStateToProps},
    Object.assgin({},defaultMapDispatchToProps,mapDispatchToProps}
    )(component)
}
*/
