import { HeaderComponent } from './components/header/header.component';
import { NgxG2Directive } from './graphics/ngxG2.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, zh_CN, NzInputModule } from 'ng-zorro-antd';
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import zh from '@angular/common/locales/zh';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {
   MigrationComponent, 
   SideMenuComponent,
   StaticCardComponent ,
   CircleProgressGraphComponent,
   ClildrenNavComponent,
   ChartTitleComponent,
   RingChartComponent,
   LineAreaChartComponent,
   BarBacktobackComponent,
   BarVerticalComponent,
   BarHorizontalComponent,
   EventListBarComponent,
   StasticCardSimplenessComponent
  } from './components';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

const antZORRO = [
  NzMenuModule,
  NzMessageModule,
  NzInputModule,
  NzTreeModule,
  NzLayoutModule,
  NzIconModule,
  IconsProviderModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzPaginationModule,
];
const directive = [NgxG2Directive];
// ng 核心模块
const coreModule = [
  CommonModule,
  NzDropDownModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
// 业务公共组件
const selfcomms = [
  SideMenuComponent,
   HeaderComponent,
   ChartTitleComponent,
   StaticCardComponent,
   ClildrenNavComponent,
   MigrationComponent,
   CircleProgressGraphComponent,
   RingChartComponent,
   LineAreaChartComponent,
   BarBacktobackComponent,
   BarVerticalComponent,
   BarHorizontalComponent,
   EventListBarComponent,
   StasticCardSimplenessComponent
  ];


registerLocaleData(zh);
@NgModule({
  imports: [...coreModule, ...antZORRO, ],
  declarations: [...selfcomms,...directive],
  exports: [...coreModule, ...selfcomms, ...antZORRO, ...directive],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class SharedModule {}
