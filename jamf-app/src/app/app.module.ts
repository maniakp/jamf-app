import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { Step1Component } from './pages/create-new-user-profile/step1/step1.component';
import { Step2Component } from './pages/create-new-user-profile/step2/step2.component';
import { Step3Component } from './pages/create-new-user-profile/step3/step3.component';
import { CreateNewUserProfileComponent } from './pages/create-new-user-profile/create-new-user-profile.component';
import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    CreateNewUserProfileComponent,
    CustomStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    CdkStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
