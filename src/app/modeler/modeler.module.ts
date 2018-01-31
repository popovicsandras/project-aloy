import { NgModule } from '@angular/core';

import { ModelerComponent } from './components/modeler/modeler.component';
import { XmlUploaderComponent } from './components/xml-uploader/xml-uploader.component';
import { BpmnEditorComponent } from './components/bpmn-editor/bpmn-editor.component';

import { BpmnService } from './services/bpmn.service';
import { ModelerService } from './services/modeler.service';

import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        ModelerComponent,
        XmlUploaderComponent,
        BpmnEditorComponent,
    ],
    providers: [
        ModelerService,
        BpmnService
    ],
    exports: [
        ModelerComponent
    ]
})
export class ModelerModule { }
