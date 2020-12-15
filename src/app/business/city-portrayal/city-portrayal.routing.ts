import { Routes, RouterModule } from '@angular/router';
import { CityPortrayalComponent } from './city-portrayal.component';

const routes: Routes = [
  {
    path: '',
    component: CityPortrayalComponent,
  },
];
export const CityPortrayalRoutes = RouterModule.forChild(routes);
