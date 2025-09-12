import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoComponent } from './todo.component';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../models/todos';

// Mock TodoService
class MockTodoService {
  getTodos = jasmine.createSpy().and.returnValue(of([{ id: 1, title: 'Test Todo', completed: false, CreatedAt: new Date() }]));
  addTodo = jasmine.createSpy().and.returnValue(of({}));
  deleteTodo = jasmine.createSpy().and.returnValue(of({}));
  updaetTodo = jasmine.createSpy().and.returnValue(of({}));
}

// Mock ToastrService
class MockToastrService {
  success = jasmine.createSpy();
  warning = jasmine.createSpy();
}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: MockTodoService;
  let toastrService: MockToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        { provide: TodoService, useClass: MockTodoService },
        { provide: ToastrService, useClass: MockToastrService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as unknown as MockTodoService;
    toastrService = TestBed.inject(ToastrService) as unknown as MockToastrService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTodos on init', () => {
    spyOn(component, 'getTodos');
    component.ngOnInit();
    expect(component.getTodos).toHaveBeenCalled();
  });

  it('should fetch todos from service', () => {
    component.getTodos();
    expect(todoService.getTodos).toHaveBeenCalled();
  });

  it('should add a new todo and show success toastr', () => {
    component.newTitle = 'New Task';
    component.newTodoCompleted = false;

    component.addTodo();

    expect(todoService.addTodo).toHaveBeenCalled();
    expect(toastrService.success).toHaveBeenCalledWith('To do added successfully !', 'success');
  });

  it('should delete a todo and show warning toastr', () => {
    component.deletetodo(1);

    expect(todoService.deleteTodo).toHaveBeenCalledWith(1);
    expect(toastrService.warning).toHaveBeenCalledWith('To-do Deleted successfully !', 'Deleted');
  });

  it('should toggle completion and update todo', () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false, CreatedAt: new Date() };

    component.toggleCompletion(todo);

    expect(todo.completed).toBeTrue();
    expect(todoService.updaetTodo).toHaveBeenCalledWith(todo);
  });
});
