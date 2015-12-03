"use strict"
import VueComponent = require('vue-class-component')
import { prop, watch } from '../../decorators'
import { storageKey } from '../../constants'

@VueComponent
export class Settings {
  static template = require('./settings.html')

  status: boolean

  data() {
    return {
      status: false
    }
  }

  remove() {
    localStorage.removeItem(storageKey)
    this.status = true
  }

  static route = {
    data: function(transition: VueRouter.Transition<any, any, any, any, any>) {
      transition.next({
        status: false
      })
    }
  }
}
