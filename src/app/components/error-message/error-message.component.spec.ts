import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should show error message when field is touched and error is present', () => {
    // Criar um FormControl 
    component.field = new FormControl(); 

    // Marcar o campo como tocado e definir um erro
    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = "anyError";

    // Verificar se a mensagem de erro é exibida
    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it('should hide error message when field is not touched', () => {
    component.field = new FormControl();

    // Definir um erro, mas não marcar o campo como tocado
    component.field.setErrors({ anyError: true });
    component.error = "anyError";

    // Verificar se a mensagem de erro NÃO é exibida
    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched, but no errors', () => {
    component.field = new FormControl();
    
    // Define o erro que será verificado ("anyError")
    component.error = "anyError";
    
    // Verifica se a mensagem de erro não deve ser exibida (falsy) já que não há erros no campo
    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched and has error, but it is a different error', () => {
    component.field = new FormControl(); 
    // Marcar o campo como tocado e definir um erro
    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    
    // Definir um erro diferente ("anotherError")
    component.error = "anotherError";

    // Verificar se a mensagem de erro NÃO deve ser exibida, já que o erro é diferente
    expect(component.shouldShowComponent()).toBeFalsy();
  });
});
