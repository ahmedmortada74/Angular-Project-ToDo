import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodosComponent } from './Components/todos/todos.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';

export const routes: Routes = [
    {path : '', redirectTo : '/todos', pathMatch : 'full'},
    {path : 'home', component : HomeComponent, title : 'Home'},
    {path : 'todos', component : TodosComponent, title : 'todos'},
    {path : 'todos:id', component : TodoDetailsComponent, title : ' to do Detials'},
    {path : 'contactus', component : ContactusComponent, title : 'Contact Us'},
    {path : 'AboutUs', component : AboutusComponent, title : 'AboutUs'},
    {path : '**', component :NotFoundComponent, title : 'Not Found'},

];
