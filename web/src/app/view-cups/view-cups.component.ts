import { Component, OnInit, Input, Output } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-view-cups',
  templateUrl: './view-cups.component.html',
  styleUrls: ['./view-cups.component.scss']
})
export class ViewCupsComponent implements OnInit {

  cups: number;
  cups$: number;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.cups = this.coffeeService.getCups();
  }

}
