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

import { DragonCreateComponent } from './dragon-create.component';

describe('DragonCreateComponent', () => {
  let component: DragonCreateComponent;
  let fixture: ComponentFixture<DragonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            ToastrModule.forRoot({}),
            RouterTestingModule.withRoutes([
              { path: 'home', component: HomeComponent },
            ]),
            HttpClientTestingModule,
          ],
          providers: [FormBuilder, ToastrService, DragonService],
      declarations: [ DragonCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
    spyOn(service, 'create').and.returnValue(of(dados));
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
    spyOn(service, 'create').and.returnValue(throwError(retorno));
    component.save();
    expect(component).toBeTruthy();
  });
});
