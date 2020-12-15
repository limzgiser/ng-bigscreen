import { Routes, RouterModule } from '@angular/router';
import { CityEventComponent } from './city-event.component';

const routes: Routes = [
  {  
    path:"",
    component:CityEventComponent
  },
];

export const CityEventRoutes = RouterModule.forChild(routes);
