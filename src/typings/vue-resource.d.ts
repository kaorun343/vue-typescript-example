// Type definitions for vuejs 0.1.17
// Project: https://github.com/vuejs/vue-resource
// Definitions by: kaorun343 <https://github.com/kaorun343>

declare namespace VueResource {

  interface Options {
    url?: string
    data?: Object | string
    method?: string
    params?: Object
    headers?: {
      puts: { [key: string]: string }
      post: { [key: string]: string }
      patch: { [key: string]: string }
      delete: { [key: string]: string }
      common: { [key: string]: string }
      custom: { [key: string]: string }
    }
    success?(data: any, status?: number, request?: any): void
    error?(data: any, status?: number, request?: any): void
    beforeSend?(request: XMLHttpRequest, options: Object): void
    emulateHTTP?: boolean
    emulateJSON?: boolean
    xhr?: XMLHttpRequest
    jsonp?: string
    options?: {
      root: string
    }
  }

  interface VueResourcePromise<R> extends Promise<R> {
    success<U>(callback: (data: any, status?: number, request?: any) => U): VueResourcePromise<U>
    error<U>(callback: (data: any, status?: number, request?: any) => U): VueResourcePromise<U>
    always<U>(callback: (data: any, status?: number, request?: any) => U): VueResourcePromise<U>
  }

  interface $http {
    get(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
    post(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
    put(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
    patch(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
    delete(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
    jsonp(url: string, data?: any, success?: (data: any, status?: number, request?: any) => any, options?: Options): VueResourcePromise<any>
  }

  interface resources {
    get(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
    save(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
    query(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
    update(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
    remove(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
    delete(params: Object, data?: Object, success?: (data: any, status?: number, request?: any) => any, error?: (data: any, status?: number, request?: any) => any): void
  }

  interface $resource {
    (url: string, params?: Object, actions?: any, options?: Options): resources
    actions: actions
  }

  interface actions {
    get: { method: string }
    save: { method: string }
    query: { method: string }
    update: { method: string }
    remove: { method: string }
    delete: { method: string }
  }

  type HTTP = $http
  type Resource = $resource
}

declare namespace vuejs {
  interface VueStatic {
    http: VueResource.HTTP
    resource: VueResource.Resource
  }
}
