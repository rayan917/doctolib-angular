import { NgModule } from '@angular/core';
import { HighlightAppointmentDirective } from './highlight-appointment.directive';

@NgModule({
  declarations: [
  HighlightAppointmentDirective
  ],
  exports: [
    HighlightAppointmentDirective
  ],
})
export class DirectiveModule { }