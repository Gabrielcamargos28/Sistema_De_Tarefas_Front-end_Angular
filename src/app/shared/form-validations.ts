import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class FormValidations{

    static equalTo(otherField: string): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const fielValue = control.value
            const otherFieldValue = control.root.get(otherField)?.value
            if(fielValue !== otherFieldValue){
                return { equalTo: true}
            }
            return null
        }
    }
}