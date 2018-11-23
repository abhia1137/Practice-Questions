import {Injectable} from "@angular/core";
 import {HttpClient} from "@angular/common/http";

 
//  import "rxjs/Rx";

 
 @Injectable()
export class PostService{ 
     postsURL = "https://jsonplaceholder.typicode.com/posts"
     constructor(private http: HttpClient) {}

     getPosts()  {
        return this.http.get(this.postsURL)
    
    }

 }
    