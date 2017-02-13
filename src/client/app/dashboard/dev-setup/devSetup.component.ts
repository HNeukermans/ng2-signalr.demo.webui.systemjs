import { Component, AfterViewChecked, OnDestroy } from '@angular/core';

declare var Prism: any;

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
import { DocumentationComponent } from './index';
import { ConnectionResolver } from './documentation.route.resolver';

export const DocumentationRoutes: Route[] = [
	{
		path: 'documentation',
    component: DocumentationComponent,
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
<<<<<<< HEAD
}`
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }

   showUnitTestCode() {
     let code =  `
import { inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalRConnectionMock } from 'ng2-signalr';
import { MockActivatedRoute } from './activated.route.mock';

describe('Documentation', () => {

  let connectionMock = new SignalRConnectionMock();
  let activatedRouteMock = new MockActivatedRoute();
  activatedRouteMock.snapshot.data = { 'connection': connectionMock };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentationComponent,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
  });
});`
=======
}`;
>>>>>>> 7008a391ae5fccf85b040f256eb9fc4ba58fa4ee
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }

     showRouteMockCode() {
     let code =  `
import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data } from '@angular/router';

export class MockActivatedRoute implements ActivatedRoute{
    snapshot: ActivatedRouteSnapshot;
    url: Observable<UrlSegment[]>;
    params: Observable<Params>;
    queryParams: Observable<Params>;
    fragment: Observable<string>;
    data: Observable<Data>;
    outlet: string;
    component: Type<any>|string;
    routeConfig: Route;
    root: ActivatedRoute;
    parent: ActivatedRoute;
    firstChild: ActivatedRoute;
    children: ActivatedRoute[];
    pathFromRoot: ActivatedRoute[];
    toString(): string{
        return '';
    };

    constructor() {
      this.snapshot = new ActivatedRouteSnapshot();
    }
}`
      this.code = Prism.highlight(code, Prism.languages.javascript);
  }




  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
