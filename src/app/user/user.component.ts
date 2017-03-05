import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  speed: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(function (xyz) {
      this.id = xyz['id'];
    });
    //this.activatedRoute.url.subscribe(fragment => console.log(fragment));

    let onNext = params => this.speed = params['speed'];
    let onError = err => console.log(err);
    let onComplete = () => console.log(`Operation Completed`);

    this.router.routerState.root.queryParams.subscribe(onNext, onError, onComplete);
    console.log(this.router.routerState);

    // this.heavyCode(i =>{}).subscribe(num => this.speed = '' + num);
  }

  heavyCode(callback : any ): Observable<number | { [key: string]: any}> {
    return Observable.create(sub => {
      for (let i = 0; i < 100000; i++) {
        callback(i);
        if (i % 2 === 0)
          sub.next(i);
        else sub.next({'params' : i});
      }
      sub.complete();
    });
  }
}
