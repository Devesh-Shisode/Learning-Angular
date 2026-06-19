// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { PostService } from '../services/post.service';
// import { Subscription } from 'rxjs';
 

// @Component({
//   selector: 'app-serachsort',
//   templateUrl: './serachsort.component.html',
//   styleUrls: ['./serachsort.component.css'],
// })
// export class SerachsortComponent implements OnInit, OnDestroy {
//   posts: any[] = [];
//   filteredPosts: any[] = [];
//   subscription!: Subscription;
//   sortDirection: boolean = true;
//   sortKey: string = 'id';
//   currentPage = 1;
//   itemsPerPage = 10;
//   unsubscribe : any

//     users = [{name: 'Bhanu'}, {name: 'Devesh'}];
//   selectedUser: any;

 
//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.postService.getPosts().subscribe((data) => {
//       this.posts = data;
//       this.filteredPosts = [...this.posts];
//       console.log(this.filteredPosts);
//     });

//     this.subscription = this.postService.searchPosts().subscribe((data) => {
//       this.filteredPosts = data;
//       this.currentPage = 1;
//       console.log(
//         'subscription====>',
//         this.subscription,
//         'filtered data ----->',
//         this.filteredPosts
//       );
//     });
//   }
//    selectUser(user: any) { this.selectedUser = user; }
//   onSearch(term: string) {
//      this.postService.setSearchTerm(term.trim());
//   }

//   get paginatedPosts() {
//     const start = (this.currentPage - 1) * this.itemsPerPage;
//     return this.filteredPosts.slice(start, start + this.itemsPerPage);
//   }

//   totalPages() : number {
//     return Math.ceil(this.filteredPosts.length / this.itemsPerPage);
//   }

//   sortPosts(key: string) {
//     console.log(key);
//     this.sortKey = key;
//     this.sortDirection = !this.sortDirection;
//     this.filteredPosts = this.postService.sortPosts(
//       this.filteredPosts,
//       this.sortKey,
//       this.sortDirection
//     );
//   }

//   ngOnDestroy(): void {

//     this.unsubscribe=this.subscription.unsubscribe();
//     console.log("Unsubscribed------->",this.unsubscribe)
//   }
 

// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-serachsort',
  templateUrl: './serachsort.component.html',
  styleUrls: ['./serachsort.component.css'],
})
export class SerachsortComponent implements OnInit, OnDestroy {

  filteredPosts: any[] = [];

  subscription!: Subscription;

  sortDirection = true;
  sortKey = 'id';

  currentPage = 1;
  itemsPerPage = 10;

  users = [
    { name: 'Bhanu' },
    { name: 'Devesh' }
  ];

  selectedUser: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {

    this.subscription = this.postService
      .searchPosts()
      .subscribe((data) => {

        this.filteredPosts = data;
        this.currentPage = 1;

        console.log('Filtered Posts:', this.filteredPosts);
      });
  }

  selectUser(user: any): void {
    this.selectedUser = user;
  }

  onSearch(term: string): void {
    this.postService.setSearchTerm(term);
  }

  get paginatedPosts(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;

    return this.filteredPosts.slice(
      start,
      start + this.itemsPerPage
    );
  }

  totalPages(): number {
    return Math.ceil(
      this.filteredPosts.length / this.itemsPerPage
    );
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  sortPosts(key: string): void {

    this.sortKey = key;
    this.sortDirection = !this.sortDirection;

    this.filteredPosts = this.postService.sortPosts(
      this.filteredPosts,
      key,
      this.sortDirection
    );
  }

  ngOnDestroy(): void {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    console.log('Subscription Destroyed');
  }
}