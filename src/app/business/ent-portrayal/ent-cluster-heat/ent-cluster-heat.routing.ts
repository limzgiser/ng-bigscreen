import { Routes, RouterModule } from '@angular/router';
import {EntClusterHeatComponent} from './ent-cluster-heat.component';
const routes: Routes = [
  { 
    path:'',
    component:EntClusterHeatComponent
   },
];

export const EntClusterHeatRoutes = RouterModule.forChild(routes);
