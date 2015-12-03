// Type definitions for vuejs 1.0.10
// Project: https://github.com/vuejs/vue
// Definitions by: kaorun343 <https://github.com/kaorun343>

interface Array<T> {
  $remove(item: T): Array<T>
  $set(index: number, val: T): T
}

declare namespace vuejs {
  interface VueStatic {
    config: {
      debug: boolean
      delimiters: [string, string]
      unsafeDelimiters: [string, string]
      silent: boolean
      async: boolean
      convertAllProperties: boolean
    }

    util: {
      set: (obj: Object, key: string, value: any) => void
      del: (obj: Object, key: string) => void
      hasOwn: (obj: Object, key: string) => boolean
      isLiteral: (exp: string) => boolean
      isReserved: (str: string) => boolean
      _toString: (value: any) => string
      toNumber: <T>(value: T) => T | number
      toBoolean: <T>(value: T) => T | boolean
      stripQuotes: (str: string) => string | boolean
      camelize: (str: string) => string
      hyphenate: (str: string) => string
      classify: (str: string) => string
      bind: (fn: Function, ctx: Object) => Function
      toAarray: <T>(list: ArrayLike<T>, start?: number) => Array<T>
      extend: <T, F>(to: T, from: F) => T & F
      isObject: (obj: any) => boolean
      isPlainObject: (obj: any) => boolean
      isArray: typeof Array.isArray
      def: (obj: Object, key: string, value: any, enumerable: boolean) => void
      debounce: (func: Function, wait: number) => Function
      indexOf: <T>(arr: Array<T>, obj: T) => number
      cancellable: (fn: Function) => Function
      looseEqual: (a: any, b: any) => boolean

      hasProto: boolean
      inBrowser: boolean
      isIE9: boolean
      isAndroid: boolean
      transitionProp: string
      transitionEndEvent: string
      animationProp: string
      animationEndEvent: string
      nextTick: (cb: Function, ctx: Object) => void

      query: (el: string | Element) => Element
      inDoc: (node: Node) => boolean
      getAttr: (node: Node, _attr: string) => string
      getBindAttr: (node: Node, name: string) => string
      before: (el: Element, target: Element) => void
      after: (el: Element, target: Element) => void
      remove: (el: Element) => void
      prepend: (el: Element, target: Element) => void
      replace: (target: Element, el: Element) => void
      on: (el: Element, event: string, cb: Function) => void
      off: (el: Element, event: string, cb: Function) => void
      addClass: (el: Element, cls: string) => void
      removeClass: (el: Element, cls: string) => void
      extractContent: (el: Element, asFragment: boolean) => HTMLDivElement | DocumentFragment
      trimNode: (node: Node) => void
      isTemplate: (el: Element) => boolean
      createAnchor: (content: string, persist: boolean) => Comment | Text
      findRef: (node: Element) => string
      mapNodeRange: (node: Node, end: Node, op: Function) => void
      removeNodeRange: (start: Node, end: Node, vm: any, frag: DocumentFragment, cb: Function) => void

      mergeOptions: <P, C>(parent: P, child: C, vm?: any) => P & C
      resolveAsset: (options: Object, type: string, id: string) => Object | Function
      assertAsset: (val: any, type: string, id: string) => void

      commonTagRE: RegExp
      checkComponentAttr: (el: Element, options: Object) => Object
      initProp: (vm: any, prop: Object, value: any) => void
      assertProp: (prop: Object, value: any) => boolean

      warn: (msg: string, e: Error) => void

      defineReactive: (obj: Object, key: string, val: any) => void
    }

    compiler: {
      compile: (el: Element | DocumentFragment, options: Object, partial: boolean) => (
        vm: any,
        el: Element | DocumentFragment,
        host?: any,
        scope?: any,
        frag?: DocumentFragment
      ) => Function
      compileAndLinkPros: (vm: any, el: Element, props: Object, scope?: Object) => Function
      compileRoot: (el: Element, options: Object, contextOptions: Object) => (vm: any, el: Element, scope: any) => any
      transclude: (el: Element, options: Object) => Element | DocumentFragment
    }

    FragmentFactory: {}

    internalDirectives: {}

    parsers: {
      path: any
      text: any
      template: any
      directive: any
      expression: any
    }

    cid: number

    extend(options?: ComponentOptions): any
    nextTick(callback: Function): this
    set(object: Object, key: string, value: any): this
    delete(object: Object, key: string): this
    directive<T extends ( Function | Object ) >(id: string, definition: T): T
    directive(id: string): any
    elementDirective<T extends ( Function | Object ) >(id: string, definition: T): T
    elementDirective(id: string): any
    filter<T extends ( Function | Object ) >(id: string, definition: T): T
    filter(id: string): any
    component<T extends ( Function | Object ) >(id: string, definition: T): any
    component(id: string): any
    transition<T extends Object >(id: string, hooks: T): T
    transition(id: string): any
    partial(id: string, partial: string): string
    partial(id: string): string
    use(callback: Function): this
    mixin(mixin: Object): void
  }

  namespace Vue {
    interface $get { (exp: string, asStatement?: boolean): any }
    interface $set { (key: string | number, value: any): void }
    interface $eval { (expression: string): string }
    interface $interpolate { (expression: string): string }
    interface $log { (keypath?: string): void }
    interface $watch {
      (
        expOrFn: string | Function,
        callback: ( (newVal: any, oldVal?: any) => any ) | string,
        options?: {
          deep?: boolean
          immidiate?: boolean
        }
      ): void
    }
    interface $on { (event: string, callback: Function): void }
    interface $once { (event: string, callback: Function): void }
    interface $off { (event: string, callback: Function): void }
    interface $emit { (event: string, ...args: any[]): void }
    interface $dispatch { (event: string, ...args: any[]): void }
    interface $broadcast { (event: string, ...args: any[]): void }
    interface $appendTo { (elementOrSelector: HTMLElement | string, callback?: Function): this }
    interface $prependTo { (target: HTMLElement, cb?: Function, withTransition?: Function): this }
    interface $before { (elementOrSelector: HTMLElement | string, callback?: Function): this }
    interface $after { (elementOrSelector: HTMLElement | string, callback?: Function): this }
    interface $remove { (callback?: Function): this }
    interface $nextTick { (callback: Function): void }
    interface $mount { (elementOrSelector?: HTMLElement | string): this }
    interface $destroy { (remove?: boolean): void }
    interface $compile { (el: Element | DocumentFragment, host?: any): this }
  }

  interface ComponentOptions {
    [key: string]: any
  }
}

declare module "vue" {
  var Vue: vuejs.VueStatic
  export = Vue
}
