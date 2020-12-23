import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntClusterHeatComponent } from './ent-cluster-heat.component';
import {EntClusterHeatRoutes} from './ent-cluster-heat.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
import {EntBriefComponent} from './ent-brief/ent-brief.component';
import {EntRegisterChangeComponent} from './ent-register-change/ent-register-change.component';
import {IndustryRateComponent} from './industry-rate/industry-rate.component';
import {EntRegisterMoneyComponent} from './ent-register-money/ent-register-money.component';
import {EntNatureComponent} from './ent-nature/ent-nature.component';
import {EntEconomicNatureComponent} from './ent-economic-nature/ent-economic-nature.component';
@NgModule({
  imports: [
    CommonModule,EntClusterHeatRoutes,CityfunModule
  ],
  declarations: [
    EntClusterHeatComponent,
    EntBriefComponent,
    EntRegisterChangeComponent,
    IndustryRateComponent,
    EntRegisterMoneyComponent,
    EntNatureComponent,
    EntEconomicNatureComponent
  ]
})
export class EntClusterHeatModule { }
