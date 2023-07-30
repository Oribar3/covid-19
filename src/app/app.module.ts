import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { LoadingLineComponent } from './core/components/loading-line/loading-line.component';
import { TermsComponent } from './core/components/terms/terms.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AnchorBarComponent } from './shared/components/anchor-bar/anchor-bar.component';
import { DisplayCardsComponent } from './shared/components/display-cards/display-cards.component';
import { VerifiedComponent } from './shared/components/first-section/verified/verified.component';
import { SickPerLocationComponent } from './shared/components/first-section/sick-per-location/sick-per-location.component';
import { HardPatientsComponent } from './shared/components/first-section/hard-patients/hard-patients.component';
import { VaccinatedComponent } from './shared/components/first-section/vaccinated/vaccinated.component';
import { DeadPatientsPerDayComponent } from './shared/components/first-section/dead-patients-per-day/dead-patients-per-day.component';
import { TestsTakenComponent } from './shared/components/first-section/tests-taken/tests-taken.component';
import { Summary7VerifiedComponent } from './shared/components/summary7days/summary7-verified/summary7-verified.component';
import { Summary7SevereComponent } from './shared/components/summary7days/summary7-severe/summary7-severe.component';
import { Summary7DeceasedComponent } from './shared/components/summary7days/summary7-deceased/summary7-deceased.component';
import { Summary7TestsComponent } from './shared/components/summary7days/summary7-tests/summary7-tests.component';
import { LinksComponent } from './shared/components/links/links.component';
import { HospitalizationStatusDailyComponent } from './shared/components/main-charts/hospitalization-status-daily/hospitalization-status-daily.component';
import { VerifiedKidsDailyComponent } from './shared/components/main-charts/verified-kids-daily/verified-kids-daily.component';
import { VaccinationStatusAgeComponent } from './shared/components/main-charts/vaccination-status-age/vaccination-status-age.component';
import { HospitalBedsOccupiedComponent } from './shared/components/main-tables/hospital-beds-occupied/hospital-beds-occupied.component';
import { AbroadDiseaseComponent } from './shared/components/main-tables/abroad-disease/abroad-disease.component';
import { CitiesDiseaseComponent } from './shared/components/main-tables/cities-disease/cities-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LoadingLineComponent,
    TermsComponent,
    DashboardComponent,
    AnchorBarComponent,
    DisplayCardsComponent,
    VerifiedComponent,
    SickPerLocationComponent,
    HardPatientsComponent,
    VaccinatedComponent,
    DeadPatientsPerDayComponent,
    TestsTakenComponent,
    Summary7VerifiedComponent,
    Summary7SevereComponent,
    Summary7DeceasedComponent,
    Summary7TestsComponent,
    LinksComponent,
    HospitalizationStatusDailyComponent,
    VerifiedKidsDailyComponent,
    VaccinationStatusAgeComponent,
    HospitalBedsOccupiedComponent,
    AbroadDiseaseComponent,
    CitiesDiseaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
