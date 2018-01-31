import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
const Modeler = require('bpmn-js/lib/Modeler.js');

@Injectable()
export class BpmnService {

    canvas: any;
    modeler: any;
    modelerSubject: Subject<any>;

    constructor() {
        this.modelerSubject = new Subject<any>();
    }

    setup(canvasElement) {
        this.canvas = canvasElement;
        this.render();
        return this.modelerSubject;
    }

    render() {
        this.modeler = new Modeler({
            container: this.canvas
        });
    }

    loadXml(xml: string) {
        this.modeler.importXML(xml, (err) => {
            if (err) {
                this.modelerSubject.error(err);
            }

            this.modelerSubject.next();
        });
    }
}
