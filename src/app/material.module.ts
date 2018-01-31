import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule
} from '@angular/material';

export function modules() {
    return [
        MatButtonModule,
        MatIconModule
    ];
}

@NgModule({
    imports: modules(),
    exports: modules()
})
export class MaterialModule {}
