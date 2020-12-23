import { Routes, RouterModule } from '@angular/router';
import { EntPortrayalComponent } from './ent-portrayal.component';

const routes: Routes = [
  {
    path: "",
    component: EntPortrayalComponent,
    children: [
      { path: '', redirectTo: 'heat', pathMatch: 'full' },
      {
        path: 'heat',
        loadChildren: () => import('./ent-cluster-heat/ent-cluster-heat.module').then(m => m.EntClusterHeatModule)
      },
      {
        path: 'count',
        loadChildren: () => import('./ent-count/ent-count.module').then(m => m.EntCountModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('./ent-cluster-analysis/ent-cluster-analysis.module').then(m => m.EntClusterAnalysisModule)
      },
    ]
  },
];

export const EntPortrayalRoutes = RouterModule.forChild(routes);
