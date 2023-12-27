import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrDropdownModule, ClrVerticalNavModule} from '@clr/angular';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_NAVIGATION} from "../../../app-navigation";

@Component({
  selector: 'app-side-nav-outer-toolbar',
  standalone: true,
  imports: [CommonModule, ClrVerticalNavModule, RouterLink, RouterLinkActive, BrowserAnimationsModule, ClrDropdownModule],
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent {
  protected title: string = 'app-side-nav-outer-bar';
  protected appNavigation = APP_NAVIGATION;
  dropdownItems = [
    {text: 'Sobre', icon: 'info-circle'},
    {text: 'Logout', icon: 'logout'},
  ];


}
