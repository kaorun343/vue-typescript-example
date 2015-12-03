"use strict"
import VueComponent = require('vue-class-component')
import { prop, watch } from '../../decorators'

@VueComponent
export class Modal {

  static template = require('./modal.html')

  @prop({type: Boolean, default: false})
  isOpen: boolean

  @prop({type: String, default: ""})
  title: string

  $els: {
    modal: HTMLElement
  }

  @watch('isOpen')
  onChange(value: boolean) {
    $(this.$els.modal).modal(value ? 'show': 'hide')
  }

  close() {
    this.isOpen = false
  }
}
