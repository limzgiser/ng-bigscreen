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
      { path: '', redirectTo: 'people-portrayal', pathMatch: 'full' },
      {
        path: 'city-portrayal',
        loadChildren: () => import('../business/city-portrayal/city-portrayal.module').then(m => m.CityPortrayalModule),
      },
      {
        path: 'people-portrayal',
        loadChildren: () => import('../business/people-portrayal/people-portrayal.module').then(m => m.PeoplePortrayalModule),
      },
      {
        path: 'ent-portrayal',
        loadChildren: () => import('../business/ent-portrayal/ent-portrayal.module').then(m => m.EntPortrayalModule),
      },
      {
        path: 'city-event',
        loadChildren: () => import('../business/city-event/city-event.module').then(m => m.CityEventModule),
      },
      {
        path: 'city-plane',
        loadChildren: () => import('../business/city-plane/city-plane.module').then(m => m.CityPlaneModule),
      },
      {
        path: 'scene-analyse',
        loadChildren: () => import('../business/scene-analyse/scene-analyse.module').then(m => m.SceneAnalyseModule),
      }
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
