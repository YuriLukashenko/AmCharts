import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { TreemapComponent } from './treemap/treemap.component';

@NgModule({
  declarations: [
    AppComponent,
    SparklineComponent,
    TreemapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
