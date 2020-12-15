import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CfhttpService } from 'src/app/services/cfhttp.service';
@Injectable({
  providedIn: 'root'
})
export class DataRequireService {
  constructor(private cfhttpService: CfhttpService) { }
  //获取人口画像模块菜单配置
  getModuleMenu() {
    let data;
      this.cfhttpService.get('poulation.brief.menu').subscribe((res:any)=>{
        if(res){
         
        }
    });  
  }
  publishData(res){
    
  }
}
