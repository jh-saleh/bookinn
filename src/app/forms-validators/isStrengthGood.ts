import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isStrengthGood(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const entropy = calculateEntropy(value);
        const passwordValid = entropy >= 40;

        return !passwordValid ? { isStrengthGood: true } : null;
    };
}

function calculateEntropy(password: string): number {
    const uniqueChars = new Set(password).size;
    const length = password.length;
    return Math.log2(uniqueChars ** length);
}
