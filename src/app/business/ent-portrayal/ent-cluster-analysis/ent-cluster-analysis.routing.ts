import { Routes, RouterModule } from '@angular/router';
import {EntClusterAnalysisComponent} from './ent-cluster-analysis.component';
const routes: Routes = [
  { 
    path:'',
    component:EntClusterAnalysisComponent
   },
];

export const EntClusterAnalysisRoutes = RouterModule.forChild(routes);
