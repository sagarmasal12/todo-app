import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Event/home/home.component';
import { EventComponent } from './pages/Event/event.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:'event-task',
        component:EventComponent
    }
];
