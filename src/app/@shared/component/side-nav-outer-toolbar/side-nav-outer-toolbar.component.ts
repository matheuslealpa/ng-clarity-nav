import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrIconModule, ClrVerticalNavIcon, ClrVerticalNavModule} from '@clr/angular';
import {APP_NAVIGATION} from 'src/app/app-navigation';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-nav-outer-toolbar',
  standalone: true,
  imports: [CommonModule, ClrVerticalNavModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent {

  @Input()
  title?: string

  appNavigation = APP_NAVIGATION;
}
