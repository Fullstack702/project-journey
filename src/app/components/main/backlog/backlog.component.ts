import { Component, OnInit } from '@angular/core';
import { TASKS, PAGE_SIZES, FIELD_NAMES } from './backlog';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  tasks = TASKS;
  currentPage = 1;
  page: number;
  itemsPerPage = 25;
  totalItems = 195;
  pageSizes = PAGE_SIZES;
  currentSearch = null;
  sortByOptions = FIELD_NAMES;
  currentSortBy = this.sortByOptions[0];
  checked = [];
  allCheckedType = 0;
  constructor() {}

  ngOnInit() {
    this.tasks.forEach(task => {
      this.checked.push(false);
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

  pageChanged(event: any): void {
    this.page = event.page;
  }

  getShowItem(item) {
    if (item === 'in progress') {
      return 'in-progress';
    }
    return item;
  }

  allItemsChecked() {
    const checkItems = this.checked.filter(item => item === true);
    switch (checkItems.length) {
      case this.checked.length:
        this.allCheckedType = 1;
        return;
      case 0:
        this.allCheckedType = 0;
        return;
      default:
        this.allCheckedType = 2;
        return;
    }
  }

  onCheckClicked() {
    this.allItemsChecked();
  }

  onChangeAllCheck() {
    let checked = true;
    if (!this.allCheckedType) {
      checked = false;
    }
    for (let i = 0; i < this.checked.length; i++) {
      this.checked[i] = checked;
    }
  }
}
