import { Component, Input } from '@angular/core';

@Component({
    selector: 'pj-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VmessageComponent {

    @Input() text: string = '';
}