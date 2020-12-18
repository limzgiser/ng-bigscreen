import { Routes, RouterModule } from '@angular/router';
import { EntCountComponent } from './ent-count.component'
const routes: Routes = [
  {
    path: '',
    component: EntCountComponent
  },
];

export const EntCountRoutes = RouterModule.forChild(routes);
