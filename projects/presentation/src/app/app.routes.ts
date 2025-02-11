import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'slideshow',
        loadComponent: () => 
            import('../../../slideshow/src').then(m => m.AppComponent)
    },
    {
        path: '',
        component: HomeComponent
    },
];