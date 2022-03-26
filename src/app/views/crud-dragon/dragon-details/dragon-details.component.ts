import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss'],
})
export class DragonDetailsComponent implements OnInit {
  id!: string;
  dragon: Dragon = new Dragon();
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DragonService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    /** spinner starts on init */
    this.spinner.show();
    this.getById();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  getById(): void {
    this.service.getById(this.id).subscribe(
      res => {
        this.dragon = res;
      },
      error => {
        this.toastr.error('Ops... ocorreu um erro ao buscar o Dragão.');
      }
    );
  }
}
