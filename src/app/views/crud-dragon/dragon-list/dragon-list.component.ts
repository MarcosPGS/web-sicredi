import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';
import { LoginService } from 'src/app/views/login/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss'],
})
export class DragonListComponent implements OnInit {
  dragons: Dragon[] = [];
  constructor(
    private service: DragonService,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDragon();
  }

  getAllDragon(): void {
    this.service.getAll().subscribe(
      res => {
        this.dragons = res;
        this.dragons.forEach(dragon => {
          dragon.name = dragon.name.toUpperCase();
        });
      },
      error => {
        this.toastr.error('Ops... ocorreu um erro ao listar so Dragões.');
      }
    );
  }
  delete(id: string): void {
    this.service.delete(id).subscribe(
      res => {
        this.getAllDragon();
        this.toastr.success('Dragão deletado....');
      },
      error=> {
        this.toastr.error('Ops... ocorreu um erro ao listar so Dragões.');
      }
    );
  }
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
