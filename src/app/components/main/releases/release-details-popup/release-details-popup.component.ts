import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { TASKS } from '../release';

@Component({
  selector: 'app-release-details-popup',
  templateUrl: './release-details-popup.component.html',
  styleUrls: ['./release-details-popup.component.css']
})
export class ReleaseDetailsPopupComponent implements OnInit {
  releaseStatus = 'done';
  completionPcnt = 100;
  tasks = TASKS;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  getStatus() {
    switch (this.releaseStatus) {
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

  getImgUrl(str) {
    const imgName =
      str === 'very low'
        ? 'very-low'
        : str === 'very hight'
          ? 'very-high'
          : str;
    return 'assets/images/ic-' + imgName + '.png';
  }

  getShowItem(item) {
    if (item === 'in progress') {
      return 'in-progress';
    }
    return item;
  }

}
