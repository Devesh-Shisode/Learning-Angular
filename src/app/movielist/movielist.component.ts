import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  constructor() { }

   movies: any[] = [];
  pagedMovies: any[] = [];
  page = 0;
  size = 10;
  searchText = '';

  ngOnInit() {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        this.movies = data.results;
        this.updatePage();
      });
  }

  updatePage() {
    let filtered = this.movies.filter(m =>
      m.name.first.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.pagedMovies = filtered.slice(this.page * this.size, (this.page + 1) * this.size);
  }

  nextPage() { this.page++; this.updatePage(); }
  prevPage() { this.page--; this.updatePage(); }

}
