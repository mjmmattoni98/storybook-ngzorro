import { NgModule } from '@angular/core';
import { MonitorRoutingModule } from './monitor-routing.component';
import { ChartjsModule } from "@coreui/angular-chartjs";
import { MonitorComponent } from './monitor.component';

@NgModule({
  imports: [MonitorRoutingModule, ChartjsModule],
  exports: [MonitorComponent],
  declarations: [MonitorComponent],
})
export class MonitorModule {}
