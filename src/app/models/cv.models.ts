export interface CalculatedVariableDTO {
  id?: string; // LECVxxxxx or blank for new
  name: string;
  formula: string;
  unit: string; // unit code
  description?: string;
  bu: string;
  mtvCode?: string;
  version?: number;
}

export interface UnitMetadata {
  code: string;
  displayName: string;
  dimension?: string;
}

export interface ValidationError {
  field?: string;
  message: string;
}

export interface FormulaValidationResponse {
  ok: boolean;
  errors?: ValidationError[];
  previewValue?: any;
  previewUnit?: string;
}