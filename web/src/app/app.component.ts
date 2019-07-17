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
  cupsInApp: number = 0;

  constructor(private formBuilder: FormBuilder, private coffeeService: CoffeeService) {  }

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
      // Update the cups value in the service
      this.coffeeService.setCups(formResponse.value.cups);

      this.cupsInApp = this.coffeeService.getCups();


      // Submit Email to Backend
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





}
