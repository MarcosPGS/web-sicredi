import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

import { DragonDetailsComponent } from './dragon-details.component';

describe('DragonDetailsComponent', () => {
  let component: DragonDetailsComponent;
  let fixture: ComponentFixture<DragonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
  ToastrModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [DragonService, ToastrService, NgxSpinnerService],
      declarations: [DragonDetailsComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDetailsComponent);
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
        id: '1'
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
});
