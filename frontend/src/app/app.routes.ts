import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Forum } from './pages/forum/forum';
import { ProfileComplete } from './pages/profile/profile-body';
import { Social } from './pages/social/social';
import { FilmDetail } from './pages/film-detail/film-detail';

export const routes: Routes = [
  { path: 'login', component: Welcome },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'forum', component: Forum },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile/:username', component: ProfileComplete },
  { path: 'social', component: Social },
  { path: 'film-details/:id', component: FilmDetail },
];
