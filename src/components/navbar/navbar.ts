"use strict"
import Component from 'vue-class-component';

@Component({
    template: require('./navbar.html'),
    props: {
        active: {
            type: String,
            default: ""
        }
    }
})
export default class Navbar {

    public active: string

}
