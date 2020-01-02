import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-task-delete-filter-popup',
  templateUrl: './task-delete-filter-popup.component.html',
  styleUrls: ['./task-delete-filter-popup.component.css']
})
export class TaskDeleteFilterPopupComponent implements OnInit {
  task = '';
  success = false;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  delete() {
    this.success = true;
    setTimeout(() => {
      this.modalRef.hide();
    }, 2000);
  }
}
