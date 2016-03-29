"use strict"
import Component from 'vue-class-component';
import {Navbar} from './components/navbar/navbar';

export interface App extends vuejs.Vue { }

@Component({
    template: require('./app.html'),
    components: { Navbar }
})
export class App {
    active: string;

    data() {
        return {
            active: ""
        };
    }
}
