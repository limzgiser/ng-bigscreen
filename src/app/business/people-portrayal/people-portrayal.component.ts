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
    private router: Router) { }
  menuData=null;
  ngOnInit() {
    this.cfhttpService.get('poulation.brief.menu').subscribe((res: any) => {
      if (res) {
        this.menuData = res.data;
        //console.log(this.menuData);
      }
    });
  }
  routerToEmitter(e){
      this.router.navigate([`./layout/people-portrayal/${e.id}`]);
    
  }
}
