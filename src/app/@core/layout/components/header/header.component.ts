import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClrDropdownModule, ClrIconModule} from "@clr/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ClrDropdownModule, ClrIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'app-side-nav-outer-bar';
  dropdownItems = [
    {text: 'Sobre', icon: 'info-circle'},
    {text: 'Logout', icon: 'logout'},
  ];

}
