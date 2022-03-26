import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  login(): void {
    if (this.service.login(this.form.value)) {
      this.toastr.success('Logado com sucesso!');
      this.router.navigate(['/home'])
    } else {
      this.toastr.error('OPS.. Houve um erro, tenete novamente.');
    }
    
  }
}
