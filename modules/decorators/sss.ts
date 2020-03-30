interface IService{

}
class BaseService{
  constructor(){}
  print(message:String){
    console.log(message)
  }
}

export class OtherService implements IService{
  a = 1;
}
export class TwoService extends BaseService implements IService{
  constructor(){
    super()
  }
  test() {
    console.log('test');
  }
}
