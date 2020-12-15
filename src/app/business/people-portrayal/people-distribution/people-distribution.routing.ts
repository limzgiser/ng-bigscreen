import { Routes, RouterModule } from '@angular/router';
import { PeopleDistributionComponent } from './people-distribution.component';

const routes: Routes = [
  {
    path:"",
    component:PeopleDistributionComponent
    },
];

export const PeopleDistributionRoutes = RouterModule.forChild(routes);
