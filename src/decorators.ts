/**
 * decorator of an event
 * @param  {string}            eventName [description]
 * @return {PropertyDecorator}           [description]
 */
export function event(eventName: string): PropertyDecorator {
  return function(target: any, propertyKey: string) {
    (target.constructor.events || (target.constructor.events = {}))[eventName] = propertyKey
  }
}

interface PropOption {
  type?: any
  required?: boolean
  default?: any
  twoWay?: boolean
  validator?: (value: any) => boolean
}

/**
 * decorator of a prop
 * @param  {PropOption}        options [description]
 * @return {PropertyDecorator}         [description]
 */
export function prop(options: PropOption): PropertyDecorator {
  return function(target: any, propertyKey: string) {
    (target.constructor.props || (target.constructor.props = {}))[propertyKey] = options
  }
}

/**
 * decorator of a watch function
 * @param  {string}            path [description]
 * @return {PropertyDecorator}      [description]
 */
export function watch(path: string): PropertyDecorator {
  return function(target: any, propertyKey: string) {
    (target.constructor.watch || (target.constructor.watch = {}))[path] = propertyKey
  }
}
