import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // {path:'',         component:HomeComponent},
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
