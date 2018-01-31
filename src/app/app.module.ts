import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';

// App components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material.module';
import { ModelerComponent } from 'app/modeler/components/modeler/modeler.component';
import { ModelerModule } from 'app/modeler/modeler.module';

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

        MaterialModule,
        AdfModule,
        ModelerModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
