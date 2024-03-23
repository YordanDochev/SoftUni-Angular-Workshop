import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from '../types/post';
import { Theme } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getPosts(limit?: number) {
    let { api } = environment;
    if (limit) {
      api += `/posts?limit=${limit}`;
    } else {
      api += '/posts';
    }

    return this.http.get<Post[]>(api);
  }

  getThemes() {
    const { api } = environment;
    return this.http.get<Theme[]>(`${api}/themes`);
  }

  getTheme(id: string) {
    const { api } = environment;
    return this.http.get<Theme>(`${api}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }
}
