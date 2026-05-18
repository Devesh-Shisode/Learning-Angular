import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-setvalue',
  templateUrl: './setvalue.component.html',
  styleUrls: ['./setvalue.component.css']
})
export class SetvalueComponent {

  userForm!: FormGroup;
    constructor(private _http : HttpClient){

    }
  ngOnInit() {
    // Create FormGroup with FormControls
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl('')
    });

    // ✅ Using setValue to set all form values
    this.userForm.setValue({
      name: 'Devesh Shisode',
      email: 'deveshshisode20@gmail.com',
      age: 25
    });

    // ✅ Log the form values after setting them
    console.log('Form Values after setValue:', this.userForm);
    
  }

  onSubmit(group : AbstractControl) {
    console.log("group------------->",group);
    
    console.log('Form Submitted:', this.userForm);
    this._http.post('http://localhost:3000/data', this.userForm.value).subscribe()
  }
}
