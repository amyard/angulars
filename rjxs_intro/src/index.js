//import { Observable, interval, timer, fromEvent } from 'rxjs';

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


// import { of } from 'rxjs';

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



// import { from } from 'rxjs';
// will flatten all data 
// const observable = from([1,2,3,4,5])

// also worked with response data
// const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete() {
//         console.log('complete')
//     }
// })



/* PIPEABLE  OPERATORS */
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// const observable = of(1,2,3,4,5)

// const numbersWithSymbols = observable.pipe(
//     map((value) => `$${value}`)
// )


// const subscription = numbersWithSymbols.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete() {
//         console.log('complete')
//     }
// })


import { fromEvent, of, interval } from 'rxjs';
import { map, filter, reduce, take, scan, tap } from 'rxjs/operators';

// const observable = fromEvent(
//     document, 'keydown'
// ).pipe(
//     map(event => event.code)
// )


// const observable = fromEvent(
//     document, 'keydown'
// ).pipe(
//     map(event => {
//         return event.code === 'Space' ? event.code : null
//     })

//     // map(event => event.code),
//     // filter(code => code === 'Space') // will display only SPACE
// )

// return 15
// const observable = of(1,2,3,4,5).pipe(
//     reduce(
//         (acc, val) => acc + val,
//         0
//     )
// )

// return 10
// const observable = interval(500).pipe(
//     take(5),
//     reduce(
//         (acc, val) => acc + val,
//         0
//     )
// )


// return 0,1,3,6,10
// const observable = interval(500).pipe(
//     take(5),
//     scan(
//         (acc, val) => acc + val,
//         0
//     )
// )


// return 0,1,2,3,4,10
const observable = interval(500).pipe(
    take(5),
    // both show the same result
    //tap(console.log),
    tap({
        next(val) {
            console.log(val)
        }
    }),
    reduce(
        (acc, val) => acc + val,
        0
    )
)


const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('complete')
    }
})
