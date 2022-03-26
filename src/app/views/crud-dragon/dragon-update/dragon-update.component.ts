import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

@Component({
  selector: 'app-dragon-update',
  templateUrl: './dragon-update.component.html',
  styleUrls: ['./dragon-update.component.scss'],
})
export class DragonUpdateComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: DragonService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      createdAt: [null],
      type: [null, [Validators.required]],
      histories: [null],
      id: [null],
    });
    this.getById();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  getById(): void {
    this.service.getById(this.id).subscribe(
      res => {
        this.form.patchValue(res);
      },
      error => {
        this.toastr.error('Ops... ocorreu um erro ao buscar o Dragão.');
      }
    );
  }
  save(): void {
    this.service.uptade(this.form.value).subscribe(
      res => {
        this.toastr.success('Dragão Atualizado....');
        this.router.navigate(['/home']);
      },
      error => {
        this.toastr.error('Ops... ocorreu um erro ao atualizar o Dragão.');
      }
    );
  }
}
