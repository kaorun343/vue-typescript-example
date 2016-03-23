"use strict"
import Component from 'vue-class-component';
import { storageKey } from '../../constants';

@Component({
    template: require('./settings.html'),
    route: {
        data(transition: vuejs.Transition<any, any, any, any, any>) {
            transition.next({
                status: false
            });
        }
    }
})
export default class Settings {

  status: boolean;

  data() {
    return {
      status: false
    };
  }

  remove() {
    localStorage.removeItem(storageKey);
    this.status = true;
  }

}
