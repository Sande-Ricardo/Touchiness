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
        path: 'projects',
        loadChildren: () =>
            import('./modules/projects/projects.module').then(m => m.ProjectsModule)
    }
];
