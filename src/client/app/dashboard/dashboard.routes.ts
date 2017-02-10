import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { DocumentationRoutes } from './documentation/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

import { DashboardComponent } from './index';
import { DevSetupRoutes } from './dev-setup/devSetupComponent.routes';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        ...TableRoutes,
        ...DocumentationRoutes,
        ...DevSetupRoutes,
        ...FormRoutes,
        ...GridRoutes,
        ...BSElementRoutes
    	]
  	}
];
