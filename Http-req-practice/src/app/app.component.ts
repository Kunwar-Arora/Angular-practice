import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http-req-deep';
  @ViewChild('postForm') data!: NgForm;
  
  errorsub!: Subscription;
  loadedPost: Post[] = [];
  error: any = null;

  isFetching = false;

  ngOnInit(){
    this.errorsub = this.postsService.error.subscribe(
      error => { this.error = error;}
    );
    this.fetchData();
    
  }
  constructor(private http: HttpClient, private postsService: PostsService){}

  //* Sendig the data to server 
  onCreatePost(postData: Post){
    // send http request
    this.postsService.createAndStorePosts(postData.title, postData.content);
    this.data.reset();
  };

  onFetchPosts(){
    this.fetchData();
  }

  //* Deleting all data from the server 
  onClearPosts(){
    this.postsService.onDeleteData().subscribe(
      () => { this.loadedPost = [];}
    );
  };

  //* fetching/recieving the data from server 
  private fetchData(){
    this.isFetching = true;
    this.postsService.onfetchData().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPost = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.error.error;
        
      }
    );
  };

  handlingError(){
    this.error = null;
  }

  ngOnDestroy(){
    this.errorsub.unsubscribe();
  }

}
