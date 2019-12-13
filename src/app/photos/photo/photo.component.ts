import { Component, Input } from "@angular/core";

@Component({
    selector: 'pj-photo',
    templateUrl: './photo.component.html',
    styleUrls: ["./photo.component.css"]
})
export class PhotoComponent {

    @Input() url = '';
    @Input() description = '';
    
}