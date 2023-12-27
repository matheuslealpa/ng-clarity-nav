import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrDropdownModule, ClrVerticalNavModule} from '@clr/angular';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "../components/header/header.component";
import {SideNavigationMenuComponent} from "../components/side-navigation-menu/side-navigation-menu.component";

@Component({
  selector: 'app-side-nav-outer-toolbar',
  standalone: true,
  imports: [CommonModule, ClrVerticalNavModule, RouterLink, RouterLinkActive, BrowserAnimationsModule, ClrDropdownModule, HeaderComponent, SideNavigationMenuComponent],
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent {


}
