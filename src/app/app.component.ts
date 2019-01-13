import { Component, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('title', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('toolbar-title-enter', [
      transition(':enter', [
        style({  'margin-left': '-200px', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ 'margin-left': '0px', opacity: 1 }))  // final
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Competitors Home';

  constructor(
    @Inject('loading') public loader,
    private route: Router) {

    /**
      * Emulate router loading bar on app init
      */
    loader.changeLoadingStatus(true);
    setTimeout(() => {
      loader.changeLoadingStatus(false);
    }, 3000);


    /**
     * Set router to load on route changes
     */
    this.route.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          loader.changeLoadingStatus(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          loader.changeLoadingStatus(false);
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
