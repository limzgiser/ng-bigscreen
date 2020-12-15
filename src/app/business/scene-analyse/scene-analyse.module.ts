import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneAnalyseComponent } from './scene-analyse.component';
import { SceneAnalyseRoutes } from './scene-analyse.routing';

@NgModule({
  imports: [
    CommonModule,SceneAnalyseRoutes
  ],
  declarations: [SceneAnalyseComponent]
})
export class SceneAnalyseModule { }
