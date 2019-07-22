import { Component, OnInit, Input, Output } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-cups',
  templateUrl: './view-cups.component.html',
  styleUrls: ['./view-cups.component.scss']
})
export class ViewCupsComponent implements OnInit {

  cups: number;
  cups$: Observable<{ cups: number }>;

  constructor(private coffeeService: CoffeeService, private store: Store<{cups: number}>) {
    this.cups$ = store.pipe(select('cupsStore'));
    console.log("======================SOMETHING====");
    this.cups$.subscribe(val => console.log(val));
  }

  ngOnInit() {
    this.cups = this.coffeeService.getCups();
  }

}
