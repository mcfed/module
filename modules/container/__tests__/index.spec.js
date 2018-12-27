import ModuleContainer from '../index'

describe("ModuleContainer", () => {
  const component = function(props){
    console.log(props)
    return <div>abc</div>
  }
  const defaultMapStateToProps=function(state,ownProp){
      return {}
  }

  const defaultMapDispatchToProps=function(state,ownProp){
      return {}
  }
  it('ModuleContainer connectContainer',(done)=>{
    done()
    expect(ModuleContainer.connectContainer(defaultMapStateToProps,defaultMapDispatchToProps)(component))
  })
})
