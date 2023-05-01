import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
// nécessaire au controle de saisie du formulare de modification
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from '../username.validator';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

//pagination

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
})
export class TableUserComponent implements OnInit {




  constructor(
  
  ) {
 
   }

  ngOnInit() {
  }
}