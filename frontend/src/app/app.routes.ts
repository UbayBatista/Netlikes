import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Forum } from './pages/forum/forum';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forum', component: Forum },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
