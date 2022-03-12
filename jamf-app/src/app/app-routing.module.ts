import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewUserProfileComponent } from './pages/create-new-user-profile/create-new-user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewUserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
