import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-outer-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent {

  @Input()
  title?: string

}
