import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { BpmnService } from '../../services/bpmn.service';

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

    constructor(private bpmnService: BpmnService) {}

    ngOnInit() {
        this.bpmnService.setup(this.canvas.nativeElement)
            .subscribe({
                error: (error) => {
                    console.log('error: ', error.message);
                }
            });
        this.loadXml();
    }

    private loadXml() {
        if (this.source) {
            this.bpmnService.loadXml(this.source);
        }
    }
}
