import { Routes, RouterModule } from '@angular/router';
import { PeopleImportantComponent } from './people-important.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleImportantComponent,
  },
];

export const PeopleImportantRoutes = RouterModule.forChild(routes);
