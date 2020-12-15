import { Routes, RouterModule } from '@angular/router';
 
import { PeoplePortrayalComponent } from './people-portrayal.component';
 
const routes: Routes = [
  {
    path: '',
    component: PeoplePortrayalComponent,
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path:"dashboard",
        loadChildren: () => import('./poeple-dashboard/poeple-dashboard.module').then(m => m.PoepleDashboardModule),
      },
      {
        path:"distribution",
        loadChildren: () => import('./people-distribution/people-distribution.module').then(m => m.PeopleDistributionModule),
      },
      {
        path:"flow",
        loadChildren: () => import('./people-flow/people-flow.module').then(m => m.PeopleFlowModule),
      },
      {
        path:"important",
        loadChildren: () => import('./people-important/people-important.module').then(m => m.PeopleImportantModule),
      }
    ]
  },
];

export const PeoplePortrayalRoutes = RouterModule.forChild(routes);
