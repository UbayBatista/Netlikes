import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Forum } from './pages/forum/forum';
import { ProfileComplete } from './pages/profile/profileBody';
import { Social } from './pages/social/social';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'forum', component: Forum },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile/:username', component: ProfileComplete },
  { path: 'social', component: Social },
];
