import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  isBusy: boolean = false;
  constructor(private router:Router) {
    router.events.filter(e => e instanceof NavigationStart).subscribe(() => {
         // resolve has been call here! "is-busy"
         this.isBusy = true;
    });

     router.events.filter(e => e instanceof NavigationEnd).subscribe(() => {
        // resolve finished here!  end of "is-busy" start of "leave" animation
        this.isBusy = false;
     });
  }

 }
