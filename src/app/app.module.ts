import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BenchmarksComponent } from './benchmarks/benchmarks.component';
import { BenchmarkDetailComponent } from './benchmark-detail/benchmark-detail.component';
import { BenchmarkService } from './benchmark.service';
import { BenchmarkSearchComponent } from './benchmark-search/benchmark-search.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    BenchmarksComponent,
    BenchmarkDetailComponent,
    DashboardComponent,
    BenchmarkSearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AsyncLocalStorageModule
  ],
  providers: [BenchmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
