"use strict"
import VueComponent = require('vue-class-component')
import { prop, watch } from '../../decorators'

@VueComponent
export class Navbar {
  static template = require('./navbar.html')

  @prop({type: String, default: ""})
  public active: string

}
