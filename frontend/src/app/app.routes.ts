import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Catalog } from './pages/catalog/catalog';
import { Forum } from './pages/forum/forum';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'catalog', component: Catalog },
  { path: 'forum', component: Forum },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
