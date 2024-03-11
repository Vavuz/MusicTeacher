import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'app-home', component: HomeComponent },
    { path: 'app-services', component: ServicesComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: '',   redirectTo: '/app-home', pathMatch: 'full' },
];