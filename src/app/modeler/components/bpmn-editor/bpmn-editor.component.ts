import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { BpmnService } from '../../services/bpmn.service';
import { ModelerService } from 'app/modeler/services/modeler.service';
const FileSaver = require('file-saver');

@Component({
    selector: 'app-bpmn-editor',
    templateUrl: './bpmn-editor.component.html',
    styleUrls: ['./bpmn-editor.component.css']
})
export class BpmnEditorComponent implements OnInit {

    @ViewChild('canvas')
    canvas: ElementRef;

    @Input()
    set source(xml: string) {
        this._source = xml;
        this.loadXml();
    }

    get source() {
        return this._source;
    }

    _source: string;

    constructor(private bpmnService: BpmnService, private modelerService: ModelerService) {
        bpmnService.importSubject.subscribe({
            error: (error) => {
                console.log('error: ', error.message);
            }
        });
        bpmnService.exportSubject.subscribe({
            next: (xml) => {
                const blob = new Blob([xml], {type: 'text/xml;charset=utf-8'});
                FileSaver.saveAs(blob, 'export.xml');
            },
            error: (error) => {
                console.log('error: ', error.message);
            }
        });

        modelerService.exportSource$.subscribe(() => bpmnService.export());
    }

    ngOnInit() {
        this.bpmnService.setup(this.canvas.nativeElement);
        this.loadXml();
    }

    private loadXml() {
        if (this.source) {
            this.bpmnService.loadXml(this.source);
        }
    }
}
