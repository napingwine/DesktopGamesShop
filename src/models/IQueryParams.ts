export interface IQueryParams {
  _limit?: number,
  _page?: number,
  hurryToBy?: boolean,
  sale?: number,
  [propName: string]: any;
}