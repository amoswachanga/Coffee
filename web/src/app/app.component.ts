import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from './services/coffee.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  submitResponse: string = null;

  constructor(private formBuilder: FormBuilder, private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: [ 'email@email.com' ]
      }
    );

    // const myObservable = from([1, 2, 3, 4, 5, 6, 7]);

    // myObservable.pipe(
    //   map(value => {
    //     console.log("map function 1: " + value);
    //     return value + 10;
    //   }),
    //   map(value => {
    //     console.log("map 2: " + value);
    //     return value + 100;
    //   }),
    // ).subscribe(
    //   (value) => {
    //     console.log( "sub1: " + value);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

  onSubmit(response: FormGroup) {
    // console.log(event.value);
    // if (!response.pristine) {
    this.coffeeService.submitEmailForm(response.value).subscribe(successMessage => {
      console.log(successMessage);
      this.submitResponse = successMessage.response;
      // this.submitResponse = (<{response: string}>successMessage).response;
      // this.submitResponse = (successMessage as { response: string }).response;
    }, failureMessage => {
      console.log(failureMessage);
      this.submitResponse = failureMessage.response;
    });
    // } else {
    //   console.error("Please edit the value");
    // }
  }





}
