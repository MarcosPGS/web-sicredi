import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { DRAGONS } from 'src/app/shared/mocks/dragons';
import { ArraySortPipe } from 'src/app/shared/pipes/array-sort.pipe';
import { LoginComponent } from '../../login/login.component';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

import { DragonListComponent } from './dragon-list.component';

describe('DragonListComponent', () => {
  let component: DragonListComponent;
  let fixture: ComponentFixture<DragonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: '', component: LoginComponent },
        ]),
        HttpClientTestingModule,
      ],
      providers: [DragonService, ToastrService],
      declarations: [DragonListComponent, ArraySortPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('DEVE TESTAR O logout', () => {
    component.logout();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O delete SUCESSO', () => {
    const retorno: any = {};
    const service = TestBed.inject(DragonService);
    spyOn(service, 'delete').and.returnValue(of(retorno));
    component.delete('1');
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O delete ERROR', () => {
    const retorno: any = {};
    const service = TestBed.inject(DragonService);
    spyOn(service, 'delete').and.returnValue(throwError(retorno));
    component.delete('1');
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O getAllDragon SUCESSO', () => {
    const dragons: Dragon[] = [
      {
        createdAt: '2022-03-25T02:56:01.384Z',
        name: 'Jessyca',
        type: 'lavender',
        histories: [],
        id: '1',
      },
      {
        createdAt: '2022-03-25T00:22:35.587Z',
        name: 'Floyd',
        type: 'red',
        histories: [],
        id: '',
      },
    ];
    const service = TestBed.inject(DragonService);
    spyOn(service, 'getAll').and.returnValue(of(dragons));
    component.getAllDragon();
    expect(component).toBeTruthy();
  });

  it('DEVE TESTAR O getAllDragon ERROR', () => {
    const retorno: any = {};
    const service = TestBed.inject(DragonService);
    spyOn(service, 'getAll').and.returnValue(throwError(retorno));
    component.getAllDragon();
    expect(component).toBeTruthy();
  });
});
