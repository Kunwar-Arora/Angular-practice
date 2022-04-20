import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{

    //* intercept(AnyName: HttpRequest<any>, AnyName: HttpHandler)
    intercept(request: HttpRequest<any>, next: HttpHandler){
        console.log("Your request is On the way!");
        // console.log(request.url);
        // // return next.handle(request);
        

        const modiFiedRequest = request.clone({headers: request.headers.append('Custom-header2', 'xyz')})
        return next.handle(modiFiedRequest);

        // //* Manupulatinng/changing the response data becoz in the end interceptors also sends the observable
        // return next.handle(modiFiedRequest).pipe(tap(event => {
        //     console.log(event);
        //     if(event.type === HttpEventType.Response){
        //         console.log("Response Data: ");
        //         console.log(event.body);
        //     }
        //     if(event.type === HttpEventType.Sent){
        //         console.log("your Request is sent");
        //         console.log(event.type);
        //     }
        // }))
    };
};