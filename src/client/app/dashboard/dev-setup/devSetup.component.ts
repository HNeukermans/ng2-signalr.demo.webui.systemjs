import { Component, AfterViewChecked, OnDestroy } from '@angular/core';
// import { AppInsights } from 'applicationinsights-js';
declare var Prism: any;
declare var AppInsights: any;

@Component({
  moduleId: module.id,
  selector: 'dev-setup',
  templateUrl: './dev-setup.component.html'
})

export class DevSetupComponent  implements AfterViewChecked, OnDestroy {

  public code: string = '';

  constructor() {
  }

  ngAfterViewChecked(): any {
    return Prism.highlightAll();
  }

  ngOnInit() {
    this.showModuleCode();

    AppInsights.trackPageView('dev-setup');
  }

  showModuleCode() {
    let code =  `
import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';

let signalrConfiguration = new SignalRConfiguration();
signalrConfiguration.hubName = 'Ng2SignalRHub';
signalrConfiguration.logging = true;
signalrConfiguration.url = 'http://ng2-signalr-backend.azurewebsites.net/';
signalrConfiguration.qs = { user: 'donald' };

@NgModule({
  imports: [
    SignalRModule.configure(signalrConfiguration)
  ],
  declarations: [AppComponent],
  providers: [ConnectionResolver],
  bootstrap: [AppComponent]
  });`;
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }

  showResolverCode() {
    let code =  `
import { Resolve } from '@angular/router';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionResolver implements Resolve<SignalRConnection> {

  constructor(private _signalR: SignalR) { }

  resolve() {
    console.log('ConnectionResolver. Resolving...');
    return this._signalR.connect();
  }
}`;
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }

  showRouteCode() {

    let code =  `
// we use the resolver to resolve 'connection' when navigation to the chat page
import { Route } from '@angular/router';
import { ChatComponent } from './index';
import { ConnectionResolver } from './chat.route.resolver';

export const ChatRoutes: Route[] = [
	{
     path: 'chat',
     component: ChatComponent,
     resolve: { connection: ConnectionResolver }
	}
];`;
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }


  showChatComponentCode() {
    let code = `
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnection } from 'ng2-signalr';

@Component({
  moduleId: module.id,
  selector: 'chat',
  template: './chat.component.html'
})

export class ChatComponent {
  private _connection: SignalRConnection;

  constructor(route: ActivatedRoute) {
    this._connection = route.snapshot.data['connection'];
  }
}`;
    this.code = Prism.highlight(code, Prism.languages.javascript);
  }

   showServerCode() {
     let code =  `
[HubName("Ng2SignalRHub")]
public class Ng2SignalRHub : Hub
{
        public override Task OnConnected() {

            Trace.TraceInformation("Ng2SignalRHub - OnConnected");

            var user = GetAuthenticatedUser();

            Clients.All.OnUserConnected(user);

            return base.OnConnected();
        }

        private string GetAuthenticatedUser() {
            var username = Context.QueryString["user"];
            if (string.IsNullOrWhiteSpace(username))
                throw new System.Exception("Failed to authenticate user.");

            Trace.TraceInformation("GetAuthenticatedUser :" + username);

            return username;
        }
}`;
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }

   showUnitTestCode() {
     let code =  `
import { inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnectionMockManager, ActivatedRouteMock } from 'ng2-signalr';

describe('Chat', () => {

  let connectionMockManager = new SignalRConnectionMockManager();
  let activatedRouteMock = new ActivatedRouteMock();
  activatedRouteMock.snapshot.data = { 'connection': connectionMockManager.mock };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatComponent,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
  });
});`;

      this.code = Prism.highlight(code, Prism.languages.javascript);
  }





  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
