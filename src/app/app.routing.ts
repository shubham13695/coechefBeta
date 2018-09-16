
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/PageNotFoundComponent/PageNotFound.component';
import { ContestComponent } from '../component/contest/contest.component';
import { AboutUsComponent } from '../component/aboutus/aboutus.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contests/:contestcode' , component: ContestComponent},
    { path: 'contests/:contestcode/problems/:problemcode' , component: ContestComponent},
    { path: 'contact-us' , component: AboutUsComponent},
    { path: '**' , component: PageNotFoundComponent},
  ];

