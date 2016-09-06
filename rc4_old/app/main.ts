import { bootstrap }    from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import { AppComponent } from './app.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms()
    ]);
