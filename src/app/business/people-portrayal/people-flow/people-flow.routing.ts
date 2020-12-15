import { Routes, RouterModule } from '@angular/router';
import { PeopleFlowComponent } from './people-flow.component';

const routes: Routes = [
  {  
    path:"",
    component:PeopleFlowComponent
  },
];

export const PeopleFlowRoutes = RouterModule.forChild(routes);
