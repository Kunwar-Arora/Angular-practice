import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //* Only for method 2 
  @ViewChild('form') signUpFrom!: NgForm;
  defaultQues = 'pet';
  answer = '';

  genders = ['Male', 'Female', 'Others'];


  user = {
    name: '',
    email: '',
    secretQues: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';

    //* Method 1 
    // this.signUpFrom.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'Male'
    // });

    //* Method 2
    this.signUpFrom.form.patchValue({
      userData: {
        username: suggestedName
      },
      gender: 'Male'
    }) 
  };

  //! only for method 1 
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  //! only for method 2
  onSubmit(){
    this.submitted = true;
    this.user.name = this.signUpFrom.value.userData.username;
    this.user.email = this.signUpFrom.value.userData.email;
    this.user.secretQues = this.signUpFrom.value.secret;
    this.user.answer = this.signUpFrom.value.answer;
    this.user.gender = this.signUpFrom.value.gender;

    this.signUpFrom.reset();
  } 
}
