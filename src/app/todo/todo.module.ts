import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { AddedittodoComponent } from "../addedittodo/addedittodo.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { FilterCompletedPipe } from '../pipes/filter-completed.pipe';
import { TodoRoutingModule } from "./todo-routing.module";
 


@NgModule({
  declarations :[
    TodoComponent,
    AddedittodoComponent,
    FilterCompletedPipe,
  ],
  exports: [TodoComponent],
  imports :[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    TodoRoutingModule
    
  ],
  providers : [],

})

export class TodoModule{
  constructor(){
    console.log('TodoModule called');
    
  }
}