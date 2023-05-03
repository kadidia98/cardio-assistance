import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-patient',
  templateUrl: './admission-patient.component.html',
  styleUrls: ['./admission-patient.component.css']
})
export class AdmissionPatientComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        prenom: ['', Validators.required],
          date_naiss: ['', Validators.required],
          sexe: ['', Validators.required],
          pods: ['', Validators.required],
          nom: ['', Validators.required],
          date_Admission : ['', Validators.required],
          group_sang : ['', Validators.required],
         // email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          tel: ['', [Validators.required, Validators.minLength(9)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
