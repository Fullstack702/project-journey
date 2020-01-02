import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { UtilsService } from 'src/app/services/utils.service';
import { ProjectDetailsPopupComponent } from '../project-details-popup/project-details-popup.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sortByOptions = ['Key', 'Project Name', 'Status', 'Manager', 'Progress'];
  currentSortBy = this.sortByOptions[0];
  showItems = ['done', 'in progress', 'expired', 'closed'];
  showItem = 'All Projects';

  constructor(
    private modalService: BsModalService,
    private utils: UtilsService
  ) {}

  ngOnInit() {

    this.utils.ApiSearchProjects({}, success => {
      console.log(success);
    }, error => {
      console.log(error);
    });


  }

  openProject(status, pcnt) {
    this.modalService.show(ProjectDetailsPopupComponent, {
      initialState: {
        projectStatus: status,
        completionPcnt: pcnt
      },
      class: 'project-modal'
    });
  }

  getShowItem(item) {
    if (item === 'in progress') {
      return 'in-progress';
    }
    return item;
  }
}
