import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';

let signalrConfiguration = new SignalRConfiguration();
signalrConfiguration.hubName = 'Ng2SignalRHub';
signalrConfiguration.logging = true;
signalrConfiguration.url =   'http://ng2-signalr-backend.azurewebsites.net/'; //'http://localhost:10772/';//
signalrConfiguration.qs = { user: 'donald' };


@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		DashboardModule,
    SharedModule.forRoot(),
    SignalRModule.configure(signalrConfiguration)
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})

export class AppModule { }
