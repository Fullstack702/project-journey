import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ReleaseSavePopupComponent } from '../release-save-popup/release-save-popup.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PROJECT_NAMES, RELEASE_DATES } from "../release";

@Component({
    selector: 'app-release-create-popup',
    templateUrl: './release-create-popup.component.html',
    styleUrls: ['./release-create-popup.component.css']
})
export class ReleaseCreatePopupComponent implements OnInit {
    type: FormGroup;
    projectNames = PROJECT_NAMES;
    releaseDates = RELEASE_DATES;
    cProjectName = null;

    constructor(public modalRef: BsModalRef, private modalService: BsModalService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.type = this.formBuilder.group({
            key: ['', Validators.nullValidator],
            releaseName: ['', Validators.required],
            description: ['', Validators.required],
        });
    }

    createRelease() {
        this.modalRef.hide();
        this.modalService.show(ReleaseSavePopupComponent, {
            initialState: {},
            class: 'save-search-modal'
        });
    }

    applyFilters() {

    }
}
