import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-xml-uploader',
    templateUrl: './xml-uploader.component.html',
    styleUrls: ['./xml-uploader.component.css']
})
export class XmlUploaderComponent implements OnInit {

    @ViewChild('dropZone') dropZone: ElementRef;

    @Output()
    xmlRead = new EventEmitter<string>();

    ngOnInit() {
        const dropZone = this.dropZone.nativeElement;
        dropZone.addEventListener('dragover', this.handleDragOver.bind(this), false);
        dropZone.addEventListener('drop', this.handleFileSelect.bind(this), false);
    }

    private handleFileSelect(event) {
        event.stopPropagation();
        event.preventDefault();

        const files = <FileList>event.dataTransfer.files;
        this.readFileContent(files.item(0));
    }

    private handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    private readFileContent(file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const r = <FileReader>event.target;
            this.xmlRead.emit(r.result);
        };

        reader.readAsText(file);
    }
}
