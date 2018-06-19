import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { PetitionsComponent } from './petitions/petitions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CandidateFrontpgComponent } from './candidates/candidate-frontpg/candidate-frontpg.component';
import { PetitionsFrontpgComponent } from './petitions/petitions-frontpg/petitions-frontpg.component';
import { CandidatesListComponent } from './candidates/candidates-list/candidates-list.component';
import { CandidatesItemComponent } from './candidates/candidates-list/candidates-item/candidates-item.component';
import { SitefeedComponent } from './homepage/sitefeed/sitefeed.component';
import { SitefeedelementComponent } from './homepage/sitefeed/sitefeedelement/sitefeedelement.component';
import { PetitionsListComponent } from './petitions/petitions-list/petitions-list.component';
import { PetitionsItemComponent } from './petitions/petitions-list/petitions-item/petitions-item.component';
import { StatusUpdateComponent } from './homepage/status-update/status-update.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'candidates', component: CandidatesComponent},
  { path: 'petitions', component: PetitionsComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    PetitionsComponent,
    HomepageComponent,
    NavigationComponent,
    CandidateFrontpgComponent,
    PetitionsFrontpgComponent,
    CandidatesListComponent,
    CandidatesItemComponent,
    SitefeedComponent,
    SitefeedelementComponent,
    PetitionsListComponent,
    PetitionsItemComponent,
    StatusUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
