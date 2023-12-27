import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {APP_NAVIGATION} from "../../../../app-navigation";
import {ClrConditionalModule, ClrIconModule, ClrVerticalNavModule} from "@clr/angular";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-side-navigation-menu',
  standalone: true,
  imports: [CommonModule, ClrConditionalModule, ClrIconModule, ClrVerticalNavModule, RouterLinkActive, RouterLink],
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent {

  protected appNavigation = APP_NAVIGATION;
}
