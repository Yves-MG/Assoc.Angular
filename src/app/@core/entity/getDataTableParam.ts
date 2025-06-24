export class GetTableDataParam {
    page: number;
    pageLength: number;
    fields: string[];
    filters: { [key: string]: any };
    search: { key: string; value: any };
    greaterThan: { [key: string]: any };
    lessThan: { [key: string]: any };
    isOrderByAsc: Array<{ Key: string; value: boolean }>;
    isIn: { [key: string]: any[] };
  
    constructor(init?: Partial<GetTableDataParam>) {
      this.page = 1;
      this.pageLength = 20;
      this.fields = [];
      this.filters = {};
      this.search = { key: "", value: "" };
      this.greaterThan = {};
      this.lessThan = {};
      this.isOrderByAsc = [{ Key: "", value: false }];
      this.isIn = {};
  
      // Permet d’initier rapidement avec des valeurs
      Object.assign(this, init);
    }
  }
  