import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http :HttpClient) { }
    apiURL ='http://localhost:3000/todos'
    apiUrl2 ='https://jsonplaceholder.typicode.com/posts'

     getPosts(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl2);
  }
    
    getTodos() : Observable <Todo[]>{
      return   this._http.get<Todo[]>(this.apiURL)
    }

    addTodo (todo : Todo) : Observable<Todo>{
          return  this._http.post<Todo>(this.apiURL,todo)
    }

    deleteTodo(id : number): Observable<void>{
        return this._http.delete<void>(`${this.apiURL}/${id}`);
    }

    updaetTodo(todo : Todo) : Observable<Todo>{
      return this._http.put<Todo>(`${this.apiURL}/${todo.id}`,todo)
    }

    getTodoById (id : number) : Observable<Todo>{
      return this._http.get<Todo>(`${this.apiURL}/${id}`)
    }
}
