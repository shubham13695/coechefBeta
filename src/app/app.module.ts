import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { Authentication } from '../service/authentication.service';
import { AppComponent } from './app.component';
import { AppSettings } from '../config/app.config';
import { AppRoutes } from './app.routing';

import { HomeModule } from '../component/home/home.module';

import { PageNotFoundModule } from '../component/PageNotFoundComponent/PageNotFound.module';
import { ContestModule } from '../component/contest/contest.module';
import { AboutUsModule } from '../component/aboutus/aboutus.module';
import { TestModule } from '../component/Test/test.module';
import { ProblemModule } from '../component/problem/problem.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    HomeModule,
    PageNotFoundModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ContestModule,
    TestModule,
    AboutUsModule,
    ProblemModule
  ],
  providers: [Authentication, AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
