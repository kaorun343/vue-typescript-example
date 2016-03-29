"use strict"
import Component from 'vue-class-component';

export interface Navbar extends vuejs.Vue { }

@Component({
    template: require('./navbar.html'),
    props: {
        active: {
            type: String,
            default: ""
        }
    }
})
export class Navbar {

    public active: string

}
