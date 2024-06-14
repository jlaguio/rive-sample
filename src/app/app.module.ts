import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RIVE_FOLDER, RiveModule } from 'ng-rive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RiveModule],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/rive/animations',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
