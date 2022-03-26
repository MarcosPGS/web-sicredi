import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { HomeComponent } from '../../home/home.component';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

import { DragonUpdateComponent } from './dragon-update.component';

describe('DragonUpdateComponent', () => {
  let component: DragonUpdateComponent;
  let fixture: ComponentFixture<DragonUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
        ]),
        HttpClientTestingModule,
      ],
      providers: [FormBuilder, ToastrService, NgxSpinnerService, DragonService],
      declarations: [DragonUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('DEVE TESTAR O getById SUCESSO', () => {
    const retorno: Dragon = {
      createdAt: '2022-03-25T02:56:01.384Z',
      name: 'Jessyca',
      type: 'lavender',
      histories: [],
      id: '1',
    };
    const service = TestBed.inject(DragonService);
    spyOn(service, 'getById').and.returnValue(of(retorno));
    component.getById();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O getById ERROR', () => {
    component.id = '1';
    const retorno: any = {};
    const service = TestBed.inject(DragonService);
    spyOn(service, 'getById').and.returnValue(throwError(retorno));
    component.getById();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O save SUCESSO', () => {
    const dados: Dragon = {
      createdAt: '',
      name: 'Floyd',
      type: 'red',
      histories: [],
      id: '',
    };
    component.form.patchValue(dados);
    const service = TestBed.inject(DragonService);
    spyOn(service, 'uptade').and.returnValue(of(dados));
    component.save();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O Save ERROR', () => {
    const dados: Dragon = {
      createdAt: '',
      name: 'Floyd',
      type: 'red',
      histories: [],
      id: '',
    };
    component.form.patchValue(dados);
    const retorno: any = {};
    const service = TestBed.inject(DragonService);
    spyOn(service, 'uptade').and.returnValue(throwError(retorno));
    component.save();
    expect(component).toBeTruthy();
  });
});
