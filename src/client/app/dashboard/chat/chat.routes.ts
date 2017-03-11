import { Route } from '@angular/router';

import { ChatComponent } from './index';
import { ConnectionResolver } from './chat.route.resolver';

export const ChatRoutes: Route[] = [
	{
		path: 'chat',
    component: ChatComponent,
     resolve: { connection: ConnectionResolver }
	}
];
