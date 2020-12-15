
import { Layout01Component } from './layout/layout01/layout01.component';

import { LayoutRoutesModule } from './routes/routes.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { MainConfigService } from './services/main.config.service';
import { ServiceConfigService } from './services/service.config.service';
import { MapboxmapService } from './cityfun/mapbox-map/service/mapboxmap.service';
import { MenuConfigService } from './services/menu.config.service';
import { CfhttpService } from './services/cfhttp.service';
import { CityfunModule } from './cityfun/cityfun.module';


@NgModule({
  declarations: [AppComponent, Layout01Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutRoutesModule,
    CityfunModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MapboxmapService,
    MainConfigService,
    ServiceConfigService,
    MenuConfigService,
    CfhttpService,
    
  ],
})
export class AppModule {}
