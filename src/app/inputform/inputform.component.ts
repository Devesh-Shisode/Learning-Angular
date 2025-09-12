import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    password: '',
    gender: '',
    role: '',
    terms: false
  };
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
  }
    onSubmit() {
      const form = this.formData
      this.postForm(form)
    console.log('Form Submitted:', this.formData);
    alert(`
      Form Submitted!
      Name: ${this.formData.name}
      Email: ${this.formData.email}
      Password: ${this.formData.password}
      Gender: ${this.formData.gender}
      Role: ${this.formData.role}
      Accepted Terms: ${this.formData.terms ? 'Yes' : 'No'}
    `);
  }
     postForm(formData :  any){
     const data = formData
     console.log(data);
     
     this._http.post('http://localhost:3000/data',data).subscribe()
  }
}
