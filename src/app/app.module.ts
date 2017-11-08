import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CustomMaterialModule} from './theme.component';
import {AppComponent} from './app.component';
import {CounterComponent} from './component/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
