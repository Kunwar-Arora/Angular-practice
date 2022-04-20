import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customAsyn.validators';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

  userForm!: FormGroup;
  submitted: boolean = false;

  genders = ['Male', 'Female', 'Others'];

  forBiddenNames: string[] = ['Chris', 'Matt'];
  constructor() { }

  formData= {
    userName: '',
    userEmail:'',
    userGender:'',
    projectName:'',
    projectDetails:'',
    projectStatus:'',
  };

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.forBiddenUserName.bind(this)]),
        'userEmail': new FormControl(null, [Validators.required, Validators.email]),
        'userGender': new FormControl('Male')
      }),
      'projectData': new FormGroup({
        'projectName': new FormControl(null, Validators.required, [CustomValidators.existingProject()]),
        'projectDetails': new FormControl(null, Validators.required),
        'projectStatus': new FormControl('stable', Validators.required  )
      })
    })
  };

  //* Making Own Validators
  forBiddenUserName(control: FormControl):{[key:string]: true} | null{
    return this.forBiddenNames.indexOf(control.value) !== -1 ? {'NameIsForbidden': true} : null;
  };


  onSubmit(){
    this.submitted = true;
    this.formData.userName = this.userForm.value.userData.userName;
    this.formData.userEmail = this.userForm.value.userData.userEmail;
    this.formData.userGender = this.userForm.value.userData.userGender;
    this.formData.projectName = this.userForm.value.projectData.projectName;
    this.formData.projectDetails = this.userForm.value.projectData.projectDetails;
    this.formData.projectStatus = this.userForm.value.projectData.projectStatus;
    this.userForm.reset();
  }
}
