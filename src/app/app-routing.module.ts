import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared_component/dashboard/dashboard.component';
import { HeaderComponent } from './shared_component/header/header.component';
import { FooterComponent } from './shared_component/footer/footer.component';

const routes: Routes = [
  {path :'dashboard' , component:DashboardComponent},
  {path :'header' , component:HeaderComponent},
  {path :'footer' , component:FooterComponent},
  {path :'', redirectTo:'dashboard' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
