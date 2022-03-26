import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DragonService } from '../dragon.service';
import { Dragon } from '../model/dragon';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private service: DragonService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      type: [null, [Validators.required]],
      histories: [null],
    });
  }

  save(): void {
    this.service.create(this.form.value).subscribe(
      (res: Dragon) => {
        this.toastr.success('Dragão criado....')
        this.router.navigate(['/home']);
      },
      (error: any) => {
        this.toastr.error('Ops... ocorreu um erro ao criar o Dragão.');
      }
    );
  }
}
