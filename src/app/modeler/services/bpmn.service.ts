import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
const Modeler = require('bpmn-js/lib/Modeler.js');

@Injectable()
export class BpmnService {

    canvas: any;
    modeler: any;
    importSubject: Subject<any>;
    exportSubject: Subject<string>;

    constructor() {
        this.importSubject = new Subject<any>();
        this.exportSubject = new Subject<string>();
    }

    setup(canvasElement) {
        this.canvas = canvasElement;
        this.render();
        return this.importSubject;
    }

    render() {
        this.modeler = new Modeler({
            container: this.canvas
        });
    }

    loadXml(xml: string) {
        this.modeler.importXML(xml, (err) => {
            if (err) {
                this.importSubject.error(err);
            }

            this.importSubject.next();
        });
    }

    export() {
        this.modeler.saveXML((err: any, xml: any) => {
            if (err) {
                this.exportSubject.error(err);
            }

            this.exportSubject.next(xml);
        });
    }
}
