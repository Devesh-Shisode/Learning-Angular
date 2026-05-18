import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registrationForm! : FormGroup
  constructor( private fb: FormBuilder) { 
    this.createform()
    this.loadUserProfile()
  }

  ngOnInit(): void {
  }

  createform (){
//     this.registrationForm = new FormGroup({
//       name : new FormControl('',Validators.required),
//       email : new FormControl('',Validators.required),
//       password : new FormControl('',[Validators.required,Validators.minLength(6)]),
//       confirmpassword : new FormControl('',Validators.required),
//       address : new FormGroup({
//           street : new FormControl(''),
//           city : new FormControl(''),
//           postalcode : new FormControl('')
//       }),
//       skills : new FormArray([
//         new FormControl('')
//       ])
//     },
//      {validators : this.passwordMatchValidator}
// );
      this.registrationForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmpassword: ['', Validators.required],
  address: this.fb.group({
    street: [''],
    city: [''],
    postalcode: ['']
  }),
  skills: this.fb.array([''])
}, { validators: this.passwordMatchValidator });

  }
  get password(){
    return this.registrationForm.get('password')
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword')
  }

  get skills(): FormArray {
  return this.registrationForm.get('skills') as FormArray;
}

  passwordMatchValidator (group : AbstractControl): ValidationErrors | null
{ 
      console.log(group);
      
    const password=group.get('password')?.value
    const confirmpassword =group.get('confirmpassword')?.value
  return  password===confirmpassword ? null : {passwordMismatch : true}
}
    onSubmit(){
      console.log(this.registrationForm);
      
    }

    loadUserProfile(){
        this.registrationForm.setValue({
                name: 'roshan',
                email : 'roshan@gmail.com',
                password : '1234567',
                confirmpassword : '1234567',
                address :{
                street :'khotenagr',
                city : 'jalgaon',
                postalcode : 425001},

                skills : ['skill']
        })

      // this.registrationForm.patchValue({
      //   name : 'chirag'
      // })
    }

    addSkill(){
      this.skills.push(new FormControl(''))
    }
    removeSkill(i :number){
      this.skills.removeAt(i)
    }
}
