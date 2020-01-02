import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-release-save-popup',
  templateUrl: './release-save-popup.component.html',
  styleUrls: ['./release-save-popup.component.css']
})
export class ReleaseSavePopupComponent implements OnInit {
  success = false;
  type: FormGroup;
  constructor(public modalRef: BsModalRef, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.type = this.formBuilder.group({
      searchName: ['', Validators.required]
    });
  }

  save() {
    this.success = true;
    setTimeout(() => {
      this.modalRef.hide();
    }, 2000);
  }
}
