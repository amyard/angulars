import { Observable, interval, timer, fromEvent } from 'rxjs';

// Observable basic concept
// const observable = new Observable((subsriber) => {
//     subsriber.next("Hello world")
//     subsriber.error("Error")
//     subsriber.next("next")
//    
//     subsriber.complete()
//     subsriber.next("after complete")
// })

/*
// ASYNC
const observable = new Observable((subsriber) => {
    const id = setInterval(() => {
        subsriber.next("next")
        console.log('leak')
    }, 1000)

    return () => {
        clearInterval(id)
    }
})


const subscription = observable.subscribe({
    next: (value) => {
        console.log(value)
    },    
    complete: () => {
        console.log("complete called")
    }, 
    error: (err) => {
        console.error(err)
    }
})

setTimeout(() => {
    subscription.unsubscribe()
}, 4000)

*/

/*  CREATION  OPERATORS  */
// const observable = interval(1000)

// const subscription = observable.subscribe(
//     console.log
// )

// from 0 second till 1000 second with delay 1 sec
// const observable = timer(0, 1000)

// const subscription = observable.subscribe(
//     console.log
// )

// DOM operator - click on page , it will show coordinate of click 
// const observable = fromEvent(
//     document, 'click'
// )

// const subscription = observable.subscribe(
//     console.log
// )


import { of } from 'rxjs';

// sync operator
// const observable = of(1,2,3,4,5)

// will not flatten an array. display all array in same iteration 
// const observable = of([1,2,3,4,5])

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete() {
//         console.log('complete')
//     }
// })



import { from } from 'rxjs';
// will flatten all data 
// const observable = from([1,2,3,4,5])

// also worked with response data
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    }
})
