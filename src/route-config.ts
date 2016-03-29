"use strict"
import {App} from './app';
import {Home} from './components/home/home';
import {Links} from './components/links/links';
import {Settings} from './components/settings/settings';

export function configureRouter(router: vuejs.Router<App>) {
    router.map({
        '/': {
            component: Home,
            name: 'home'
        },
        '/links': {
            component: Links,
            name: 'links'
        },
        '/settings': {
            component: Settings,
            name: 'settings'
        }
    });

    router.afterEach((transition) => {
        router.app.active = transition.to.path.split("/")[1];
    });
}
