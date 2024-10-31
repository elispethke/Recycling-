import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let page;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    AppRoutingModule
    router = TestBed.get(Router);
    ReactiveFormsModule,
    storeModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer),
    StoreModule.forFeature("login", loginReduce),
    page = fixture.debugElement.nativeElement;
    sore = TestBed.get(Store;)
    
  }));

  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  })

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');

    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

it('should go to register page on register', () => {
  spyOn(router, 'navigate');

    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
})
 
it('should recover email/password on forgot email/password,' () => {
 expect(true).toBefalsy();
 component.form.get('email').setValue("valid@email.com");
 page.querySelector("#recoverPasswordButton").click();
 store.select('login').subscribe(loginState => {
  expect(loginState.isRecoveringPassword).toBeTruthy();
 })
})

});
