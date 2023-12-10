import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availableStatus'
})
export class AvailableStatusPipe implements PipeTransform {

  transform(available: boolean): string {
    return available ? 'Disponible' : 'Non disponible';
  }

}
