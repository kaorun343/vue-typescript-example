"use strict"
import Vue = require('vue');
import VueRouter = require('vue-router');
import {App} from './app';
import { configureRouter } from './route-config';

Vue.use(VueRouter);

const router = new VueRouter<App>();
configureRouter(router);

router.start(App, '#app');
