import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './customAsyn.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-approach';

  genders = ['Male', 'Female', 'Others'];
  
  forbiddeUserNames = ['Chris', 'Matt'];
  signupFrom!: FormGroup;

  obj = {
    user: 'blaa',
    data: 55
  }
  ngOnInit(){
    this.signupFrom = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [CustomValidators.forbiddenEmails()]),
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });

    // this.signupFrom.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )

    // this.signupFrom.get('userData.username')!.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    
    // this.signupFrom.get('userData.username')!.statusChanges.subscribe(
    //   (status) => console.log(status)
    // )
  
    
  }

  submit(){
    console.log(this.signupFrom);
  };
  

  addHobby(){
    //* every time we addHobby() btn we push a null value i.e. is control to array  
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupFrom.get('hobbies')).push(control);

    //* it will log an array of formArray controls which also holds values 
    console.log((<FormArray>this.signupFrom.get('hobbies')).controls);
  }
  getHobbiesArray(){
    return (<FormArray>this.signupFrom.get('hobbies')).controls;
  }

  //* Making Own Validators
  forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
    
    if(this.forbiddeUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    } else{
      return null;
    }
    
    //* return (this.forbiddeUserNames.indexOf(control.value)) ? {'nameIsForbidden': true} : null;
  } 

  
  

}
