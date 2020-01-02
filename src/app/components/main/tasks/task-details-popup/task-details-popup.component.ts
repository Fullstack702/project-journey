import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ATTACHMENTS } from '../task';

@Component({
  selector: 'app-task-details-popup',
  templateUrl: './task-details-popup.component.html',
  styleUrls: ['./task-details-popup.component.css']
})
export class TaskDetailsPopupComponent implements OnInit {
  taskStatus = 'done';
  completionPcnt = 100;
  attachments = ATTACHMENTS;
  myLogo = 'assets/images/account.jpg';

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {}

  getStatus() {
    switch (this.taskStatus) {
      case 'done':
        return 'Done';
      case 'design':
        return 'Design';
      case 'development':
        return 'Development';
      case 'planning':
        return 'Planning';
      case 'testing':
        return 'Testing';
      case 'backlog':
        return 'Backlog';
    }
  }
}
