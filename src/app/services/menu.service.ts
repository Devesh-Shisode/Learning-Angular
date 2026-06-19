// menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiMenuItem {
  label: string;
  path: string;
  component: string; // name string from API
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private http: HttpClient) {}
  getMenu(): Observable<ApiMenuItem[]> {
    return this.http.get<ApiMenuItem[]>('http://localhost:4000/menu');
  }
}
