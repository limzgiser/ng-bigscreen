import { Routes, RouterModule } from '@angular/router';
import { CityPlaneComponent } from './city-plane.component';

const routes: Routes = [
  {  
    path:"",
    component:CityPlaneComponent
  },
];

export const CityPlaneRoutes = RouterModule.forChild(routes);
