import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/index';

export const routes: Routes = [
	...DashboardRoutes,
	{ path: '**', redirectTo: '/dashboard/setup', pathMatch: 'full' }
];
