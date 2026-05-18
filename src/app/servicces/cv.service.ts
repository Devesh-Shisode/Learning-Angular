import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CalculatedVariableDTO, FormulaValidationResponse, UnitMetadata } from '../models/cv.models';

@Injectable({ providedIn: 'root' })
export class CvService {
  private base = '/api/cvs';

  constructor(private http: HttpClient) {}

  isNameTaken(name: string, bu: string): Observable<boolean> {
    return this.http
      .get<{ taken: boolean }>(`${this.base}/check-name`, { params: { name, bu } })
      .pipe(map(r => r.taken));
  }

  listCVs(bu: string, entity?: string): Observable<CalculatedVariableDTO[]> {
    const params: any = { bu };
    if (entity) params.entity = entity;
    return this.http.get<CalculatedVariableDTO[]>(this.base, { params });
  }

  getCVById(id: string) {
    return this.http.get<CalculatedVariableDTO>(`${this.base}/${id}`);
  }

  validateFormula(payload: Partial<CalculatedVariableDTO>) {
    return this.http.post<FormulaValidationResponse>(`${this.base}/validate`, payload);
  }

  createCV(payload: Partial<CalculatedVariableDTO>) {
    return this.http.post<{ id: string; version: number }>(this.base, payload);
  }

  updateCV(id: string, payload: Partial<CalculatedVariableDTO>) {
    return this.http.put<{ id: string; version: number }>(`${this.base}/${id}`, payload);
  }

  getUnits(): Observable<UnitMetadata[]> {
    return this.http.get<UnitMetadata[]>('/api/units');
  }

  getMTVCodes(): Observable<{ code: string; displayName: string }[]> {
    return this.http.get<{ code: string; displayName: string }[]>('/api/mtv-codes');
  }
}
