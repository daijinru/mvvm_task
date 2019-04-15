import {isFunction, has} from '../utils/_'

class Observer {
  constructor() {
    this.handlers = {}
  }

  on(type, handle) {
    if (!isFunction(handle)) {
      return false
    }

    if (!has(this.handlers, type)) {
      this.handlers[type] = []
    }

    this.handlers[type].push(handle)
  }

  off(type, handle) {
    if (!has(this.handlers, type)) {
      return false
    }

    let handlers = this.handlers[type]
    if (!handle) {
      this.handlers[type].length = 0
    } else {
      for (let i = 0; i < handlers.length; i ++) {
        if (handlers[i] === handle) {
          handlers.splice(i, 1)
        }
      }
    }
  }

  emit(type) {
    if (!has(this.handlers, type)) {
      return false
    }

    Array.prototype.shift.apply(arguments)

    for (let i = 0; i < this.handlers[type].length; i ++) {
      this.handlers[type][i].apply(this, arguments)
    }
  }
}

export default Observer