import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }
}
