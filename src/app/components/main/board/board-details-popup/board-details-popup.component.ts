import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ATTACHMENTS } from '../board';

@Component({
  selector: 'app-board-details-popup',
  templateUrl: './board-details-popup.component.html',
  styleUrls: ['./board-details-popup.component.css']
})
export class BoardDetailsPopupComponent implements OnInit {
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
