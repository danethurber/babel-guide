import Evented from './evented-class'
import {fibonacciGenerator, fibonacciIterator} from './fibonacci'

// ==== Object destructuring

const {log} = console
log('logging like a boss')

// ==== String templates

// var state = 'work'
// console.log(`string templates ${state}`)
//
// console.log(`
// multi line strings
// also ${state}!!
// `)

// ==== Arrow functions

// const arrowed = (squadMember) => console.log(squadMember)
// arrowed('The Ugly One!!')

// ==== Modules and classes

// const evented = new Evented()
//
// evented.on('some-event', (message) => log(message))
//
// console.log(evented.now)

// ==== Argument spread and rest operators

// function logThings(logFn, ...things) {
//   logFn(things)
// }
//
// logThings(console.log, 'one', 'two', 'three')

// ==== Using Spread to Compose

// const obj1 = {one: true}
// const obj2 = {two: true}
// const composed = { ...obj1, ...obj2}

// console.log('composed', composed)

// ==== Generators

// const sequence = fibonacciGenerator()
//
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)
// log(sequence.next().value)

// ==== Iterators
//
// for (var n of fibonacciIterator) {
//   if (n > 1000) break
//   console.log(n)
// }
