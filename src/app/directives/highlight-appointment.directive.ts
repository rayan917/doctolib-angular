import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlightAppointment]'
})
export class HighlightAppointmentDirective {
  @Input() set appHighlightAppointment(dateString: string | undefined) {
    if (dateString) {
      const currentDate = new Date();
      const appointmentDate = new Date(dateString);

      // Vérifiez si la date est valide
      if (!isNaN(appointmentDate.getTime())) {
        // Vérifiez si les dates sont dans la même semaine
        if (this.isSameWeek(currentDate, appointmentDate)) {
          this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
        } else {
          this.renderer.removeStyle(this.el.nativeElement, 'background-color');
        }
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Fonction pour vérifier si deux dates sont dans la même semaine
  private isSameWeek(date1: Date, date2: Date): boolean {
    const oneDay = 24 * 60 * 60 * 1000; // heures * minutes * secondes * millisecondes
    const diffDays = Math.abs(Math.round((date1.getTime() - date2.getTime()) / oneDay));

    console.log(diffDays < 7 && date1.getDay() === date2.getDay())
    return diffDays < 7 && date1.getDay() === date2.getDay();
  }
}
