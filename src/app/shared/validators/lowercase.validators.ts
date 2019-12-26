import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(abstractControl: AbstractControl) {
    if( abstractControl.value.trim() && !/^[a-z0-9_\-]+$/.test(abstractControl.value)) {
        return { lowerCase: true};
    }
    return null;
}