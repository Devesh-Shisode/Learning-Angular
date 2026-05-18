import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UnitMetadata } from '../models/cv.models';
import { CvService } from './cv.service';

@Injectable({ providedIn: 'root' })
export class UnitConverterService {
  private unitsCache: UnitMetadata[] | null = null;

  constructor(private cvService: CvService) {}

  getUnits(): Observable<UnitMetadata[]> {
    if (this.unitsCache) return of(this.unitsCache);
    return new Observable(observer => {
      this.cvService.getUnits().subscribe(units => {
        this.unitsCache = units;
        observer.next(units);
        observer.complete();
      }, err => observer.error(err));
    });
  }
}
