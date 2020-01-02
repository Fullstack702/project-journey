import { Component, OnInit } from '@angular/core';
import { TASKS, PAGE_SIZES, SAVED_SEARCHES, FIELD_NAMES } from '../task';
import { BsModalService } from 'ngx-bootstrap';
import { TaskDeleteFilterPopupComponent } from '../task-delete-filter-popup/task-delete-filter-popup.component';
import { TaskFilterPopupComponent } from '../task-filter-popup/task-filter-popup.component';
import { TaskDetailsPopupComponent } from '../task-details-popup/task-details-popup.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = TASKS;
  currentPage = 1;
  page: number;
  itemsPerPage = 25;
  totalItems = 195;
  pageSizes = PAGE_SIZES;
  savedSearches = SAVED_SEARCHES;
  currentSearch = null;
  sortByOptions = FIELD_NAMES;
  currentSortBy = this.sortByOptions[0];
  showItems = [
    'design',
    'development',
    'planning',
    'testing',
    'done',
    'backlog'
  ];
  showItem = 'All Tasks';
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  getImgUrl(str) {
    const imgName =
      str === 'very low'
        ? 'very-low'
        : str === 'very hight'
        ? 'very-high'
        : str;
    return 'assets/images/ic-' + imgName + '.png';
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }

  openRemoveFilterModal(savedSearch) {
    this.modalService.show(TaskDeleteFilterPopupComponent, {
      initialState: {
        task: savedSearch
      },
      class: 'delete-search-modal'
    });
  }

  openFilterModal() {
    this.modalService.show(TaskFilterPopupComponent, {
      initialState: {},
      class: 'filters-modal'
    });
  }

  openTaskDetailsModal(status) {
    this.modalService.show(TaskDetailsPopupComponent, {
      initialState: {
        taskStatus: status
      },
      class: 'task-modal'
    });
  }

  getShowItem(item) {
    if (item === 'in progress') {
      return 'in-progress';
    }
    return item;
  }
}
