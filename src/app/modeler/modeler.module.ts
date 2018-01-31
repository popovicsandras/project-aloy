import { NgModule } from '@angular/core';
import { ModelerComponent } from './components/modeler/modeler.component';
import { XmlUploaderComponent } from './components/xml-uploader/xml-uploader.component';
import { BpmnEditorComponent } from './components/bpmn-editor/bpmn-editor.component';
import { BpmnService } from './services/bpmn.service';

@NgModule({
    imports: [],
    declarations: [
        ModelerComponent,
        XmlUploaderComponent,
        BpmnEditorComponent,
    ],
    providers: [
        BpmnService
    ],
    exports: [
        ModelerComponent
    ]
})
export class ModelerModule { }
