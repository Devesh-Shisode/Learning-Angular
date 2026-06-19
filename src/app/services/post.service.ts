// // post.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import {
//   debounceTime,
//   distinctUntilChanged,
//   switchMap,
//   map,
// } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class PostService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//   private searchSubject = new BehaviorSubject<string>('');
//   search$ = this.searchSubject.asObservable();

//   constructor(private http: HttpClient) {}

//   getPosts(): Observable<any[]> {
//     this.search$.subscribe(() => {});
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   setSearchTerm(term: string) {
//     this.searchSubject.next(term);
//   }

//   sortPosts(posts: any[], key: string, direction: boolean): any[] {
//     console.log(posts);

//     return [...posts].sort((a, b) => {
//       if (a[key] < b[key]) return direction ? -1 : 1;
//       if (a[key] > b[key]) return direction ? 1 : -1;
//       return 0;
//     });
//   }

//   searchPosts(): Observable<any[]> {
//     return this.search$.pipe(
//       debounceTime(400),
//       distinctUntilChanged(),
//       switchMap((term) =>
//         this.getPosts().pipe(
//           map((posts) =>
//             posts.filter((post) =>
//               post.title.toLowerCase().includes(term.toLowerCase())
//             )
//           )
//         )
//       )
//     );
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  shareReplay,
  tap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private searchSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  /**
   * API Call Only Once
   */
  private posts$ = this.http
    .get<any[]>(this.apiUrl)
    .pipe( tap(() => console.log('API HIT')),shareReplay(1));

  /**
   * Search Input
   */
  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }

  /**
   * Search + Filter
   */
  searchPosts(): Observable<any[]> {
    return combineLatest([
      this.posts$,
      this.searchSubject.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ),
    ]).pipe(
      map(([posts, term]) => {
        if (!term.trim()) {
          return posts;
        }

        return posts.filter((post) =>
          post.title
            .toLowerCase()
            .includes(term.toLowerCase())
        );
      })
    );
  }

  /**
   * Sorting
   */
  sortPosts(
    posts: any[],
    key: string,
    ascending: boolean
  ): any[] {
    return [...posts].sort((a, b) => {
      if (a[key] < b[key]) return ascending ? -1 : 1;
      if (a[key] > b[key]) return ascending ? 1 : -1;
      return 0;
    });
  }
}