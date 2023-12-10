import { NgModule } from '@angular/core';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { DatePipe } from '@angular/common';
import { AvailableStatusPipe } from './available-status.pipe';

@NgModule({
  declarations: [
    CustomDateFormatPipe,
    AvailableStatusPipe
    
  ],
  exports: [
    CustomDateFormatPipe,
    AvailableStatusPipe
   
  ],
  providers: [DatePipe],
})
export class PipesModule { }