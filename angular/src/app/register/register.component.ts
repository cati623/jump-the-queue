import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../form-login/components/login/services/login.service';
import { Visitor } from '../shared/backendModels/interfaces';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, public snackBar: MatSnackBar, 
    private loginService: LoginService) { }

  submitRegister(formValue): void {
    const visitor: Visitor = new Visitor();
    visitor.username = formValue.username;
    visitor.name = formValue.name;
    visitor.phoneNumber = formValue.phoneNumber;
    visitor.password = formValue.password;
    visitor.acceptedCommercial = formValue.acceptedCommercial;
    visitor.acceptedTerms = formValue.acceptedTerms;
    visitor.userType = false;

    this.registerService.registerVisitor(visitor).subscribe(
      (visitorResult: Visitor) => {
        this.loginService.login(visitorResult.username, visitorResult.password);
      },
    );
  }

  ngOnInit() {
  }

}
