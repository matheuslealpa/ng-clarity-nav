import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrIconCustomTag, ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { APP_NAVIGATION } from 'src/app/app-navigation';
import { RouterLink } from '@angular/router';
import { CdsIcon } from '@cds/core/icon/icon.element';

@Component({
  selector: 'app-side-nav-outer-toolbar',
  standalone: true,
  imports: [CommonModule, ClrVerticalNavModule, RouterLink, ClrIconModule],
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent {

  @Input()
  title?: string
  // collapsed?: boolean = false

  appNavigation = APP_NAVIGATION;

}
