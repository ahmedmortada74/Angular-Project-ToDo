import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  Title :string ="Welcome to Todo List App";
  ImageLink :string ="https://th.bing.com/th/id/OIF.oXWyiWuleeIx1mL0se8shA?rs=1&pid=ImgDetMain"
  todos :ToDo[] =[];
  newToDo :ToDo ={} as ToDo;
  constructor (private todoService :ToDoService){}
  ngOnInit(): void {
   this.getToDos()
  }
  getToDos(){
    this.todoService.getTodos().subscribe(x =>{
      this.todos = x ;
    })
  }
  createToDo() : void {
    const newToDo1 = {id :this.newToDo.id , title :this.newToDo.title , completed : false}
    this.newToDo =newToDo1 ;
    this.todoService.createToDo(newToDo1).subscribe(todo =>{
      this.todos.push(todo);
    });
  }

  deleteToDo(todoId :string) :void{
    this.todoService.deleteToDo(todoId).subscribe(()=>{
      this.todos =this.todos.filter(todo => todo.id !==todoId)
    })
  } 

}
