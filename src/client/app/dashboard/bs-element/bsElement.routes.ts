import { Route } from '@angular/router';
import { BSElementComponent } from './index';
import { resolve } from 'path';
import { ConnectionResolver } from './bsElement.route.resolver';

export const BSElementRoutes: Route[] = [
	{
		path: 'element',
		component: BSElementComponent,
		resolve :  { connections : ConnectionResolver }
	}
];
