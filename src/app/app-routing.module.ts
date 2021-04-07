import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'welcome/settings',
    loadChildren: () =>
      import(/* webpackChunkName: "settings" */ './settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'welcome/settings/profile',
    loadChildren: () =>
      import(/* webpackChunkName: "profile" */ './profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
