"use strict"
import VueComponent = require('vue-class-component')
import { Navbar } from './components/navbar/navbar'

@VueComponent
export class App {
  static template = require('./app.html')
  static components = { Navbar }

  active: string

  data() {
    return {
      active: ""
    }
  }
}
