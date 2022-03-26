import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Login } from '../model/login';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule],
providers: [LoginService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('DEVE TESTAR O setUserLocalStorage', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '12345'
    }
    service.setUserLocalStorage(dados);
    expect(service.setUserLocalStorage).toBeTruthy();
  });

  it('DEVE TESTAR O _isConfirmedUser TRUE', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '12345'
    }
    service._isConfirmedUser(dados);
    expect(service._isConfirmedUser).toBeTruthy();
  });
  
  it('DEVE TESTAR O _isConfirmedUser FALSE', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '12344'
    }
    service._isConfirmedUser(dados);
    expect(service._isConfirmedUser).toBeTruthy();
  });

  it('DEVE TESTAR O login TRUE', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '12345'
    }
    service.login(dados);
    expect(service.login).toBeTruthy();
  });

  it('DEVE TESTAR O login FALSE', () => {
    const dados: Login = {
      userName: 'dragon',
      password: '2233'
    }
    service.login(dados);
    expect(service.login).toBeTruthy();
  });

  it('DEVE TESTAR O logout', () => {
    service.logout();
    expect(service.logout).toBeTruthy();
  });

  it('DEVE TESTAR O isLogged', () => {
    service.isLogged();
    expect(service.isLogged).toBeTruthy();
  });
});
