import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message!: string;
  @Input() field!: AbstractControl ;
  @Input() error!: string;

  shouldShowError(): boolean {
    return this.field.touched && this.field.errors?.[this.error]; // Verifica se o campo está tocado e se existe erro
  }
  
  constructor() {
    
  }

  ngOnInit() {}

  shouldShowComponent(){
    //form.get('email')?.touched && form.get('email')?.errors?.['required']
    if(this.field.touched && this.field.errors?.['this.error']){
      return true
    }
    return false

  }
}
