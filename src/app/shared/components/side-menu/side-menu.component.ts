import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { CfhttpService } from 'src/app/services/cfhttp.service';
 


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menus = [];
  constructor(private router: Router, private cfhttpService: CfhttpService) { }
  isCollapsed = true;

  @Output() sideBarEventEmitter = new EventEmitter<any>();
  // @Input()
  selectValue = null;
  menuList = [];
  ngOnInit() {
    this.getConfigData();
  }
  private getConfigData() {
    this.cfhttpService.get('menu.config').subscribe(res => {
      this.menus = res.data;
    });
  }

  muneClick(item) {
    console.log(item)
    // this.router.navigate([`/business/${jtem.value}`]);
  }

}
