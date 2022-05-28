import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  localItem: any;
  todos: Todo[];
  constructor() { 
    this.localItem = localStorage.getItem("data");
    if(this.localItem==null)
      this.todos = [];
    else
    this.todos = JSON.parse(this.localItem);
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("data",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("data",JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("data",JSON.stringify(this.todos));
  }

}
