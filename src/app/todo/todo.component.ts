import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todos';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    newTitle : string="";
    newTodoCompleted : boolean= false
    Todos$! : Observable<Todo[]>

  constructor(private _todo : TodoService , private _toastrService : ToastrService) {
    
   }

  ngOnInit(): void {
     
   this.getTodos()
  }

   getTodos(){
    this._todo.getTodos().subscribe((res)=>{
      console.log(res);
    })
  this.Todos$ = this._todo.getTodos()
    }

    addTodo() : void{
          const newTodo : Todo={
            id : new Date().getTime(),
            title :this.newTitle,
            completed : this.newTodoCompleted,
            CreatedAt : new Date()

          }
          this._todo.addTodo(newTodo).subscribe((res)=>{
            console.log('new todo added',res);
            this.getTodos()
            this._toastrService.success('To do added successfully !','success')
          })
    }
   

    deletetodo(id : number) : void{
        this._todo.deleteTodo(id).subscribe(()=>{
          this.getTodos()
        })
        this._toastrService.warning('To-do Deleted successfully !','Deleted')
    }
    toggleCompletion(todo :Todo) : void{
      debugger
       todo.completed=!todo.completed
       this._todo.updaetTodo(todo).subscribe
    }
}
