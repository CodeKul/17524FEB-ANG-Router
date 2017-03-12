import { CheckingService } from './checking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(
    check : CheckingService
  ) { }

  ngOnInit() {
  }

}
