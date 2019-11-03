import { Component } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;

  public Path = RoutePath;

}
