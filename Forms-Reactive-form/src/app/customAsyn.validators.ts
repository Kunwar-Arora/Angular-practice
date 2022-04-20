import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

//* I am using these another class for validators to clean my code 
export class CustomValidators{
    //* Async validators
  static forbiddenEmails(): AsyncValidatorFn{
    return (control: AbstractControl): Promise<{[s: string]: boolean} | null> | Observable<{[s: string]: boolean} | null> => {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test@test.com'){
            resolve({'emailIsForbidden': true});
          }
          else{
            resolve(null);
          }
        },2000)
      });
      return promise;
    }
  }
}