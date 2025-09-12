import { Route, RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { AddedittodoComponent } from "../addedittodo/addedittodo.component";
import { NgModule } from "@angular/core";
import { CandeactivateGuard } from "../guards/candeactivate.guard";




const routes: Routes= [
  {path : '', component : TodoComponent},
   {path : 'todo',component : TodoComponent},
    {path :'add-todo',canDeactivate :[CandeactivateGuard],component:AddedittodoComponent},
    {path : 'edit-todo/:id',canDeactivate :[CandeactivateGuard], component :AddedittodoComponent},

];

@NgModule({
   imports : [RouterModule.forChild(routes)],
   exports : [RouterModule]
})

export class TodoRoutingModule {
 constructor(){
    console.log('TodoRoutingModule called');
    
  }
}