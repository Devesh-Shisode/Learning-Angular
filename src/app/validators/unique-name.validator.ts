import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of, timer, switchMap, map, catchError } from "rxjs";
import { CvService } from "../servicces/cv.service";

@Injectable({ providedIn: 'root' })
export class UniqueCvNameValidator implements AsyncValidator {
  constructor(private cvService: CvService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;
    if (!value) return of(null);
    // debounce to avoid pinging server on every keystroke
    return timer(350).pipe(
      switchMap(() => {
        // allow caller to pass BU via control.root? We'll attempt to read it.
        let bu = null as any;
        try { bu = control.parent?.get('bu')?.value; } catch { bu = null; }
        return this.cvService.isNameTaken(value, bu || '');
      }),
      map(isTaken => (isTaken ? { nameTaken: true } : null)),
      catchError(() => of(null))
    );
  }
}