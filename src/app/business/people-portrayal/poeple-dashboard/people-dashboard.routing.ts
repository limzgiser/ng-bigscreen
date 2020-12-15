import { Routes, RouterModule } from '@angular/router';
import { PoepleDashboardComponent } from './poeple-dashboard.component';

const routes: Routes = [
  {  
    path:"",
    component:PoepleDashboardComponent
  },
];

export const PeopleDashboardRoutes = RouterModule.forChild(routes);
