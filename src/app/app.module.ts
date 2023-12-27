import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from "@clr/angular";
import { SideNavOuterToolbarComponent } from "./@core/layout/side-nav-outer-toolbar/side-nav-outer-toolbar.component";

import {ClarityIcons, cogIcon, eyeIcon, homeIcon, loginIcon, logoutIcon, userIcon, vmBugIcon} from '@cds/core/icon';
ClarityIcons.addIcons(userIcon, homeIcon, vmBugIcon, cogIcon, eyeIcon, logoutIcon, loginIcon);

@NgModule({
  declarations: [
    AppComponent,
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
