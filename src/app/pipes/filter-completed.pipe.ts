import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todos';

@Pipe({
  name: 'filterCompleted'
})
export class FilterCompletedPipe implements PipeTransform {

  transform(todo: Todo[], value : boolean): Todo[] {
    return todo.filter((res)=>res.completed===value)
  }

}
