import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { DataRequireService } from './service/data-require.service'
import { CfhttpService } from 'src/app/services/cfhttp.service';
@Component({
  selector: 'app-people-portrayal',
  templateUrl: './people-portrayal.component.html',
  styleUrls: ['./people-portrayal.component.scss'],
})
export class PeoplePortrayalComponent implements OnInit {


  constructor(private dataRequireService: DataRequireService,
    private cfhttpService: CfhttpService,
    private router: Router) {
     router.events.subscribe((param) => {
        if (param instanceof NavigationEnd) {
          const urls = param.url.split('/');
         this.activeRouteName = urls[urls.length-1];
        }
      });
     }
  activeRouteName:string = '';
  menuData=null;
  ngOnInit() {
    this.cfhttpService.get('poulation.brief.menu').subscribe((res: any) => {
      if (res) {
        this.menuData = res.data;
        this.menuData.map(item=>{
          if(item.id===this.activeRouteName){
            item.active = true;
          }else{
            item.active= false;
          }
        })
        //console.log(this.menuData);
      }
    });
  }
  routerToEmitter(e){
      this.router.navigate([`./layout/people-portrayal/${e.id}`]);
    
  }
}
