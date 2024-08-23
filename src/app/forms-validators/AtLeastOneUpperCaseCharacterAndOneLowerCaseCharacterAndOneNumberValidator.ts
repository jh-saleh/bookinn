import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function atLeastOneUpperCaseCharacterAndOneLowerCaseCharacterAndOneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);

        const isValid = hasUpperCase && hasLowerCase && hasNumber;

        return isValid ? null : { atLeastOneUpperCaseCharacterAndOneLowerCaseCharacterAndOneNumber: true };
    };
}