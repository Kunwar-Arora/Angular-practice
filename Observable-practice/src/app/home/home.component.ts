import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable,Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription!: Subscription;
  constructor() { }

  ngOnInit(): void {

    // this.firstObsSubscription = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   }
    // )

    const customObservables = new Observable<number>((observer) => {
      let count = 0 ;
      setInterval(() => {
        observer.next(count);
        // if(count === 4){
        //   observer.error(new Error('error alert'))
        // }
        if(count === 5){
          observer.complete();
        }
        count++;
      },1000);
      
      
      
    });
    // let observer = {
    //   next: (data: number) => { console.log(data);},
    //   complete: () => {console.log("Completed");},
    //   error: (error: Error) => {console.log("Error Occured"); alert(error.message)}
    // }
    //* customObservables.subscribe(observer);


    //! customObservables.subscribe(
    //   data => {console.log(data)},
    //   (error) => {console.log("Error Occured"); alert(error.message)},
    //   () => {console.log("Completed");},
    // );
    
    const observablePipe = customObservables.pipe(map((data: number) => {
      return 'Round ' + (data + 1);
    }))
    observablePipe.subscribe(
      data => {console.log(data)},
      (error) => {console.log("Error Occured"); alert(error.message)},
      () => {console.log("Completed");},
    );
  }
  ngOnDestroy(){
    // this.firstObsSubscription.unsubscribe();
  }

}
