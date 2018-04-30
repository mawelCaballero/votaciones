export interface IService {
  getAllPages(isLogged:boolean):Array<any>;
  getTitle():string;
  getId():string;
}
