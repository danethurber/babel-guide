import EventEmitter from 'events'

class AllTheEvents extends EventEmitter {
  constructor(...args) {
    super(args)

    setTimeout(::this.emitMessage, 0)
  }

  emitMessage() {
    this.emit('some-event', 'i am a message')
  }

  get now() {
    return Date.now()
  }
}

export default AllTheEvents
