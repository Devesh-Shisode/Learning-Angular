import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-formula-editor',
  templateUrl: './formula-editor.component.html',
  styleUrls: ['./formula-editor.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormulaEditorComponent),
    multi: true
  }]
})
export class FormulaEditorComponent implements ControlValueAccessor {
  value = '';
  disabled = false;

  onChange = (v: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void { this.value = obj || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

  insertToken(token: string) {
    // simple insertion - append token
    this.value = (this.value || '') + token;
    this.onChange(this.value);
  }

  evaluate() {
    // For the UI, we will ask server to validate/evaluate. This method simply triggers change for parent to call validate API.
    // But for better UX we could emit an event. For now parent calls cvService.validateFormula.
    alert('Press Save -> Validate will call server to evaluate the formula.');
  }
}

