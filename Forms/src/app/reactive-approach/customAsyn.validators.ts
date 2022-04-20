import { AsyncValidatorFn, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
  //* Async validators
  static existingProject(): AsyncValidatorFn{
    return (control: AbstractControl): Promise<{[s: string]: boolean} | null> | Observable<{[s: string]: boolean} | null> => {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test'){
            resolve({'ProjectAlreadyExist': true});
          }
          else{
            resolve(null);
          }
        },2000)
      });
      return promise;
    };
  };

}
