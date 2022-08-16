import { fromEvent, interval } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs';

fromEvent(document, 'click')
    .pipe(
        switchMap(() => {
            return interval(1000)
            .pipe(
                take(5),
                reduce((acc, v) => acc + v, 0 )
            )
        })
    )
    .subscribe({
        next: v => console.log('Next: ', v),
        complete: () => console.log('Complete')
    })

// const stream$ = interval(1000)
//     .pipe(
//         tap(v => console.log(v)),
//         // map(v => v * 3),
//         // filter(v => v % 2 === 0),
//         take(10),
//         // takeLast(5)
//         // takeWhile(v => v < 7)
//         // scan((acc, v) => acc + v, 0 )
//         reduce((acc, v) => acc + v, 0 )    // reduce работает с уже завершенным стримом
//     )

// stream$.subscribe({
//     next: v => console.log('Next: ', v),
//     complete: () => console.log('Complete')
// })