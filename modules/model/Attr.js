import {Attribute} from 'redux-orm'

export default class Attr extends Attribute{
  constructor(opts) {
    super(opts)

    if(opts && typeof(opts)==='string'){
      this.fieldName=this.opts
    }

    if (this.opts.hasOwnProperty('fieldName')) {
        this.fieldName = this.opts.fieldName;
    }
    if (this.opts.hasOwnProperty('get')) {
         this.getMethod = this.opts.get;
    }
    if (this.opts.hasOwnProperty('set')) {
         this.setMethod = this.opts.set;
    }
  }

  createForwardsDescriptor(fieldName,model) {
    const getMethod=this.getMethod
    const setMethod=this.setMethod
    const mapperFieldName=this.fieldName || fieldName
    return {
      get() {
          // console.log(mapperFieldName,getMethod)
          return getMethod ? getMethod.call(this,this._fields[mapperFieldName ],this._fields):this._fields[mapperFieldName]
      },
      set(value) {
          // console.log(mapperFieldName,setMethod)
          return setMethod ? setMethod.call(this,this.set(mapperFieldName, value)): this.set(mapperFieldName || fieldName, value)
      },
      enumerable: true,
      configurable: true,
    }
  }
}

function attr(opt){
  return new Attr(opt)
}

export {attr}
