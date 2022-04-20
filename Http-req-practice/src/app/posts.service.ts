import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService{

    error = new Subject<string>();
    constructor(private http: HttpClient){}

    createAndStorePosts(title: string, content: string){
        const postData: Post = {title: title, content: content};
        this.http.post<{name: string}>('https://ng-http-proj1-default-rtdb.firebaseio.com/posts.json', 
        postData,

        //? Observing Responses we get 
        //     {
        //     //! Example 1
        //         //* can be usefull sometime if you want to check or display what type of reponse property you want 
        //         //* it will change reponseData in subscribe according to you put propertyName [observe: 'PropertyName']
        //         observe: 'events'
        //     }
        
        // ).pipe(tap(event => {
        //     if(event.type === HttpEventType.Sent){
        //         console.log('sending Data')
        //     }
        // }))
        // .subscribe(
        //     responseData => {
        //         console.log(responseData);
        //     },
        //     error => {
        //         this.error.next(error.message)
        //     }
        // );

            {
                //! Example 2 
                //* can be usefull sometime if you want to check or display what type of reponse property you want 
                //* it will change reponseData in subscribe according to you put propertyName [observe: 'PropertyName']
                observe: 'response'
            }
        
        )
        //* since it is not inappropiate to subscribe the observable we get as like in case of get method
        //* you can subscribe it here [but in many cases you will have only choice to subscribe in app.component ]  
        .subscribe(
            responseData => {
                console.log(responseData.body);
            },
            error => {
                this.error.next(error.message)
            }
        );
    };

    onfetchData(){

        // //* adding multiple params (You can also add multiple headers like thisway)
        // let searchParams = new HttpParams();
        // searchParams = searchParams.append('print', 'pretty');
        // searchParams = searchParams.append('custom', 'key'); 

        return this.http.get<{ [key: string]: Post}>('https://ng-http-proj1-default-rtdb.firebaseio.com/posts.json',
        //* Setting an custom header or authorization header(if in case backend server needed)
        {
            //* headers: new HttpHeaders({ KEY VALUE PAIRS can add multiple headers }) 
            headers: new HttpHeaders({'Custom-header': 'Hello'}), 

            //* Adding Parameters (add only those which are suppported by your backend server)
            params: new HttpParams().set('print', 'pretty') 
            //* URl?print=pretty 

            // //* Only for multiple params 
            // params: searchParams
        }   
        
        )
        .pipe(
          map(responseData => {
            const array: Post[] = [];
            for( const key in responseData){
              if(responseData.hasOwnProperty(key)){
                array.push({ ...responseData[key], id: key });
              };
            };
            return array;
          }),
          //* (optional) when you get an error in here during the pipe method
          catchError(errorResponse => {
            // Some generic error task [LIKE send this error to analytics server etc] not in your UI
            return throwError(errorResponse);
          }) 
        );



        //* need to subscribe these observable we get from get method we will subscribe in app.component
        //* As it is inappropiate/imposible to subscribe it in here  
    // .subscribe(
    //   posts => {
    //     // console.log(posts);
    //   }
    // );
    };

    onDeleteData(){
        return this.http.delete('https://ng-http-proj1-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events'
            }
        ).pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Sent){
                // ...
            }
            if( event.type === HttpEventType.Response){
                console.log(event.body);
            }
        }));
        //* as this delete method also gives Observable so subscribe it in app.compoment 
    }
}