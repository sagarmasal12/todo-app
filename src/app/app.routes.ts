import { Routes } from '@angular/router';
<<<<<<< HEAD
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
=======
import { WatertaxTypeComponent } from './pages/watertax-type/watertax-type.component';
import { WatertaxFormComponent } from './pages/watertax-form/watertax-form.component';
import { WaterTaxComponent } from './pages/water-tax/water-tax.component';
import { ViewpageComponent } from './pages/viewpage/viewpage.component';
import { EditpageComponent } from './pages/editpage/editpage.component';

export const routes: Routes = [
    {
        path:'',
        component:WatertaxTypeComponent
    },
    {
        path:"watertax-type",
        component:WatertaxTypeComponent
    },
    {
        path:"watertax-form",
        component:WatertaxFormComponent
    },
    {
        path:"viewpage/:id",
        component:ViewpageComponent
    },
    {
        path:"editpage",
        component:EditpageComponent
>>>>>>> view-watertax
    }
];
