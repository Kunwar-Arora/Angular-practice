import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-approach',
  templateUrl: './template-approach.component.html',
  styleUrls: ['./template-approach.component.css']
})
export class TemplateApproachComponent implements OnInit {

  @ViewChild('form') signUpForm!: NgForm;

  submitted = false;
  genders = ['Male', 'Female', 'Other'];
  defaultValues = {
    gender: 'Male',
    projectStatus: 'stable'
  }
  data = {
    username:'',
    userEmail:'',
    userGender:'',
    projectName:'',
    projectDetails:'',
    projectStatus:''
  }
  constructor() { }

  ngOnInit(): void {
  };
  setValue(){
    this.signUpForm.form.patchValue({
      userData:{
        gender:'Male',
      },
      projectData:{
        projectStatus:'stable'
      }
    });
  }
  onSubmit(){
    this.data.username = this.signUpForm.value.userData.username;
    this.data.userEmail = this.signUpForm.value.userData.email;
    this.data.userGender = this.signUpForm.value.userData.gender;
    this.data.projectName = this.signUpForm.value.projectData.projectName;
    this.data.projectDetails = this.signUpForm.value.projectData.projectDetails;
    this.data.projectStatus = this.signUpForm.value.projectData.projectStatus;
    this.submitted = true;
    this.signUpForm.reset();
    this.setValue();
  }

}
