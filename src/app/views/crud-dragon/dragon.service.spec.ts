import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DragonService } from './dragon.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DRAGONS } from 'src/app/shared/mocks/dragons';
import { Dragon } from './model/dragon';
const dragons = DRAGONS;
describe('DragonService', () => {
  let service: DragonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule],
      providers: [DragonService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(DragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('DEVE TESTAR O getAll', () => {
    service.getAll();
    expect(service.getAll).toBeTruthy();
  });

  it('DEVE TESTAR O getById', () => {
    service.getById('1');
    expect(service.getById).toBeTruthy();
  });

  it('DEVE TESTAR O delete', () => {
    service.delete('1');
    expect(service.delete).toBeTruthy();
  });

  it('DEVE TESTAR O create', () => {
    const dados: Dragon = {
      createdAt: '',
      name: 'Jessyca',
      type: 'lavender',
      histories: [],
      id: '',
    };
    service.create(dados);
    expect(service.create).toBeTruthy();
  });

  it('DEVE TESTAR O uptade', () => {
    const dados: Dragon = {
      createdAt: '2022-03-25T02:56:01.384Z',
      name: 'Jessyca',
      type: 'lavender',
      histories: [],
      id: '1',
    };
    service.uptade(dados);
    expect(service.uptade).toBeTruthy();
  });
});
