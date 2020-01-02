import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-project-details-popup',
  templateUrl: './project-details-popup.component.html',
  styleUrls: ['./project-details-popup.component.css']
})
export class ProjectDetailsPopupComponent implements OnInit {
  projectStatus = 'done';
  completionPcnt = 100;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  getStatus() {
    switch (this.projectStatus) {
      case 'done':
        return 'Done';
      case 'in-progress':
        return 'In Progress';
      case 'expired':
        return 'Expired';
      case 'closed':
        return 'Closed';
    }
  }
}
