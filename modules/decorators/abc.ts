import {Injectable} from './Inject'
import {OtherService, TwoService} from './sss';



@Injectable
export class TestService {
  constructor(public readonly otherService: OtherService,public readonly twoService:TwoService) {}

  testMethod() {
    console.log(this.otherService.a);
  }
  twoMethod(){
    return this.twoService.test()
  }
}
