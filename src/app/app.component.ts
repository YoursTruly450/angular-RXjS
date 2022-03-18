import { Component } from '@angular/core';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  stream$: Subject<number> = new Subject<number>();

  counter = 0;

  constructor() {
    // const intervalStream$ = interval(1000);

    // this.sub = intervalStream$
    //   .pipe(
    //     filter(value => value % 2 === 0),
    //     map(value => `Mapped value ${value}`)
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 1500);

    //   setTimeout(() => {
    //     observer.complete();
    //   }, 1900);

    //   setTimeout(() => {
    //     observer.error('Something going wrong...');
    //   }, 2000);

    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 2500);
    // });

    // this.sub = stream$
    //   .subscribe(
    //     value => console.log('Next: ', value),
    //     error => console.log('Error: ', error),
    //     () => console.log('Complete')
    //   )

    this.sub = this.stream$.subscribe(value => console.log('Subscribe', value));
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }

  stop() {
    this.sub.unsubscribe();
  }
}
