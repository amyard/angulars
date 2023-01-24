import { Observable } from 'rxjs';

// Observable basic concept
// const observable = new Observable((subsriber) => {
//     subsriber.next("Hello world")
//     subsriber.error("Error")
//     subsriber.next("next")
//    
//     subsriber.complete()
//     subsriber.next("after complete")
// })

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

