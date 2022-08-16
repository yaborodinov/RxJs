import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
import {scan, map} from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4, 5)        // $ обозначает что это стрим

// stream$.subscribe((val) => {
//     console.log('Value: ', val);
// })

// const arr$ = from( [1 ,2, 3, 4]).pipe(     // метод from работает с массивами             
// scan((acc, v) => acc.concat(v), [])           
// )             

// arr$.subscribe((val) => {
//     console.log(val);
// })


// const stream$ = new Observable(observer => {
//     observer.next('First Value')

//     setTimeout(() => observer.next('AFter 1000 ms'), 1000)
    
//     setTimeout(() => observer.complete(), 1000)

//     // setTimeout(() => observer.error('Error after 2000 ms'), 2000)

//     setTimeout(() => observer.next('AFter 3000 ms'), 3000)
// });

// stream$.subscribe(
//     val => console.log('Value: ', val),
//     error => console.log(error),
//     () => console.log('complete')     
// )

// stream$.subscribe({
//     next(val) {
//         console.log(val);
//     },
//     error(err) {
//         console.log(err);
//     },
//     complete() {
    //         console.log('Completed');
    //     }
// })


// fromEvent - метод, который позволяет создавать стрим из событий  ====

// fromEvent( document.querySelector('canvas'), 'mousemove').pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => pos.ctx.fillRect(pos.x, pos.y , 2, 2))


// const clear$ = fromEvent(document.getElementById('clear'), 'click')

// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })



// ============

// const sub = interval(500).subscribe(v => console.log(v))

// setTimeout( () => {
//     sub.unsubscribe()
// }, 3000)



// =======
// timer(2500).subscribe((v) => console.log(v))        // timer аналогичен setTimeout

// ============

range(42, 10).subscribe(v => console.log(v))