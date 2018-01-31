import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelerService } from '../../services/modeler.service';

@Component({
    selector: 'app-modeler',
    templateUrl: './modeler.component.html',
    styleUrls: ['./modeler.component.scss']
})
export class ModelerComponent {

    bpmnXml: string;

    constructor(private modelerService: ModelerService) {}

    xmlRead(xml: string) {
        this.bpmnXml = xml;
    }

    export() {
        this.modelerService.export();
    }
}
