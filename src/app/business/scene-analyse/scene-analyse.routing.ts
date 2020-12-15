import { Routes, RouterModule } from '@angular/router';
import { SceneAnalyseComponent } from './scene-analyse.component';

const routes: Routes = [
  {  
    path:"",
    component:SceneAnalyseComponent
  },
];

export const SceneAnalyseRoutes = RouterModule.forChild(routes);
