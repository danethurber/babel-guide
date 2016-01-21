import EventEmitter from 'events'

class AllTheEvents extends EventEmitter {
  constructor(...args) {
    super(args)

    setTimeout(() => this.emit('some-event', 'some-string'), 0)
  }

  get now() {
    return Date.now()
  }
}

export default AllTheEvents
