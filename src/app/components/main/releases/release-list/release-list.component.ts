import { Component, OnInit } from "@angular/core";
import { RELEASES, PAGE_SIZES, SAVED_SEARCHES, FIELD_NAMES } from "../release";
import { BsModalService } from 'ngx-bootstrap';
import { ReleaseCreatePopupComponent } from '../release-create-popup/release-create-popup.component';
import { ReleaseDetailsPopupComponent } from '../release-details-popup/release-details-popup.component';
@Component({
  selector: "app-release-list",
  templateUrl: "./release-list.component.html",
  styleUrls: ["./release-list.component.css",]
})
export class ReleaseListComponent implements OnInit {
  releases = RELEASES;
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
  showItem = 'All Releases';
  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  pageChanged(event: any): void {
    this.page = event.page;
  }

  openCreateReleaseModal() {
    this.modalService.show(ReleaseCreatePopupComponent, {
      initialState: {},
      class: 'filters-modal'
    });
  }

  openReleaseDetailsModal(release) {
    this.modalService.show(ReleaseDetailsPopupComponent, {
      initialState: {
        release: release
        // releaseStatus: status
      },
      class: 'release-modal'
    });
  }

  getShowItem(item) {
    if (item === 'in progress') {
      return 'in-progress';
    }
    return item;
  }
}
