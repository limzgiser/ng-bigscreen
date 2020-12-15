import { Routes, RouterModule } from '@angular/router';
import { EntPortrayalComponent } from './ent-portrayal.component';

const routes: Routes = [
  {  
    path:"",
    component:EntPortrayalComponent
  },
];

export const EntPortrayalRoutes = RouterModule.forChild(routes);
