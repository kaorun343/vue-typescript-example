"use strict"
import Component from 'vue-class-component';

export interface Links extends vuejs.Vue { }

@Component({
    template: require('./links.html')
})
export class Links {

    links: { title: string; url: string }[];

    data(): any {
        return {
            links: [
                { title: "vue.js", url: "http://vuejs.org" },
                { title: "Welcome to TypeScript", url: "http://www.typescriptlang.org" },
                { title: "Vue.js Advent Calendar 2015 - Qiita", url: "http://qiita.com/advent-calendar/2015/vue" },
                { title: "エヴァンゲリオン 公式サイト", url: "http://www.evangelion.co.jp" },
                { title: "新世紀エヴァンゲリオン - Wikipedia", url: "https://ja.wikipedia.org/wiki/新世紀エヴァンゲリオン" }
            ]
        };
    }
}
