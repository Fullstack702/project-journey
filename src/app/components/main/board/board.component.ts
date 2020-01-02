import { Component, OnInit } from '@angular/core';
import { PROJECTS_LIST } from './board';
import { BsModalService } from 'ngx-bootstrap';
import { BoardDetailsPopupComponent } from './board-details-popup/board-details-popup.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  projectsList = PROJECTS_LIST;

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

  openTaskDetailsModal() {
    this.modalService.show(BoardDetailsPopupComponent, {
      initialState: {
        taskStatus: 'planning'
      },
      class: 'task-modal'
    });
  }
}
