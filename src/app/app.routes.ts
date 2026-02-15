import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // {path:'',         component:HomeComponent},
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'project',
        loadChildren: () =>
            import('./modules/project/project.module').then(m => m.ProjectModule)
    }
];
