import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { 
    
  }
  
  getPosts(limit?:number){
    let {api} = environment
    if(limit){
      api += `/posts?limit=${limit}`
    }else{
      api += '/posts';

    }

    return this.http.get<Post[]>(api)
  }

  getThemes(){
    const {api} = environment
    return this.http.get<Theme[]>(`${api}/themes`)
  }
}
