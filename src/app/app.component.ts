import { Component, Inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { popin } from './core/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [popin]
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
