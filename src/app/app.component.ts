import {Component, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mid_day_meals';

  constructor(private router: Router, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.router.navigate(["budget"])
    this.renderer.removeClass(
      document.querySelector('app-root'),
      ''
    );
  }
}
