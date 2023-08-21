import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BulkMeterComponent} from "./bulk-meter/bulk-meter.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'bulk', component: BulkMeterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
