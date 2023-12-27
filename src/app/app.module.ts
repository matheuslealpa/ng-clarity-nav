import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from "@clr/angular";
import {
  SideNavOuterToolbarComponent
} from "./@shared/component/side-nav-outer-toolbar/side-nav-outer-toolbar.component";
import {ClarityIcons, cogIcon, eyeIcon, homeIcon, userIcon, vmBugIcon} from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, homeIcon, vmBugIcon, cogIcon, eyeIcon);

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    SideNavOuterToolbarComponent
  ]
})
export class AppModule {
}
