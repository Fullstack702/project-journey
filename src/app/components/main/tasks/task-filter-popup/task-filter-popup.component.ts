import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TaskSaveFilterPopupComponent } from '../task-save-filter-popup/task-save-filter-popup.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EPICS, TYPES, ENVIRONMENTS, STATUSES, RELEASES, PRIORITIES, CREATE_DATES } from "../task";
// import { PRIORITIES, CREATE_DATES } from "../task";

@Component({
  selector: 'app-task-filter-popup',
  templateUrl: './task-filter-popup.component.html',
  styleUrls: ['./task-filter-popup.component.css']
})
export class TaskFilterPopupComponent implements OnInit {
  type: FormGroup;
  status = null;
  epics = EPICS;
  statuses = STATUSES;
  tasktypes = TYPES;
  environments = ENVIRONMENTS;
  releases = RELEASES;
  priorities = PRIORITIES;
  createDates = CREATE_DATES;
  constructor(public modalRef: BsModalRef, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.type = this.formBuilder.group({
      key: ['', Validators.nullValidator],
      taskName: ['', Validators.required],
      assignee: ['', Validators.required],
    });
  }

  saveSearch() {
    this.modalRef.hide();
    this.modalService.show(TaskSaveFilterPopupComponent, {
      initialState: {},
      class: 'save-search-modal'
    });
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

  applyFilters() {

  }
}
