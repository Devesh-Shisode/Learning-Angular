import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatedVariableDTO } from '../models/cv.models';
import { CvService } from '../servicces/cv.service';
import { UnitConverterService } from '../servicces/unit-converter.service';
import { UniqueCvNameValidator } from '../validators/unique-name.validator';

@Component({
  selector: 'app-cv-slider',
  templateUrl: './cv-slider.component.html',
  styleUrls: ['./cv-slider.component.css']
})
export class CvSliderComponent implements OnInit {
  @Input() selectedBU!: string; // pass header BU selection
  @Input() visible = false; // control for opening slider
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  cvForm!: FormGroup;
  units = [] as any[];
  mtvCodes: any[] = [];
  copying = false;
  existingCVs: any[] = [];
  saving = false;

  constructor(
    private fb: FormBuilder,
    private cvService: CvService,
    private uc: UnitConverterService,
    private uniqueNameValidator: UniqueCvNameValidator
  ) {}

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', {
        validators: [Validators.required, Validators.maxLength(200)],
        asyncValidators: [this.uniqueNameValidator.validate.bind(this.uniqueNameValidator)],
        updateOn: 'blur'
      }],
      formula: ['', Validators.required],
      unit: [null, Validators.required],
      description: [''],
      bu: [this.selectedBU || null, Validators.required],
      mtvCode: [null],
      version: [{ value: null, disabled: true }],
      copyCV: [false],
      existingCVId: [{ value: null, disabled: true }]
    });

    this.uc.getUnits().subscribe(u => this.units = u);
    this.cvService.getMTVCodes().subscribe(m => this.mtvCodes = m);

    this.cvForm.get('copyCV')!.valueChanges.subscribe(checked => {
      const existingCtrl = this.cvForm.get('existingCVId')!;
      if (checked) {
        existingCtrl.enable();
        this.loadExistingCVs();
      } else {
        existingCtrl.disable();
        existingCtrl.reset();
      }
    });

    this.cvForm.get('existingCVId')!.valueChanges.subscribe(id => {
      if (id) this.loadCvIntoForm(id);
    });
  }

  loadExistingCVs() {
    const bu = this.cvForm.get('bu')!.value;
    this.cvService.listCVs(bu).subscribe(list => this.existingCVs = list);
  }

  loadCvIntoForm(id: string) {
    this.cvService.getCVById(id).subscribe(cv => {
      // Patch fields but keep id blank - this will create a new CV
      this.cvForm.patchValue({
        id: '',
        name: cv.name + ' - copy',
        formula: cv.formula,
        unit: cv.unit,
        description: cv.description,
        mtvCode: cv.mtvCode,
        bu: this.cvForm.get('bu')!.value || cv.bu,
        version: null
      });
    });
  }

  close() {
    this.visible = false;
    this.closed.emit();
  }

  validateThenSave() {
    if (this.cvForm.invalid) {
      alert('Please fix validation errors before saving');
      return;
    }

    const payload: Partial<CalculatedVariableDTO> = {
      name: this.cvForm.get('name')!.value,
      formula: this.cvForm.get('formula')!.value,
      unit: this.cvForm.get('unit')!.value,
      description: this.cvForm.get('description')!.value,
      bu: this.cvForm.get('bu')!.value,
      mtvCode: this.cvForm.get('mtvCode')!.value
    };

    this.saving = true;
    this.cvService.validateFormula(payload).subscribe(valid => {
      if (!valid.ok) {
        const err = valid.errors?.map(e => e.message).join('\n') || 'Validation failed';
        alert('Formula validation errors:\n' + err);
        this.saving = false;
        return;
      }

      // create CV
      this.cvService.createCV(payload).subscribe(res => {
        alert('Created CV with ID: ' + res.id);
        this.saving = false;
        this.saved.emit();
        this.close();
      }, err => {
        alert('Failed to create CV: ' + (err?.message || JSON.stringify(err)));
        this.saving = false;
      });

    }, err => {
      alert('Failed to validate formula');
      this.saving = false;
    });
  }
}
