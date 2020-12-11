
import { HeaderComponent } from './components/header/header.component';

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
import { SideMenuComponent } from './components';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

const antZORRO =
  [
    NzMenuModule,
    NzMessageModule,
    NzInputModule,
    NzTreeModule,
    NzLayoutModule,
    NzIconModule,
    IconsProviderModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzPaginationModule
  ];

// ng 核心模块
const coreModule = [
  CommonModule,
   NzDropDownModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
   RouterModule
];
// 业务公共组件
const selfcomms = [SideMenuComponent, HeaderComponent];


registerLocaleData(zh);
@NgModule({
  imports: [
    ...coreModule,
    ...antZORRO,


  ],
  declarations: [
    ...selfcomms
  ],
  exports: [
    ...coreModule,
    ...selfcomms,
    ...antZORRO,

  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class SharedModule { }
