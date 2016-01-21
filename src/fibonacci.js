export function* fibonacciGenerator(){
  let fn1 = 0
  let fn2 = 1

  while (true){
    let current = fn1

    fn1 = fn2
    fn2 = current + fn1

    let reset = yield current

    if (reset){
      fn1 = 0
      fn2 = 1
    }
  }
}

export const fibonacciIterator = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1]

    return {
      next() {
        [pre, cur] = [cur, pre + cur]
        return { done: false, value: cur }
      }
    }
  }
}
