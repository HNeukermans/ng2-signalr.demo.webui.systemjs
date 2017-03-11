import { Route } from '@angular/router';

import { ChatRoutes } from './chat/index';
import { BSElementRoutes } from './bs-element/index';
import { UnitTestRoutes } from './unit-test/index';
import { DashboardComponent } from './index';
import { DevSetupRoutes } from './dev-setup/devSetupComponent.routes';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
        ...ChatRoutes,
        ...DevSetupRoutes,
        ...BSElementRoutes,
        ...UnitTestRoutes
    	]
  	}
];
