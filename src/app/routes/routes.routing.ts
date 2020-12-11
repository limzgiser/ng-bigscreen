import { AuthGuard } from '../shared/services/auth.guard';
import { Layout01Component } from '../layout/layout01/layout01.component';
import { ServiceConfigService } from '../services/service.config.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainConfigService } from '../services/main.config.service';
import { MenuConfigService } from '../services/menu.config.service';

export const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('../cityfun/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'layout',
    component: Layout01Component,
    // canActivate: [AuthGuard],
     resolve: { // 此处使用resolve
       maincfg:MainConfigService,
       servicesCfg: ServiceConfigService,
       menuConfig:MenuConfigService
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadChildren: () => import('../business/dashboard/dashboard.module').then(m => m.DashboardModule),
      }
      ,
      // {
      //   path: '**',
      //   component: C404Component
      // },
    ]
  }
];
@NgModule({
  imports: [

  RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
