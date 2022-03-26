import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/views/login/service/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Login } from './model/login';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot({}), RouterTestingModule.withRoutes(
       [{path: 'home', component: HomeComponent}]
      ), HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers: [FormBuilder, LoginService, ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O login SUCESSO', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '12345'
    }
    component.form.patchValue(dados);
    component.login();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O login ERROR', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '123'
    }
    component.form.patchValue(dados);
    component.login();
    expect(component).toBeTruthy();
  });
});
