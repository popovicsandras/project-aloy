import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';

// App components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModelerComponent } from './modeler/modeler.component';
import { XmlUploaderComponent } from './modeler/components/xml-uploader/xml-uploader.component';
import { BpmnEditorComponent } from './modeler/components/bpmn-editor/bpmn-editor.component';
import { BpmnService } from 'app/modeler/services/bpmn.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'modeler',
        component: ModelerComponent,
        canActivate: [AuthGuardBpm]
    },
    {
        path: '',
        redirectTo: '/modeler',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes // ,
            // { enableTracing: true } // <-- debugging purposes only
        ),

        // ADF modules
        AdfModule,
    ],
    declarations: [
        AppComponent,
        XmlUploaderComponent,
        BpmnEditorComponent,
        LoginComponent,
        ModelerComponent
    ],
    providers: [
        BpmnService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
