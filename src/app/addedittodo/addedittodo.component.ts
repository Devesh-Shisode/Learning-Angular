import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todos';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponnetDeactivate } from '../guards/candeactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addedittodo',
  templateUrl: './addedittodo.component.html',
  styleUrls: ['./addedittodo.component.css'],
})
export class AddedittodoComponent implements OnInit,CanComponnetDeactivate {
  todo: Todo = { id: 0, title: '', completed: false, CreatedAt: new Date() };
  isFormDirty : boolean = false
  isEditMode: boolean = false;
  constructor(
    
    private _toastrService: ToastrService,
    private _todoService: TodoService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute
  ) {}
  canDeactivate (): boolean{
   if(this.isFormDirty){
    return confirm('you have unsaved changes. Do yo really want to leave') 
   }
    return true
  }

  ngOnInit(): void {
    const todoId = this._activatedRoute.snapshot.params['id'];
    console.log(todoId);
    
    if(todoId){
        this.isEditMode = true;
        this._todoService.getTodoById(todoId).subscribe((todo)=>{
          this.todo=todo
        })
    }
  }

    onFormChange (): void{
        this.isFormDirty =true
    }
  saveTodo() {
    if (this.isEditMode) {
      this._todoService.updaetTodo(this.todo).subscribe(()=>{
        this._toastrService.success('To do Updated successfully !');
        this.isFormDirty =false;
        this._router.navigate(['/todo']); //for programatically navigate
      })
    } else {
      this.todo.id = new Date().getTime();
      this._todoService.addTodo(this.todo).subscribe(() => {
        this._toastrService.success('To do added successfully !', 'success');
        this.isFormDirty =false;
        this._router.navigate(['/todo']); //for programatically navigate
      });
    }
  }
}
