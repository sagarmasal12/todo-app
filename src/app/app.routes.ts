import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';
import { BirthCertificateComponent } from './Certificates/birth-certificate/birth-certificate.component';
import { NoDuesCertificateComponent } from './Certificates/no-dues-certificate/no-dues-certificate.component';
import { TodoCompontComponent } from './pages/todo-compont/todo-compont.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { AddClientComponent } from './pages/vehicke-parking/add-client/add-client.component';
import { AngularConceptComponent } from './pages/angular-concept/angular-concept.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:'event-task',
        component:EventComponent
    },
    {
        path:'birth-certificate',
        component:BirthCertificateComponent
    },
    {
        path:'No-duesCertificate',
        component:NoDuesCertificateComponent
    },
    {
        path:'to-do',
        component:TodoCompontComponent
    },
    {
        path:'survey',
        component:SurveyComponent
    },
    {
        path:"addclient",
        component:AddClientComponent
    },
    {
        path:"angular-concept",
        component:AngularConceptComponent
    }
];
