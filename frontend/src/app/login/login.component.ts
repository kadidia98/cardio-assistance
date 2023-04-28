import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  errMsg: any;
  submitted = false;
  showcode = false;
 

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}

  loginUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

        }





      }
