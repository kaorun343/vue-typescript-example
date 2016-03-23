"use strict"
import Component from 'vue-class-component';
import Navbar from './components/navbar/navbar';

@Component({
    template: require('./app.html'),
    components: { Navbar }
})
export default class App {
    active: string;

    data() {
        return {
            active: ""
        };
    }
}
