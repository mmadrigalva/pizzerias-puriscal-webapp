export enum TabHeaderType {
  Category = 1,
  SubCategory = 2
}
export class TabHeader {
  constructor(
    public id: number,
    public title: string,
    public type: TabHeaderType
  ) {

  }
}
