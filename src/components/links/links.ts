"use strict"
import VueComponent = require('vue-class-component')
import { prop, watch } from '../../decorators'

@VueComponent
export class Links {
  static template = require('./links.html')

  links: {title: string; url: string}[]

  data(): any {
    return {
      links: [
        { title: "vue.js", url: "http://vuejs.org" },
        { title: "Welcome to TypeScript", url: "http://www.typescriptlang.org" },
        { title: "Vue.js Advent Calendar 2015 - Qiita", url: "http://qiita.com/advent-calendar/2015/vue" },
        { title: "エヴァンゲリオン 公式サイト", url: "http://www.evangelion.co.jp" },
        { title: "新世紀エヴァンゲリオン - Wikipedia", url: "https://ja.wikipedia.org/wiki/新世紀エヴァンゲリオン"}
      ]
    }
  }
}
