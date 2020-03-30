interface IPagationParams {
  total: number;
  pageSize: number;
  current?: number;
  currentPage?: number;
  start: number;
  end: number;
  totalCount: number;
}

type IPayload<Props = IPagationParams> = {
  [P in keyof Props]: Props[P];
};

export class BaseReducer{
  static initalState = {
    page: {
      total: 0,
      current: 1,
      pageSize: 10
    }
  };


  getReducer():any{}

  inital(payload: {a:number},state?:Object) {
    return payload;
  }


  savePage(payload:IPayload) {
    const pageSize =
      payload.pageSize || payload.end + 1 - payload.start;
    return {
      page: {
        total: payload.totalCount || payload.total,
        pageSize,
        current:
          payload.currentPage ||
          Math.ceil((payload.start + 1) / pageSize)
      }
    };
  }

  saveList(payload: IPagationParams) {
    return {
      page: {
        total: payload.totalCount,
        current: payload.currentPage
      }
    };
  }
}
