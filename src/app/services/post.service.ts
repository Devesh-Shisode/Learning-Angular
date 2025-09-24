// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    this.search$.subscribe(() => {});
    return this.http.get<any[]>(this.apiUrl);
  }

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }

  sortPosts(posts: any[], key: string, direction: boolean): any[] {
    console.log(posts);

    return [...posts].sort((a, b) => {
      if (a[key] < b[key]) return direction ? -1 : 1;
      if (a[key] > b[key]) return direction ? 1 : -1;
      return 0;
    });
  }

  searchPosts(): Observable<any[]> {
    return this.search$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term) =>
        this.getPosts().pipe(
          map((posts) =>
            posts.filter((post) =>
              post.title.toLowerCase().includes(term.toLowerCase())
            )
          )
        )
      )
    );
  }
}
