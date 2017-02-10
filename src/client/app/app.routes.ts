import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';
import { DevSetupComponent } from './dashboard/dev-setup/devSetup.component';

export const routes: Routes = [
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
