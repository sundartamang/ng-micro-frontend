import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'slideshow',
        loadComponent: () => import('./app.component').then(m=> m.AppComponent)
    }
];
