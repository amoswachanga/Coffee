import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from './services/coffee.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  submitResponse: string = null;
  cupsInApp: number = 0;
  cupNgrx$: Observable<{ cups: number }>; // Updated

  constructor(
      private formBuilder: FormBuilder,
      private coffeeService: CoffeeService,
      private store: Store<{ cups: number }>
    ) {

    this.cupNgrx$ = store.pipe(select('cupsStore'));

    this.cupNgrx$.subscribe(val => console.log(val)); // Updated

    }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        // email: [ ''],
        cups: [ this.coffeeService.getCups(), [Validators.required, Validators.min(0), Validators.max(100)] ]
      }
    );
  }

  onSubmit(formResponse: FormGroup) {
    if (formResponse.valid) {
      // ### Update the cups value in the service
      this.coffeeService.setCups(formResponse.value.cups);

      this.cupsInApp = this.coffeeService.getCups();


      // ### Submit Email to Backend
      // const emailToSubmit = {
      //   email: formResponse.value.email
      // };
      // this.coffeeService.submitEmailForm(emailToSubmit).subscribe(successMessage => {
      //   console.log(successMessage);
      //   this.submitResponse = successMessage.response;

      //   // Other Samples
      //   // this.submitResponse = (<{response: string}>successMessage).response;
      //   // this.submitResponse = (successMessage as { response: string }).response;
      // }, failureMessage => {
      //   console.log(failureMessage);
      //   this.submitResponse = failureMessage.response;
      // });

    } else {
      console.error("Please provide all required values");
      this.submitResponse = "Please provide all required values";
    }
  }

  addCup() {
    this.store.dispatch(increment);
  }

  removeCup() {
    this.store.dispatch(decrement);
  }

  reset() {
    this.store.dispatch(reset);
  }


}



      // REF: ### Dispatch an action with a payload
      // this.store.dispatch({ type: '[Cups] Increment'});