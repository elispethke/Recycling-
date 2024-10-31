import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {
     private formBuilder: FormBuilder;

     constructor(formBilder: FormBuilder) {
        this.formBuilder = formBilder;
     }

    createForm() : FormGroup {
      return this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
        
      })
    }
}