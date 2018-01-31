import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModelerService {

    private exportSource = new Subject();
    public exportSource$ = <Observable<any>> this.exportSource.asObservable();

    export() {
        this.exportSource.next();
    }
}
