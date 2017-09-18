import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-components/home.component';
import { PageNotFoundComponent} from './general-components/not-found/not-found.component';

const appRoutes: Routes = [
  { 
    path: "", 
    component: HomeComponent,
  },
  { 
    path: "home", 
    component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

export const AppRoutingProviders: any[] = [HomeComponent];
export const AppRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);
